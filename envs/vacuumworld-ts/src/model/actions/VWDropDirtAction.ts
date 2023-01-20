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

    public static overrideDefaultEffort(effort: bigint): void {
        if (effort === null || effort === undefined) {
            throw new Error("The effort cannot be null or undefined.");
        }
        else {
            VWDropDirtAction.effort = effort;
        }
    }
}
