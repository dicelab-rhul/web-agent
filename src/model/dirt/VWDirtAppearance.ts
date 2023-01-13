import { Appearance } from "../common/Appearance";
import { VWColour } from "../common/VWColour";

export class VWDirtAppearance implements Appearance {
    private dirtID: string;
    private colour: VWColour;

    public constructor(dirtID: string, colour: VWColour) {
        this.dirtID = this.validateDirtID(dirtID);
        this.colour = this.validateColour(colour);
    }

    private validateDirtID(dirtID: string): string {
        if (dirtID === null || dirtID === undefined) {
            throw new Error("The dirt ID cannot be null or undefined.");
        }

        return dirtID;
    }

    private validateColour(colour: VWColour): VWColour {
        if (colour === null || colour === undefined) {
            throw new Error("The dirt colour cannot be null or undefined.");
        }

        return colour;
    }

    public getID(): string {
        return this.dirtID;
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
        else if (!(other instanceof VWDirtAppearance)) {
            return false;
        }
        else {
            return this.dirtID === other.dirtID && this.colour === other.colour;
        }
    }
}
