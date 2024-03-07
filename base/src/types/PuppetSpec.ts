import { parse } from "yaml";

export interface PuppetSpec {
	name: string;
	type: string;
	version: string;
	description: string;
	image: string;
	abilities: AbilitySpec[];
}

export interface AbilitySpec {
	name: string;
	description: string;
	instructions: string;
	parameters: ParametersSpec;
	returns: { [key: string]: ReturnSpec };
	functions: FunctionSpec[];
}

export interface FunctionSpec {
	name: string;
	version: string;
	options: { [key: string]: any };
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

export function parsePuppetSpec(puppetSpecYaml: string): PuppetSpec {
	console.log("Parsing puppet spec");

	try {
		const spec = parse(puppetSpecYaml);
		// TODO: Validate schema
		console.log("Parsed puppet spec", spec);
		return spec;
	} catch (error) {
		throw new Error(`Failed to parse puppet spec: ${error}`);
	}
}
