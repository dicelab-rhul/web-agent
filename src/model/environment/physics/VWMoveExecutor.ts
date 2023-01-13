import { VWMoveAction } from "../../actions/VWMoveAction";
import { VWActionOutcome } from "../../common/VWActionOutcome";
import { VWActionResult } from "../../common/VWActionResult";
import { VWEnvironment } from "../VWEnvironment";
import { VWAbstractExecutor } from "./VWAbstractExecutor";

export class VWMoveExecutor extends VWAbstractExecutor {
    public isPossible(action: VWMoveAction, env: VWEnvironment): boolean {
        return true; // TODO: Implement.
    }

    public perform(action: VWMoveAction, env: VWEnvironment): VWActionResult {
        return new VWActionResult(VWActionOutcome.SUCCESS, action); // TODO: Implement.
    }

    public succeeded(action: VWMoveAction, env: VWEnvironment): boolean {
        return true; // TODO: Implement.
    }
}
