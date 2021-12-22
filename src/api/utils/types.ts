export type ServerComponent = {
	CPU: number;
	RAM: number;
	HDD: number;
};

export type ServerProperties = {
	server: ServerComponent;
	virtualMachines: ServerComponent[];
};
