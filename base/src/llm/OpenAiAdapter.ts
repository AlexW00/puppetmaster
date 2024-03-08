import { AbilitySpec } from "../types/PuppetSpec";
import { LlmAdapter } from "./LlmAdapter";

class OpenAiAdapter extends LlmAdapter {
	name = "OpenAI";

	override async executeAbility(ability: AbilitySpec, parameters: any) {
		console.log(
			`[ADAPTER] Executing ability ${JSON.stringify(
				ability
			)} with parameters: ${JSON.stringify(parameters)}`
		);
		return "Hello, World!";
	}
}

export default new OpenAiAdapter();
