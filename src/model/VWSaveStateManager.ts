import fs from "fs";

export class VWSaveStateManager {
    private constructor() {}

    public static loadState(name: string): object {
        try {
            if (name === undefined || name === null || name === "") {
                throw new Error("Invalid name");
            }
            else if (!name.endsWith(".json")) {
                name += ".json";
            }

            return JSON.parse(fs.readFileSync(`../saved_states/${name}`, "utf-8"))
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

            fs.writeFileSync(`../saved_states/${name}`, JSON.stringify(state))
        }
        catch (e) {
            console.log("Could not save the state because of:");
            console.log(e);
        }
    }
}
