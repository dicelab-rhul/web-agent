import { VWCleanAction } from "../../actions/VWCleanAction";
import { VWActionOutcome } from "../../common/VWActionOutcome";
import { VWActionResult } from "../../common/VWActionResult";
import { VWEnvironment } from "../VWEnvironment";
import { VWAbstractExecutor } from "./VWAbstractExecutor";

export class VWCleanExecutor extends VWAbstractExecutor {
    public isPossible(action: VWCleanAction, env: VWEnvironment): boolean {
        return true; // TODO: Implement.
    }

    public perform(action: VWCleanAction, env: VWEnvironment): VWActionResult {
        return new VWActionResult(VWActionOutcome.SUCCESS, action); // TODO: Implement.
    }

    public succeeded(action: VWCleanAction, env: VWEnvironment): boolean {
        return true; // TODO: Implement.
    }
}
