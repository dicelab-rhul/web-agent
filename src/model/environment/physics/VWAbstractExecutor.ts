import { VWAction } from "../../actions/VWAction";
import { VWActionOutcome } from "../../common/VWActionOutcome";
import { VWActionResult } from "../../common/VWActionResult";
import { VWEnvironment } from "../VWEnvironment";
import { VWActionExecutor } from "./VWActionExecutor";

export abstract class VWAbstractExecutor implements VWActionExecutor {
    public attempt(action: VWAction, env: VWEnvironment): VWActionResult {
        if (!this.isPossible(action, env)) {
            return new VWActionResult(VWActionOutcome.FAILURE, action);
        }
        else {
            const candidateResult: VWActionResult = this.perform(action, env);

            if (!this.succeeded(action, env)) {
                return new VWActionResult(VWActionOutcome.FAILURE, action);
            }
            else {
                return candidateResult;
            }
        }
    }

    public abstract isPossible(action: VWAction, env: VWEnvironment): boolean;

    public abstract perform(action: VWAction, env: VWEnvironment): VWActionResult;

    public abstract succeeded(action: VWAction, env: VWEnvironment): boolean;   
}
