import { VWAppearance } from "../../common/VWAppearance";
import { VWColour } from "../../common/VWColour";
import { VWOrientation } from "../../common/VWOrientation";

export class VWActorAppearance implements VWAppearance {
    private actorID: string;
    private colour: VWColour;
    private orientation: VWOrientation;

    constructor(actorID: string, colour: VWColour, orientation: VWOrientation) {
        this.actorID = VWActorAppearance.validateActorID(actorID);
        this.colour = VWActorAppearance.validateColour(colour);
        this.orientation = VWActorAppearance.validateOrientation(orientation);
    }

    private static validateActorID(actorID: string): string {
        if (actorID === null || actorID === undefined) {
            throw new Error("The actor ID cannot be null or undefined.");
        }

        return actorID;
    }

    private static validateColour(colour: VWColour): VWColour {
        if (colour === null || colour === undefined) {
            throw new Error("The actor colour cannot be null or undefined.");
        }

        return colour;
    }

    private static validateOrientation(orientation: VWOrientation): VWOrientation {
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
