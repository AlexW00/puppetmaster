import { parse } from "yaml";
import { NamedAndVersioned, ParametersSpec, ReturnSpec } from "./general";
import { FunctionUseSpec } from "./FunctionSpec";

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
