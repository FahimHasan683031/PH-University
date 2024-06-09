import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validateSchema = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
          // check validation
        await schema.parseAsync({
          body: req.body,
        });
        next();
      } catch (err) {
        next(err);
      }
    };
  };

  export default validateSchema;