import { VWDropDirtAction } from "../../actions/VWDropDirtAction";
import { VWActionOutcome } from "../../common/VWActionOutcome";
import { VWActionResult } from "../../common/VWActionResult";
import { VWEnvironment } from "../VWEnvironment";
import { VWAbstractExecutor } from "./VWAbstractExecutor";

export class VWDropDirtExecutor extends VWAbstractExecutor {
    public isPossible(action: VWDropDirtAction, env: VWEnvironment): boolean {
        return true; // TODO: Implement.
    }

    public perform(action: VWDropDirtAction, env: VWEnvironment): VWActionResult {
        return new VWActionResult(VWActionOutcome.SUCCESS, action); // TODO: Implement.
    }

    public succeeded(action: VWDropDirtAction, env: VWEnvironment): boolean {
        return true; // TODO: Implement.
    }
}
