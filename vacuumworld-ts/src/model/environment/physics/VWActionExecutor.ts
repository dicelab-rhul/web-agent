import { VWAction } from "../../actions/VWAction";
import { VWActionResult } from "../../common/VWActionResult";
import { VWEnvironment } from "../VWEnvironment";

export interface VWActionExecutor {
    attempt(action: VWAction, env: VWEnvironment): VWActionResult;
}
