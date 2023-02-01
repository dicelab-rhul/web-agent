import { VWAction } from "../actions/VWAction";
import { VWPhysicalAction } from "../actions/VWPhysicalAction";
import { VWCommunicativeAction } from "../actions/VWCommunicativeAction";
import { VWExistenceChecker } from "./VWExistenceChecker";

import config from "../config.json";

const { maxNumberOfActionsPerActorPerCycle, maxNumberOfPhysicalActionsPerActorPerCycle, maxNumberOfCommunicativeActionsPerActorPerCycle, senderIDSpoofingAllowed } = config;

export class VWActionUtils {
    public static validateActions(actions: VWAction[]): void {
        if (!VWExistenceChecker.allValuesExist(actions)) {
            throw new Error("The actions array cannot be null or undefined, or contain null or undefined elements.");
        }
        else if (actions.length === 0) {
            throw new Error("At least one action per cycle must by attempted by each actor.");
        }
        else if (actions.length > maxNumberOfActionsPerActorPerCycle) {
            throw new Error(`At most ${maxNumberOfActionsPerActorPerCycle} actions per cycle can be attempted by each actor.`);
        }
        else if (actions.filter(action => action instanceof VWPhysicalAction).length > maxNumberOfPhysicalActionsPerActorPerCycle) {
            throw new Error(`At most ${maxNumberOfPhysicalActionsPerActorPerCycle} physical action per cycle can be attempted by each actor.`);
        }
        else if (actions.filter(action => action instanceof VWCommunicativeAction).length > maxNumberOfCommunicativeActionsPerActorPerCycle) {
            throw new Error(`At most ${maxNumberOfCommunicativeActionsPerActorPerCycle} communicative action per cycle can be attempted by each actor.`);
        }
    }

    public static checkSenderID(actions: VWAction[], senderID: string): void {
        if (senderIDSpoofingAllowed) {
            return;
        }
        else if (!VWExistenceChecker.allValuesExist(actions)) {
            throw new Error("The action array cannot be null or undefined, or contain null or undefined elements.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(senderID)) {
            throw new Error("The senderID cannot be null or undefined.");
        }
        else if (actions.filter(action => action instanceof VWCommunicativeAction).some(action => action.getActorID() !== senderID)) {
            throw new Error("Spoofing the senderID is not allowed.");
        }
    }
}
