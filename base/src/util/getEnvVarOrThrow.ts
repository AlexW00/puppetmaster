export const getEnvVarOrThrow = (name: string): string => {
	const value = process.env[name];
	if (value === undefined) {
		console.log(process.env);
		throw new Error(`Environment variable ${name} not set`);
	}
	return value;
};

export const getEnvVarOrDefault = (
	name: string,
	defaultValue: string
): string => {
	const value = process.env[name];
	return value || defaultValue;
};
