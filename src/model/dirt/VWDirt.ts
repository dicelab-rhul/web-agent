import { VWAbstractIdentifiable } from "../common/VWAbstractIdentifiable";
import { VWColour } from "../common/VWColour";
import { VWDirtAppearance } from "./VWDirtAppearance";

export class VWDirt extends VWAbstractIdentifiable {
    private colour: VWColour;

    public constructor(colour: VWColour) {
        super();

        this.colour = VWDirt.validateColour(colour);
    }

    private static validateColour(colour: VWColour): VWColour {
        if (colour === null || colour === undefined) {
            throw new Error("The dirt colour cannot be null or undefined.");
        }

        return colour;
    }

    public getColour(): VWColour {
        return this.colour;
    }

    public equals(other: object): boolean {
        if (other === null || other === undefined) {
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

    public toJsonObject(): object {
        // The ID is not included in the JSON object because it is not needed.
        // A fresh ID will be generated when the dirt is deserialized.
        return {
            "colour": this.getColour().toString()
        };
    }

    public static fromJsonObject(data: object): VWDirt {
        if (data === null || data === undefined) {
            throw new Error("The dirt JSON object cannot be null or undefined.");
        }
        else if (data["colour"] === null || data["colour"] === undefined) {
            throw new Error("The colour of a `VWDirt` cannot be null or undefined.");
        }

        const colour: VWColour = VWColour[data["colour"]]

        return new VWDirt(colour);
    }
}
