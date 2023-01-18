import { VWAbstractMind } from "./VWAbstractMind";
import { VWAbstractMindCore } from "./core/VWAbstractMindCore";

export class VWCleaningAgentMind extends VWAbstractMind {
    public constructor(mindCoreFilePath:string) {
        super(VWAbstractMindCore.loadFromFile(mindCoreFilePath));
    }
}
