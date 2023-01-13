import { VWTurnAction } from "../../actions/VWTurnAction";
import { VWActionOutcome } from "../../common/VWActionOutcome";
import { VWActionResult } from "../../common/VWActionResult";
import { VWEnvironment } from "../VWEnvironment";
import { VWAbstractExecutor } from "./VWAbstractExecutor";

export class VWTurnExecutor extends VWAbstractExecutor {
    public isPossible(_: VWTurnAction, __: VWEnvironment): boolean {
        return true;
    }

    public perform(action: VWTurnAction, env: VWEnvironment): VWActionResult {
        return new VWActionResult(VWActionOutcome.SUCCESS, action); // TODO: Implement.
    }

    public succeeded(action: VWTurnAction, env: VWEnvironment): boolean {
        return true; // TODO: Implement.
    }
}
