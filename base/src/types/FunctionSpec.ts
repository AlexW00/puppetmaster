import { NamedAndVersioned, PropertySpec, ReturnSpec } from "./general";

export interface FunctionSpec extends NamedAndVersioned {
	type: string;
	description: string;
	image: string;
	options: { [key: string]: any };
	parameters: { [key: string]: PropertySpec };
	returns: ReturnSpec;
	cmd: string;
}

export interface FunctionUseSpec extends NamedAndVersioned {
	options: { [key: string]: any };
}
