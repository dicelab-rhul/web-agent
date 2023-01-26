import { VWAction } from "../../../actions/VWAction";
import { VWIdleAction } from "../../../actions/VWIdleAction";
import { VWAbstractMindCore } from "./VWAbstractMindCore";
import { VWMindCore } from "./VWMindCore";

export class VWHystereticMindCore extends VWAbstractMindCore {
    public constructor() {
        super();

        this.construct(__filename, this.revise, this.decide);
    }

    public revise(): void {
        // Do nothing.
    }

    public decide(): VWAction[] {
        // Always return a single VWIdleAction.
        return [new VWIdleAction(this.getOwnID())];
    }

    public newCore(): VWMindCore {
        return new VWHystereticMindCore();
    }
}
