import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export default async function requestValidator(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res
			.status(400)
			.json({
				message: "Bad request",
				status: "Error",
				data: errors.array(),
			});
	}

	return next();
}
