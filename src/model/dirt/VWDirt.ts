import { VWAbstractIdentifiable } from "../common/VWAbstractIdentifiable";
import { VWColour } from "../common/VWColour";
import { VWDirtAppearance } from "./VWDirtAppearance";

export class VWDirt extends VWAbstractIdentifiable {
    private colour: VWColour;

    public constructor(colour: VWColour) {
        super();

        this.colour = this.validateColour(colour);
    }

    private validateColour(colour: VWColour): VWColour {
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
}
