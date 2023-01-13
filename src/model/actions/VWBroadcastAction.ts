import { VWCommunicativeAction } from "./VWCommunicativeAction";

export class VWBroadcastAction extends VWCommunicativeAction {
    public constructor(actorID: string, content: number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string>) {
        super(actorID, content);
    }
}
