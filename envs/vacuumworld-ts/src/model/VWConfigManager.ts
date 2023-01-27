import * as fs from "fs";
import * as path from "path";

export class VWConfigManager {
    private constructor() {}

    public static loadConfig(): any {
        const configFileDir = path.join(path.resolve("."), "saved_states");
        const configFilePath = path.join(configFileDir, "config.json");

        if (!fs.existsSync(configFileDir)) {
            throw new Error("The path to the supposed config file parent directory points to a non-existent directory.");
        }
        else if (!fs.lstatSync(configFileDir).isDirectory()) {
            throw new Error("The path to the supposed config file parent directory does not point to a directory.");
        }
        else {
            return JSON.parse(fs.readFileSync(configFilePath, "utf-8"));
        }
    }
}
