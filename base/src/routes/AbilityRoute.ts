import PuppetMasterController from "../external/PuppetMasterController";
import { LlmAdapter } from "../llm/LlmAdapter";
import OpenAiAdapter from "../llm/OpenAiAdapter";
import { AbilitySpec } from "../types/PuppetSpec";
import { Express } from "express";

export const createAbilityRoute = (app: Express, ability: AbilitySpec) => {
	app.post(`/abilities/${ability.name}`, (req, res) => {
		console.log(`Received request for ability ${ability.name}`);

		const parameters = req.body;
		// TODO: Validate parameters

		const functionSpecs = PuppetMasterController.getFunctionSpecs(
			ability.usableFunction
		);

		const friendSpecs = PuppetMasterController.getFriendSpecs();

		console.log(
			`Executing ability ${ability.name} with parameters: ${JSON.stringify(
				parameters
			)}`
		);

		OpenAiAdapter.executeAbility(ability, parameters)
			.then((result) => {
				res.send(result);
			})
			.catch((error) => {
				res
					.status(500)
					.send(`Error executing ability: ${ability.name}: ${error}`);
			});
	});
};
