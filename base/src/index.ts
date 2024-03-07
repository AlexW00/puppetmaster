import express, { Express, Request, Response } from "express";
import { parsePuppetSpec } from "./types/PuppetSpec";
import { createInfoRoute } from "./routes/InfoRoute";
import { createAbilityRoute } from "./routes/AbilityRoute";
import { OpenAiAdapter } from "./llm/OpenAiAdapter";
import fs from "fs";
import bodyParser from "body-parser";

const app: Express = express();
const port = process.env.PORT || 3000;

const puppetSpecYamlFilename = (process.env.PUPPET_SPEC_FILENAME =
	"./test/test-spec.yaml");
const puppetSpecYaml = fs.readFileSync(puppetSpecYamlFilename, "utf8");
const puppetSpec = parsePuppetSpec(puppetSpecYaml);

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);

	createInfoRoute(app, puppetSpec);
	puppetSpec.abilities.forEach((ability) =>
		createAbilityRoute(app, ability, OpenAiAdapter)
	);
});
