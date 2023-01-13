import { VWColour } from "../common/VWColour";
import { VWPhysicalAction } from "./VWPhysicalAction";

export class VWDropDirtAction extends VWPhysicalAction {
    private colour: VWColour;

    public constructor(actorID: string, colour: VWColour) {
        super(actorID);

        this.colour = this.validateColour(colour);
    }

    private validateColour(colour: VWColour): VWColour {
        if (colour === null || colour === undefined) {
            throw new Error("The dirt colour cannot be null or undefined.");
        }

        return colour;
    }
}
