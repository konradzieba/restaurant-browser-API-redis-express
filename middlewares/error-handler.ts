import type { Request, Response, NextFunction } from 'express';
import { errorResponse } from '../utils/responses.js';

export function errorHandler(
	error: any,
	req: Request,
	res: Response,
	next: NextFunction
) {
	console.error(error);
	errorResponse(res, 500, error);
}
