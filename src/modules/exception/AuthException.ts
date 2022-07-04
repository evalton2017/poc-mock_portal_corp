
class AuthException extends Error {

    status: string;
    message: string;

    constructor(status: any, message: string){
        super(message);
        this.status = status;
        this.message = message;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor)
    }
}

export default AuthException;