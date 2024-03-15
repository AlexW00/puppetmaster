import { FunctionSpec } from "../types/FunctionSpec";
import { AbilitySpec, PuppetSpec } from "../types/PuppetSpec";

export abstract class LlmAdapter {
	abstract name: string;
	abstract executeAbility(
		ability: AbilitySpec,
		parameters: any,
		functionSpecs: FunctionSpec[],
		friendSpecs: PuppetSpec[]
	): Promise<any>;
}
