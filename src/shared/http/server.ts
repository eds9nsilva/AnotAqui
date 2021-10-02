import express, { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';
import 'express-async-errors';
import '../sequelize/index';

const app = express();

app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
      if (error instanceof AppError) {
        return response.status(error.statusCode).json({
          status: 'error',
          message: error.message,
        });
      }
  
      return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    },
  );
  
  app.listen(3333, () => {
    console.log('Server Start');
  });
  