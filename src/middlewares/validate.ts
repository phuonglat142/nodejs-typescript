import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

const validate = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.safeParseAsync(req.body);

    if (!result.success) {
      const errors = result.error.issues.map(
        (item) => `${item.message} (${String(item.path[0])})`,
      );

      res.status(400).json({
        message: "Validation failed",
        errors,
      });
      return;
    }

    next();
  };
};

export default validate;
