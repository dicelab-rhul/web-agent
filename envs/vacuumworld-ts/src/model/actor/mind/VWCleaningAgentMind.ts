import { VWAbstractMind } from "./VWAbstractMind";
import { VWMindCore } from "./core/VWMindCore";

export class VWCleaningAgentMind extends VWAbstractMind {
    public constructor(mindCore: VWMindCore) {
        super(mindCore);
    }
}
