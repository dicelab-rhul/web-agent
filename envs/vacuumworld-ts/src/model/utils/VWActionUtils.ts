import { VWAction } from "../actions/VWAction";
import { VWPhysicalAction } from "../actions/VWPhysicalAction";
import { VWCommunicativeAction } from "../actions/VWCommunicativeAction";
import { VWExistenceChecker } from "./VWExistenceChecker";

export class VWActionUtils {
    public static validateActions(actions: VWAction[]): void {
        if (!VWExistenceChecker.allExist(actions)) {
            throw new Error("The actions array cannot be null or undefined, or contain null or undefined elements.");
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
