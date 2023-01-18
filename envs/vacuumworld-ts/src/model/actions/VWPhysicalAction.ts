import { VWAction } from "./VWAction";

export abstract class VWPhysicalAction extends VWAction {
    public constructor(actorID: string) {
        super(actorID);
    }
}
