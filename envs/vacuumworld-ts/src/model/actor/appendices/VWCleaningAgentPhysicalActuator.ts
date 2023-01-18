import { VWDropDirtAction } from "../../actions/VWDropDirtAction";
import { VWPhysicalAction } from "../../actions/VWPhysicalAction";
import { VWPhysicalActuator } from "./VWPhysicalActuator";

export class VWCleaningAgentPhysicalActuator extends VWPhysicalActuator {
    public sink(action: VWPhysicalAction): void {
        if (action === null || action === undefined) {
            throw new Error("The action cannot be null or undefined.");
        }
        else if (action instanceof VWDropDirtAction) {
            throw new Error("A cleaning agent cannot drop dirt.");
        }
        else {
            super.sink(action);
        }
    }
}
