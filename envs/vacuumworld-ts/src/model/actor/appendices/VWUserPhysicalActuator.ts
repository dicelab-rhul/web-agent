import { VWCleanAction } from "../../actions/VWCleanAction";
import { VWPhysicalAction } from "../../actions/VWPhysicalAction";
import { VWPhysicalActuator } from "./VWPhysicalActuator";

export class VWUserPhysicalActuator extends VWPhysicalActuator {
    public sink(action: VWPhysicalAction): void {
        if (action === null || action === undefined) {
            throw new Error("The action cannot be null or undefined.");
        }
        else if (action instanceof VWCleanAction) {
            throw new Error("A user cannot clean dirt.");
        }
        else {
            super.sink(action);
        }
    }
}
