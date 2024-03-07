import { LlmAdapter } from "./LlmAdapter";

export const OpenAiAdapter: LlmAdapter = {
	name: "OpenAI",
	async executeAbility(ability, parameters) {
		console.log(
			`[ADAPTER] Executing ability ${JSON.stringify(
				ability
			)} with parameters: ${JSON.stringify(parameters)}`
		);
		return "Hello, World!";
	},
};
