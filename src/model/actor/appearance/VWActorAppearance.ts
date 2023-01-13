import { VWAppearance } from "../../common/VWAppearance";
import { VWColour } from "../../common/VWColour";
import { VWOrientation } from "../../common/VWOrientation";

export class VWActorAppearance implements VWAppearance {
    private actorID: string;
    private colour: VWColour;
    private orientation: VWOrientation;

    constructor(actorID: string, colour: VWColour, orientation: VWOrientation) {
        this.actorID = this.validateActorID(actorID);
        this.colour = this.validateColour(colour);
        this.orientation = this.validateOrientation(orientation);
    }

    private validateActorID(actorID: string): string {
        if (actorID === null || actorID === undefined) {
            throw new Error("The actor ID cannot be null or undefined.");
        }

        return actorID;
    }

    private validateColour(colour: VWColour): VWColour {
        if (colour === null || colour === undefined) {
            throw new Error("The actor colour cannot be null or undefined.");
        }

        return colour;
    }

    private validateOrientation(orientation: VWOrientation): VWOrientation {
        if (orientation === null || orientation === undefined) {
            throw new Error("The actor orientation cannot be null or undefined.");
        }

        return orientation;
    }

    public getID(): string {
        return this.actorID;
    }

    public getColour(): VWColour {
        return this.colour;
    }

    public getOrientation(): VWOrientation {
        return this.orientation;
    }
}
