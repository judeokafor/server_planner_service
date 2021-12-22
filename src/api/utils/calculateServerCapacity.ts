import { ServerProperties, ServerComponent } from "./types";
const sortVirtualMachines = (virtualMachines: ServerComponent[]) => {
	return virtualMachines.sort((a, b) => {
		let costForA = a.CPU + a.RAM + a.HDD;
		let costForB = b.CPU + b.RAM + b.HDD;
		return costForA - costForB;
	});
};

export default function calculateServerCapacity(
	serverProperties: ServerProperties
): number {
	const initialServerComponent: ServerComponent = { CPU: 0, RAM: 0, HDD: 0 };

	const { server = initialServerComponent, virtualMachines = [] } =
		serverProperties;

	let capacity = 0;

	try {
		const sortedVirtualMachines = sortVirtualMachines(virtualMachines);

		const shouldFit = (prev, curr) => (type) =>
			prev[type] + curr[type] <= server[type];

		sortedVirtualMachines.reduce((prev, curr) => {
			// Prepare curried function statement
			const fittable = shouldFit(prev, curr);

			// If the current VM can fit in without overload,
			// increase server carrying capacity
			if (fittable("HDD") && fittable("RAM") && fittable("CPU")) {
				capacity++;

				return {
					CPU: prev.CPU + curr.CPU,
					RAM: prev.RAM + curr.RAM,
					HDD: prev.HDD + curr.HDD,
				};
			}

			return {
				CPU: prev.CPU,
				RAM: prev.RAM,
				HDD: prev.HDD,
			};
		}, initialServerComponent);
	} catch (error) {
		console.log(error);
	}

	return capacity;
}
