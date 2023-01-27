import { VWAppearance } from "../common/VWAppearance";
import { VWColour } from "../common/VWColour";
import { VWExistenceChecker } from "../utils/VWExistenceChecker";

export class VWDirtAppearance implements VWAppearance {
    private dirtID: string;
    private colour: VWColour;

    public constructor(dirtID: string, colour: VWColour) {
        this.dirtID = VWExistenceChecker.validateExistence(dirtID, "The dirt ID cannot be null or undefined.");
        this.colour = VWExistenceChecker.validateExistence(colour, "The dirt colour cannot be null or undefined.");
    }

    public getID(): string {
        return this.dirtID;
    }

    public getColour(): VWColour {
        return this.colour;
    }

    public equals(other: object): boolean {
        if (!VWExistenceChecker.exists(other)) {
            return false;
        }
        else if (this === other) {
            return true;
        }
        else if (!(other instanceof VWDirtAppearance)) {
            return false;
        }
        else {
            return this.dirtID === other.dirtID && this.colour === other.colour;
        }
    }
}
