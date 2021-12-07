import { BadRequestError, NotFoundError } from "../../../domain/Exceptions/Errors"
import { Request, Response, NextFunction } from "express"
import { ValidationError } from "sequelize/dist"

export default function (err: Error, req: Request, res: Response, next: NextFunction) {
    console.log("Middleware ishladi", err)
    if (err instanceof BadRequestError || err instanceof ValidationError) {
        return res.status(400).json({
            data: null,
            error: err.message
        })
    }
    if (err instanceof NotFoundError) {
        return res.status(404).json({
            data: null,
            error: "Resource not found"
        })
    }

    return res.status(500).json({
        data: null,
        error: "Something went wrong"
    })
    // next(err)
}