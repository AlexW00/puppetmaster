import { FunctionSpec } from "../types/FunctionSpec";
import { AbilitySpec, PuppetSpec } from "../types/PuppetSpec";
import { LlmAdapter } from "./LlmAdapter";

class OpenAiAdapter extends LlmAdapter {
	name = "OpenAI";

	override async executeAbility(
		ability: AbilitySpec,
		parameters: any,
		functionSpecs: FunctionSpec[],
		friendSpecs: PuppetSpec[]
	) {
		console.log(
			`[ADAPTER] Executing ability ${JSON.stringify(
				ability
			)} with parameters: ${JSON.stringify(
				parameters
			)} and function specs: ${JSON.stringify(
				functionSpecs
			)} and friend specs: ${JSON.stringify(friendSpecs)}`
		);
		return "Hello, World!";
	}
}

export default new OpenAiAdapter();
