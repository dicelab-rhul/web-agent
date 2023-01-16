import { config } from "./config.json";

export class VWConfigManager {
    private constructor() {}

    public static loadConfig(): object {
        return config;
    }
}
