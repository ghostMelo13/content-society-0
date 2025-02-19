"use server"
import { JobSchemaType, jobFormSchema } from '@/lib/schema/jobSchema';
// import prisma from '@/lib/prisma';
import prisma from "@/config/prisma.config";
import { ErrorHandler } from '@/lib/error';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';


export async function createJob(_data: JobSchemaType, logoUrl: string | undefined) {
  try {
    const data = jobFormSchema.parse(_data);

    // Get the session
    const session = await getServerSession(authOptions);
    console.log('job-session', session)
    if (!session || !session.user?.email) {
      throw new ErrorHandler("Unauthorized: No user session found", 'UNAUTHORIZED', "You are not authorized, please log in.");
      // return {
      //   status: false,
      //   error: new ErrorHandler("Unauthorized: No user session found", 'UNAUTHORIZED', "You are not authorized, please log in.")
      // }
    }

    return await prisma.$transaction(async (txn) => {
      // Fetch the user from the database
      const user = await txn.user.findUnique({
        where: { email: session?.user?.email || undefined },
        select: { id: true }, // Only fetch the `id`
      });

      if (!user) {
        throw new ErrorHandler("User not found in the database", 'USER_NOT_FOUND');
      }

      console.log("user", user);

      const job = await txn.job.create({
        data: {
          title: data.title,
          description: data.description ?? undefined,
          orgName: data.orgName,
          orgEmail: data.orgEmail,
          orgBio: data.orgBio ?? undefined,
          category: data.category,
          type: data.type,
          currency: data.currency,
          Salary: data.salary ?? undefined,
          requiredSkills: data.requiredSkills,
          experience: data.experience ?? undefined,
          userId: user.id,
          orgLogo: logoUrl
        },
      });

      const updatedUser = await txn.user.update({
        where: { id: user.id },
        data: { role: "EMPLOYER" },
        select: { id: true, role: true }
      })

      return { 
        status: true, 
        job: {
          ...job,
          description: data.description ?? undefined,
          orgBio: data.orgBio ?? undefined,
          Salary: data.salary ?? undefined,
          experience: data.experience ?? undefined,
        } ,
        requiresSessionUpdate: true
      };

    });

    
  } catch (error: any) {
    return { 
      status: false, 
      error: {
        message: error?.error, 
        code: error.code, 
        statusCode: error.status 
      } 
    };
  }
}

export async function getJobs() {
  const jobs = await prisma.job.findMany();
  return jobs;
}

export async function getJobById(id: string) {
    try {
        const job = await prisma.job.findUnique({
            where: { id },
        });
        
        return { status: true, job };
    } catch (error) {
        console.error("Error fetching job:", error);
        return { status: false, error: "Failed to fetch job details" };
    }
}

export async function recordApplyJob(jobId: string){
  const session = await getServerSession(authOptions);
  console.log('job-session', session)
  if (!session || !session.user?.email) {
    throw new ErrorHandler("Unauthorized: No user session found", 'UNAUTHORIZED', "You are not authorized, please log in.");
    // return {
    //   status: false,
    //   error: new ErrorHandler("Unauthorized: No user session found", 'UNAUTHORIZED', "You are not authorized, please log in.")
    // }
  }
}
