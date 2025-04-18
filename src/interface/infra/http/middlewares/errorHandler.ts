import { NextFunction, Request, Response } from 'express';

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.error(err);

  res.status(500).json({
    status: 'error',
    message: err.message || 'Internal server error',
  });
}
