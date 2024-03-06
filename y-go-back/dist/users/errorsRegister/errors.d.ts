import { HttpException } from '@nestjs/common';
export declare class EmailAlreadyExistsException extends HttpException {
    constructor();
}
export declare class InvalidEmailFormatException extends HttpException {
    constructor();
}
export declare class NameTooShortException extends HttpException {
    constructor();
}
export declare class ServerErrorException extends HttpException {
    constructor();
}
export declare class InvalidPasswordFormatException extends HttpException {
    constructor();
}
