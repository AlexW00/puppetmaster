import {
	FunctionUseSpec,
	NamedAndVersioned,
	PuppetSpec,
} from "../types/PuppetSpec";
import { getEnvVarOrDefault } from "../util/getEnvVarOrThrow";

export interface PuppetMasterControllerOptions {
	host: string;
	port: number;
}

class PuppetMaster {
	private options: PuppetMasterControllerOptions;

	constructor(options: PuppetMasterControllerOptions) {
		this.options = options;
	}

	public getFunctionSpecs(
		functions: NamedAndVersioned[]
	): Promise<FunctionUseSpec[]> {
		console.log(`Getting function infos for ${functions.length} functions`);
		console.warn(`[PuppetMaster] getFunctionInfos not implemented`);
		return Promise.resolve([]);
	}

	public getFriendSpecs(): Promise<PuppetSpec[]> {
		console.warn(`[PuppetMaster] getFriendInfos not implemented`);
		return Promise.resolve([]);
	}
}

export default new PuppetMaster({
	host: getEnvVarOrDefault("PUPPET_MASTER_HOST", "localhost"),
	port: parseInt(getEnvVarOrDefault("PUPPET_MASTER_PORT", "3000")),
});
