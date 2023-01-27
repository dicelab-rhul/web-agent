import * as fs from "fs";
import * as path from "path";
import { VWEnvironmentJSON } from "./environment/VWEnvironment";
import { VWExistenceChecker } from "./utils/VWExistenceChecker";

export class VWSaveStateManager {
    private constructor() {}

    public static loadStateFromFile(f: File): VWEnvironmentJSON {
        console.log(f)
        try {
            if (!VWExistenceChecker.exists(f)) {
                throw new Error("Invalid file");
            }

            const reader = new FileReader();
            
            reader.onload = (e) => {
                console.log(e.target.result) // this shows bfile
            }
            reader.readAsText(f);

            return JSON.parse(reader.result as string);
        }
        catch (e) {
            console.log("Could not load the state because of:");
            console.log(e);

            return {
                "locations": []
            };
        }
    }

    public static loadState(name: string): VWEnvironmentJSON {
        try {
            if (!VWExistenceChecker.exists(name) || name === "") {
                throw new Error("Invalid name");
            }
            else if (!name.endsWith(".json")) {
                throw new Error("The name does not end with .json");
            }

            const savesStatesDir = path.join(path.resolve(".."), "saved_states");

            if (!fs.existsSync(savesStatesDir)) {
                throw new Error("The path to the supposed saved states parent directory points to a non-existent directory.");
            }
            else if (!fs.lstatSync(savesStatesDir).isDirectory()) {
                throw new Error("The path to the supposed saved states parent directory does not point to a directory.");
            }

            return JSON.parse(fs.readFileSync(path.join(savesStatesDir, name), "utf-8"))
        }
        catch (e) {
            console.log("Could not load the state because of:");
            console.log(e);

            return {
                "locations": []
            };
        }
    }

    public static saveState(name: string, state: VWEnvironmentJSON): void {
        try {
            if (!VWExistenceChecker.exists(name) || name === "") {
                throw new Error("Invalid name");
            }
            else if (!name.endsWith(".json")) {
                name += ".json";
            }
            else if (!VWExistenceChecker.exists(state)) {
                throw new Error("Invalid state");
            }

            const savesStatesDir = path.join(path.resolve(".."), "saved_states");

            if (!fs.existsSync(savesStatesDir)) {
                fs.mkdirSync(savesStatesDir);
            }
            else if (!fs.lstatSync(savesStatesDir).isDirectory()) {
                throw new Error("The path to the supposed saved states parent directory does not point to a directory.");
            }

            fs.writeFileSync(`${savesStatesDir}${path.sep}${name}`, JSON.stringify(state))
        }
        catch (e) {
            console.log("Could not save the state because of:");
            console.log(e);
        }
    }
}
