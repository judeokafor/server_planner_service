import calculateServerCapacity from "../api/utils/calculateServerCapacity";

describe("Running Server Capacity Unit tests <...>", () => {
	describe("Server should calculate the capacity effectively", () => {
		it("should return a valid answer for correct values", () => {
			const server = { CPU: 2, RAM: 32, HDD: 100 };
			const virtualMachines = [
				{ CPU: 1, RAM: 16, HDD: 10 },
				{ CPU: 1, RAM: 16, HDD: 10 },
				{ CPU: 2, RAM: 32, HDD: 100 },
			];
			const capacity = calculateServerCapacity({ server, virtualMachines });
			expect(capacity).toEqual(2);
		});
		
	});

});
