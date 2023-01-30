import { VWUserDifficulty } from "../../common/VWUserDifficulty";
import { VWAbstractMind } from "./VWAbstractMind";
import { VWUserMindCore } from "./core/VWUserMindCore";

export class VWUserMind extends VWAbstractMind {
    public constructor(userDifficulty?: VWUserDifficulty) {
        super(new VWUserMindCore(userDifficulty));
    }

    public getMindCore(): VWUserMindCore {
        return super.getMindCore() as VWUserMindCore;
    }
}
