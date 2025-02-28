

const ERROR_NAME = {
    UNAUTHORIZED: 'Unauthorized access',
    BAD_REQUEST: 'Bad request',
    INTERNAL_SERVER_ERROR: 'Internal server error',
    AUTHENTICATION_FAILED: 'Authentication failed',
    USER_NOT_FOUND: 'User not found',
    NOT_FOUND: 'Not Found'
} as const;
const STATUS_CODES = {
    UNAUTHORIZED: 401,
    BAD_REQUEST: 400,
    INTERNAL_SERVER_ERROR: 501,
    AUTHENTICATION_FAILED: 404,
    USER_NOT_FOUND: 404,
    NOT_FOUND: 404
} as const;

export type ErrorResponseType = {
    name: string;
    error?: Error | string | object;
    code: number;
    message: string;
    status: false;
}

class ErrorHandler extends Error {
    status: false;
    error?: Error | string | object;
    code: number;
    constructor(message: string, code: keyof typeof STATUS_CODES, error?: Error | string | object){
        super(message);
        this.status = false;
        this.error = error;
        this.code = STATUS_CODES[code];
        this.name = ERROR_NAME[code]
    }
}

export { ErrorHandler }