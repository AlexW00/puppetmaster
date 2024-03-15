export interface NamedAndVersioned {
	name: string;
	version: string;
}

export interface ParametersSpec {
	[key: string]: PropertySpec;
}

export interface PropertySpec {
	type: string;
	description: string;
	optional: boolean;
}

export interface ReturnSpec extends PropertySpec {
	template: string;
}
