import { HttpException, HttpStatus } from '@nestjs/common';

export class EmailAlreadyExistsException extends HttpException {
  constructor() {
    super(`L'email existe déjà`, HttpStatus.BAD_REQUEST);
  }
}

export class InvalidEmailFormatException extends HttpException {
  constructor() {
    super(`Mauvais format de l'email`, HttpStatus.BAD_REQUEST);
  }
}

export class NameTooShortException extends HttpException {
  constructor() {
    super(`Le nom doit faire au moins 2 caractères`, HttpStatus.BAD_REQUEST);
  }
}

export class ServerErrorException extends HttpException {
  constructor() {
    super(`Erreur serveur`, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

export class InvalidPasswordFormatException extends HttpException {
  constructor() {
    super(`Mot de passe au mauvais format`, HttpStatus.BAD_REQUEST);
  }
}
