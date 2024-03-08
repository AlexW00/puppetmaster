import { parse } from "yaml";

export interface NamedAndVersioned {
	name: string;
	version: string;
}

export interface PuppetSpec extends NamedAndVersioned {
	type: string;
	description: string;
	image: string;
	abilities: AbilitySpec[];
}

export interface AbilitySpec {
	name: string;
	description: string;
	instructions: string;
	parameters: ParametersSpec;
	usableFunction: FunctionUseSpec[];
	returns: { [key: string]: ReturnSpec };
}

export interface FunctionUseSpec extends NamedAndVersioned {
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
