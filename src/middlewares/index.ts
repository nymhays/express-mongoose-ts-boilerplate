import { Request, Response, NextFunction } from "express";

export function notFound(req: Request, res: Response, next: NextFunction) {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
}

export function errorHandler(
  error: Error,
  _: Request,
  res: Response,
  __: NextFunction
) {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const message = error.message;
  const stack = process.env.NODE_ENV === "production" ? "hidden" : error.stack;
  res.status(statusCode);
  res.json({
    message,
    stack,
  });
}
