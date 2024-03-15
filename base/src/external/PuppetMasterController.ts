import { FunctionSpec } from "../types/FunctionSpec";
import { PuppetSpec } from "../types/PuppetSpec";
import { NamedAndVersioned } from "../types/general";
import { getEnvVarOrDefault, getEnvVarOrThrow } from "../util/getEnvVarOrThrow";

export interface PuppetMasterControllerOptions {
	host: string;
	port: number;
}

class PuppetMaster {
	private options: PuppetMasterControllerOptions;
	private puppetId: string;

	constructor(options: PuppetMasterControllerOptions) {
		this.puppetId = getEnvVarOrThrow("PUPPET_ID");
		this.options = options;
	}

	public async getFunctionSpecs(
		functions: NamedAndVersioned[]
	): Promise<FunctionSpec[]> {
		return fetch(`http://${this.options.host}:${this.options.port}/functions`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(functions),
		})
			.then((res) => res.json())
			.catch((err) => {
				console.error(err);
				return [];
			});
	}

	public async getFriendSpecs(): Promise<PuppetSpec[]> {
		return fetch(
			`http://${this.options.host}:${this.options.port}/puppet/${this.puppetId}/friends`
		)
			.then((res) => res.json())
			.catch((err) => {
				console.error(err);
				return [];
			});
	}
}

export default new PuppetMaster({
	host: getEnvVarOrDefault("PUPPET_MASTER_HOST", "localhost"),
	port: parseInt(getEnvVarOrDefault("PUPPET_MASTER_PORT", "3000")),
});
