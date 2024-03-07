import { AbilitySpec } from "../types/PuppetSpec";

export interface LlmAdapter {
	name: string;
	executeAbility(ability: AbilitySpec, parameters: any): Promise<any>;
}
