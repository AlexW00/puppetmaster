import { Express } from "express";
import { PuppetSpec } from "../types/PuppetSpec";

export const createInfoRoute = (app: Express, puppetSpec: PuppetSpec) => {
	app.get(`/info`, (req, res) => {
		console.log(`Received request for info`);
		res.send(puppetSpec);
	});
};
