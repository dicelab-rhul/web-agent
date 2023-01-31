import { VWColour } from "../common/VWColour";
import { VWExistenceChecker } from "../utils/VWExistenceChecker";
import { VWPhysicalAction } from "./VWPhysicalAction";

export class VWDropDirtAction extends VWPhysicalAction {
    private colour: VWColour;
    private static effort: bigint = 1n;

    public constructor(actorID: string, colour: VWColour) {
        super(actorID);

        this.colour = VWExistenceChecker.validateExistence(colour, "The dirt colour cannot be null or undefined.");
    }

    public getColour(): VWColour {
        return this.colour;
    }

    public getEffort(): bigint {
        return VWDropDirtAction.effort;
    }

    public static overrideDefaultEffort(newEffort: bigint): void {
        if (!VWExistenceChecker.allArgumentsExist(newEffort)) {
            console.log("The new effort for VWDropDirtAction cannot be null or undefined. The default effort will be used instead.");
        }
        else {
            VWDropDirtAction.effort = newEffort;

            console.log("The effort of VWDropDirtAction has been changed to " + newEffort + ".");
        }
    }
}
