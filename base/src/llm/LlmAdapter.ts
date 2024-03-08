import { AbilitySpec } from "../types/PuppetSpec";

export abstract class LlmAdapter {
	abstract name: string;
	abstract executeAbility(ability: AbilitySpec, parameters: any): Promise<any>;
}
