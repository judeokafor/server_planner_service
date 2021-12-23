import { ServerProperties } from "./types";

/**
 * Calculates the server capacity given a specific server and a list of virtual machines
 * @remarks
 * Loops through all available virtual machines, reduces the server availability by the certain value.
 * @param serverProperties takes in the server and list of virtual machines
 * @returns the calculated server capacity default 0.
 */

export default function calculateServerCapacity(
	serverProperties: ServerProperties
): number {
	const { server, virtualMachines } = serverProperties;
	let { CPU, RAM, HDD } = server;

	let serverCapacity = 0;

	// loops and reduces the server availability by the virtual machine

	virtualMachines.forEach((virtualMachine) => {
		if (CPU && RAM && HDD) {
			const tempCPUSize = CPU - virtualMachine.CPU;
			const tempRAMSize = RAM - virtualMachine.RAM;
			const tempHDDSize = HDD - virtualMachine.HDD;
	
			// add serverCapacity only if server can process it
			if (tempCPUSize >= 0 && tempHDDSize >= 0 && tempRAMSize >= 0) {
				CPU = tempCPUSize;
				RAM = tempRAMSize;
				HDD = tempHDDSize;
				serverCapacity += 1;
			}
		}
		
	});

	return serverCapacity;
}
