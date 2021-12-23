import * as validator from "express-validator";

const { body } = validator;

export enum RouteID {
	CalculateServerCapacity = "CalculateServerCapacity",
}

/**
 * Utility function to help validate request schema.
 * @param routeId uniquely identifies the route and what validation schema to use.
 * @returns an array of validation schema.
 */

const validate = (routeId: RouteID): validator.ValidationChain[] => {
	switch (routeId) {
		case RouteID.CalculateServerCapacity: {
			return [
				body("server").isObject().exists(),
				body("virtualMachines").isArray().exists(),
				body("server.CPU").isInt().exists(),
				body("server.RAM").isInt().exists(),
				body("server.HDD").isInt().exists(),
				body("virtualMachines.*.CPU").isInt().exists(),
				body("virtualMachines.*.RAM").isInt().exists(),
				body("virtualMachines.*.HDD").isInt().exists(),
			];
		}
		default:
			return [];
	}
};

export default validate;
