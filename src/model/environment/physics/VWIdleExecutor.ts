import { VWIdleAction } from "../../actions/VWIdleAction";
import { VWActionOutcome } from "../../common/VWActionOutcome";
import { VWActionResult } from "../../common/VWActionResult";
import { VWEnvironment } from "../VWEnvironment";
import { VWAbstractExecutor } from "./VWAbstractExecutor";

export class VWIdleExecutor extends VWAbstractExecutor {
    public isPossible(_: VWIdleAction, __: VWEnvironment): boolean {
        return true;
    }

    public perform(action: VWIdleAction, _: VWEnvironment): VWActionResult {
        return new VWActionResult(VWActionOutcome.SUCCESS, action);
    }

    public succeeded(_: VWIdleAction, __: VWEnvironment): boolean {
        return true;
    }
}
