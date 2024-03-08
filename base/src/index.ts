import express, { Express, Request, Response } from "express";
import { parsePuppetSpec } from "./types/PuppetSpec";
import { createInfoRoute } from "./routes/InfoRoute";
import { createAbilityRoute } from "./routes/AbilityRoute";
import fs from "fs";
import bodyParser from "body-parser";
import { getEnvVarOrDefault, getEnvVarOrThrow } from "./util/getEnvVarOrThrow";

const app: Express = express();
const port = getEnvVarOrDefault("PORT", "3000");

const puppetSpecYamlFilename = getEnvVarOrThrow("PUPPET_SPEC_YAML_FILENAME");
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
	puppetSpec.abilities.forEach((ability) => createAbilityRoute(app, ability));
});
