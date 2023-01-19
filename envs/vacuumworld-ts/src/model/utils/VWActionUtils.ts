import { VWAction } from "../actions/VWAction";
import { VWPhysicalAction } from "../actions/VWPhysicalAction";
import { VWCommunicativeAction } from "../actions/VWCommunicativeAction";

export class VWActionUtils {
    public static validateActions(actions: VWAction[]): void {
        if (actions === null || actions === undefined) {
            throw new Error("The actions array cannot be null or undefined.");
        }
        else if (actions.some((action: VWAction) => action === null || action === undefined)) {
            throw new Error("The actions array cannot contain null or undefined actions.");
        }
        else if (actions.length === 0) {
            throw new Error("At least one action per cycle must by attempted by each actor.");
        }
        else if (actions.length > 2) {
            throw new Error("At most two actions per cycle can be attempted by each actor.");
        }
        else if (actions.length === 2 && actions[0] instanceof VWPhysicalAction && actions[1] instanceof VWPhysicalAction) {
            throw new Error("At most one physical action per cycle can be attempted by each actor.");
        }
        else if (actions.length === 2 && actions[0] instanceof VWCommunicativeAction && actions[1] instanceof VWCommunicativeAction) {
            throw new Error("At most one communicative action per cycle can be attempted by each actor.");
        }
    }
}
