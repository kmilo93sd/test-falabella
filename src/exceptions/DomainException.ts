import { HttpException } from '@nestjs/common';

export class DomainException extends HttpException {
  constructor(message) {
    super(message, 400);
  }
}
