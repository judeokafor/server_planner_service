import * as validator from "express-validator";

const { body } = validator;

export enum RouteID {
	CalculateServerCapacity = "CalculateServerCapacity",
}

const validate = (type: RouteID): validator.ValidationChain[] => {
	switch (type) {
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
