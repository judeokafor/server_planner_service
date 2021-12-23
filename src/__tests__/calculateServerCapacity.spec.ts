import calculateServerCapacity from "../api/utils/calculateServerCapacity";
import {mocks} from "./__mocks__";

describe("Running Server Capacity Unit tests <...>", () => {
	describe("Should return zero if any of the server property or virtual machines is zero", () => {
		it("should return zero if server properties is zero schema", () => {
			const server = { CPU: 2, RAM: 32, HDD: 0 };
			const virtualMachines = [];
			const capacity = calculateServerCapacity({ server, virtualMachines });
			expect(capacity).toEqual(0);
			expect(capacity).toBeFalsy();
		});

		it("should return zero if server properties is zero schema", () => {
			const server = { CPU: 2, RAM: 0, HDD: 0 };
			const virtualMachines = [{ CPU: 1, RAM: 16, HDD: 10 }];
			const capacity = calculateServerCapacity({ server, virtualMachines });
			expect(capacity).toEqual(0);
			expect(capacity).toBeFalsy();
		});

		it("should return zero if server properties is zero schema", () => {
			const server = { CPU: 0, RAM: 0, HDD: 0 };
			const virtualMachines = [{ CPU: 1, RAM: 16, HDD: 10 }];
			const capacity = calculateServerCapacity({ server, virtualMachines });
			expect(capacity).toEqual(0);
			expect(capacity).toBeFalsy();
		});

		it("should return a zero for absence of virtual machines", () => {
			const server = { CPU: 2, RAM: 32, HDD: 100 };
			const virtualMachines = [];
			const capacity = calculateServerCapacity({ server, virtualMachines });
			expect(capacity).toEqual(0);
			expect(capacity).toBeFalsy();
		});
	});

	describe("Server should calculate the capacity effectively", () => {
		it("should return a valid answer for correct values for small server size with 3 virtual machines", () => {
			const { lessThan3VirtualMachine } = mocks;
			const { server, virtualMachines } = lessThan3VirtualMachine
			const capacity = calculateServerCapacity({ server, virtualMachines });
			expect(capacity).toEqual(2);
		});

		it("should return a valid answer for correct values for more than 3 virtual machines", () => {
			const { moreThan3VirtualMachine } = mocks;
			const { server, virtualMachines } = moreThan3VirtualMachine
			const capacity = calculateServerCapacity({ server, virtualMachines });
			expect(capacity).toEqual(4);
		});

		it("should return a valid answer for correct values for more than 10 virtual machines", () => {
			const { moreThan10VirtualMachine } = mocks;
			const { server, virtualMachines } = moreThan10VirtualMachine
			const capacity = calculateServerCapacity({ server, virtualMachines });
			expect(capacity).toBeGreaterThanOrEqual(12);
		});
	});
});
