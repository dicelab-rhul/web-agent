import { VWAbstractIdentifiable } from "../common/VWAbstractIdentifiable";
import { VWColour } from "../common/VWColour";
import { VWExistenceChecker } from "../utils/VWExistenceChecker";
import { VWDirtAppearance } from "./VWDirtAppearance";

export type VWDirtJSON = {
    colour: VWColour;
}

export class VWDirt extends VWAbstractIdentifiable {
    private colour: VWColour;

    public constructor(colour: VWColour) {
        super();

        this.colour = VWExistenceChecker.validateExistence(colour, "The dirt colour cannot be null or undefined.");
    }

    public getColour(): VWColour {
        return this.colour;
    }

    public equals(other: object): boolean {
        if (!VWExistenceChecker.allArgumentsExist(other)) {
            return false;
        }
        else if (this === other) {
            return true;
        }
        else if (!(other instanceof VWDirt)) {
            return false;
        }
        else {
            return super.equals(other) && this.colour === other.colour;
        }
    }

    public getAppearance(): VWDirtAppearance {
        return new VWDirtAppearance(this.getID(), this.colour);
    }

    public toJsonObject(): VWDirtJSON {
        // The ID is not included in the JSON object because it is not needed.
        // A fresh ID will be generated when the dirt is deserialized.
        return {
            "colour": this.getColour()
        };
    }

    public static fromJsonObject(data: VWDirtJSON): VWDirt {
        if (!VWExistenceChecker.allArgumentsExist(data)) {
            throw new Error("The dirt JSON object cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(data["colour"])) {
            throw new Error("The colour of a `VWDirt` cannot be null or undefined.");
        }

        const colour: VWColour = data["colour"];

        return new VWDirt(colour);
    }
}
