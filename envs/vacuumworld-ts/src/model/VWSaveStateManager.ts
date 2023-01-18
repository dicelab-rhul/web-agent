const fs = require("fs"); // TODO: Convert to import.
const path = require("path-browserify"); // TODO: Convert to import.

export class VWSaveStateManager {
    private constructor() {}

    public static loadState(name: string): object {
        try {
            if (name === undefined || name === null || name === "") {
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

            return {};
        }
    }

    public static saveState(name: string, state: object): void {
        try {
            if (name === undefined || name === null || name === "") {
                throw new Error("Invalid name");
            }
            else if (!name.endsWith(".json")) {
                name += ".json";
            }
            else if (state === undefined || state === null) {
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
