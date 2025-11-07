import { NextFunction, Response, Request } from "express";
import { HttpException } from "../common/http-error.js";

function errorMiddleware(error: HttpException, _request: Request, response: Response, _next: NextFunction) {
	response.status(error.status ? error.status : 500).json({ error: error.message });
}

export default errorMiddleware;
