import { Request, Response } from "express";
import { CalculateServerCapacity } from "../utils";

export default async function ServerPlanning(req: Request, res: Response) {
	const { server, virtualMachines } = req.body;
	try {
		const capacity = CalculateServerCapacity({
			server,
			virtualMachines,
		});

		return res.status(200).json({
			message: "Successfully calculated server capacity",
			status: "Success",
			data: {
				capacity,
			},
		});
	} catch (error) {
		return res
			.status(500)
			.json({
				message: "Error calculating server capacity",
				status: "Error",
				data: null,
			});
	}
}
