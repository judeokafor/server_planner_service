export const mocks =  {
	lessThan3VirtualMachine: {
		server: { CPU: 2, RAM: 32, HDD: 100 },
		virtualMachines: [
			{ CPU: 1, RAM: 16, HDD: 10 },
			{ CPU: 1, RAM: 16, HDD: 10 },
			{ CPU: 2, RAM: 32, HDD: 100 },
		],
	},
	moreThan3VirtualMachine: {
		server: {
			CPU: 12,
			RAM: 16,
			HDD: 2048,
		},
		virtualMachines :[
			{
				CPU: 3,
				RAM: 3,
				HDD: 256,
			},
			{
				CPU: 4,
				RAM: 3,
				HDD: 256,
			},
			{
				CPU: 1,
				RAM: 2,
				HDD: 256,
			},
			{
				CPU: 1,
				RAM: 2,
				HDD: 512,
			},
			{
				CPU: 5,
				RAM: 8,
				HDD: 2048,
			},
		]
	},
	moreThan10VirtualMachine: {
		server: {
			CPU: 48,
			RAM: 64,
			HDD: 16384,
		},
		virtualMachines :[
			{
				CPU: 3,
				RAM: 3,
				HDD: 256,
			},
			{
				CPU: 4,
				RAM: 3,
				HDD: 256,
			},
			{
				CPU: 1,
				RAM: 2,
				HDD: 256,
			},
			{
				CPU: 1,
				RAM: 2,
				HDD: 512,
			},
			{
				CPU: 5,
				RAM: 8,
				HDD: 2048,
			},
			{
				CPU: 2,
				RAM: 4,
				HDD: 1024,
			},
			{
				CPU: 1,
				RAM: 2,
				HDD: 256,
			},
			{
				CPU: 4,
				RAM: 2,
				HDD: 2048,
			},
			{
				CPU: 2,
				RAM: 4,
				HDD: 2048,
			},
			{
				CPU: 2,
				RAM: 4,
				HDD: 1024,
			},
			{
				CPU: 1,
				RAM:2,
				HDD: 512,
			},
			{
				CPU: 2,
				RAM: 4,
				HDD: 1024,
			},
			{
				CPU: 2,
				RAM: 2,
				HDD: 256,
			},
			{
				CPU: 1,
				RAM: 2,
				HDD: 256,
			},
		]
	},
};
