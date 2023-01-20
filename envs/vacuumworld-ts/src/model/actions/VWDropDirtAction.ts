import { VWColour } from "../common/VWColour";
import { VWPhysicalAction } from "./VWPhysicalAction";

export class VWDropDirtAction extends VWPhysicalAction {
    private colour: VWColour;
    private static effort: bigint = 1n;

    public constructor(actorID: string, colour: VWColour) {
        super(actorID);

        this.colour = VWDropDirtAction.validateColour(colour);
    }

    public getColour(): VWColour {
        return this.colour;
    }

    private static validateColour(colour: VWColour): VWColour {
        if (colour === null || colour === undefined) {
            throw new Error("The dirt colour cannot be null or undefined.");
        }

        return colour;
    }

    public getEffort(): bigint {
        return VWDropDirtAction.effort;
    }

    public static overrideDefaultEffort(newEffort: bigint): void {
        if (newEffort === null || newEffort === undefined) {
            console.log("The new effort for VWDropDirtAction cannot be null or undefined. The default effort will be used instead.");
        }
        else {
            VWDropDirtAction.effort = newEffort;

            console.log("The effort of VWDropDirtAction has been changed to " + newEffort + ".");
        }
    }
}
