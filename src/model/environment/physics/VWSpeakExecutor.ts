import { VWSpeakAction } from "../../actions/VWSpeakAction";
import { VWActionOutcome } from "../../common/VWActionOutcome";
import { VWActionResult } from "../../common/VWActionResult";
import { VWEnvironment } from "../VWEnvironment";
import { VWAbstractExecutor } from "./VWAbstractExecutor";

export class VWSpeakExecutor extends VWAbstractExecutor {
    public isPossible(_: VWSpeakAction, __: VWEnvironment): boolean {
        return true;
    }

    public perform(action: VWSpeakAction, env: VWEnvironment): VWActionResult {
        return new VWActionResult(VWActionOutcome.SUCCESS, action); // TODO: Implement.
    }

    public succeeded(_: VWSpeakAction, __: VWEnvironment): boolean {
        return true;
    }
}
