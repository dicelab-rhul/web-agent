import { VWBroadcastAction } from "../../actions/VWBroadcastAction";
import { VWActionOutcome } from "../../common/VWActionOutcome";
import { VWActionResult } from "../../common/VWActionResult";
import { VWEnvironment } from "../VWEnvironment";
import { VWAbstractExecutor } from "./VWAbstractExecutor";

export class VWBroadcastExecutor extends VWAbstractExecutor {
    public isPossible(_: VWBroadcastAction, __: VWEnvironment): boolean {
        return true;
    }

    public perform(action: VWBroadcastAction, env: VWEnvironment): VWActionResult {
        return new VWActionResult(VWActionOutcome.SUCCESS, action); // TODO: Implement.
    }

    public succeeded(_: VWBroadcastAction, __: VWEnvironment): boolean {
        return true;
    }
}
