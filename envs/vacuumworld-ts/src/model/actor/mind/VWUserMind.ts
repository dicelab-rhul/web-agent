import { VWAbstractMind } from "./VWAbstractMind";
import { VWUserMindCore } from "./core/VWUserMindCore";

export class VWUserMind extends VWAbstractMind {
    public constructor() {
        super(new VWUserMindCore());
    }
}
