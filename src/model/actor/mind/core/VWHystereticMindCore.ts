import { VWAction } from "../../../actions/VWAction";
import { VWIdleAction } from "../../../actions/VWIdleAction";
import { VWAbstractMindCore } from "./VWAbstractMindCore";

export class VWHystereticMindCore extends VWAbstractMindCore {
    public revise(): void {
        // Do nothing.
    }

    public decide(): VWAction[] {
        // Always return a single VWIdleAction.
        return [new VWIdleAction(this.getOwnID())];
    }
}
