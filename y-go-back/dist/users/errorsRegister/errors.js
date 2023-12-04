"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidPasswordFormatException = exports.ServerErrorException = exports.NameTooShortException = exports.InvalidEmailFormatException = exports.EmailAlreadyExistsException = void 0;
const common_1 = require("@nestjs/common");
class EmailAlreadyExistsException extends common_1.HttpException {
    constructor() {
        super('L\'email existe déjà', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.EmailAlreadyExistsException = EmailAlreadyExistsException;
class InvalidEmailFormatException extends common_1.HttpException {
    constructor() {
        super('Mauvais format de l\'email', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.InvalidEmailFormatException = InvalidEmailFormatException;
class NameTooShortException extends common_1.HttpException {
    constructor() {
        super('Le nom doit faire au moins 2 caractères', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.NameTooShortException = NameTooShortException;
class ServerErrorException extends common_1.HttpException {
    constructor() {
        super('Erreur serveur', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
exports.ServerErrorException = ServerErrorException;
class InvalidPasswordFormatException extends common_1.HttpException {
    constructor() {
        super('Mot de passe au mauvais format', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.InvalidPasswordFormatException = InvalidPasswordFormatException;
//# sourceMappingURL=errors.js.map