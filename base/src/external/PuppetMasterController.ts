import {
	FunctionUseSpec,
	NamedAndVersioned,
	PuppetSpec,
} from "../types/PuppetSpec";
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
	): Promise<FunctionUseSpec[]> {
		return fetch(`http://${this.options.host}:${this.options.port}/functions`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(functions),
		}).then((res) => res.json());
	}

	public async getFriendSpecs(): Promise<PuppetSpec[]> {
		return fetch(
			`http://${this.options.host}:${this.options.port}/puppet/${this.puppetId}/friends`
		).then((res) => res.json());
	}
}

export default new PuppetMaster({
	host: getEnvVarOrDefault("PUPPET_MASTER_HOST", "localhost"),
	port: parseInt(getEnvVarOrDefault("PUPPET_MASTER_PORT", "3000")),
});
