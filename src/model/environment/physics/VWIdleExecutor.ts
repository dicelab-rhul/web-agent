import { VWIdleAction } from "../../actions/VWIdleAction";
import { VWActionOutcome } from "../../common/VWActionOutcome";
import { VWActionResult } from "../../common/VWActionResult";
import { VWEnvironment } from "../VWEnvironment";
import { VWAbstractExecutor } from "./VWAbstractExecutor";

export class VWIdleExecutor extends VWAbstractExecutor {
    protected isPossible(action: VWIdleAction, env: VWEnvironment): boolean {
        try {
            return this.isActorInEnv(action.getActorID(), env);
        }
        catch (e) {
            return false;
        }
    }

    protected perform(action: VWIdleAction, _: VWEnvironment): VWActionResult {
        try {
            return new VWActionResult(VWActionOutcome.SUCCESS, action);
        }
        catch (e) {
            return new VWActionResult(VWActionOutcome.FAILURE, action);
        }
    }

    protected succeeded(action: VWIdleAction, env: VWEnvironment): boolean {
        try {
            return this.checkInvariants(action, env);
        }
        catch (e) {
            return false;
        }
    }

    protected checkInvariants(action: VWIdleAction, env: VWEnvironment): boolean {
        return this.checkAllInvariants(action, env);
    }
}
