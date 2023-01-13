import { VWCommunicativeAction } from "./VWCommunicativeAction";

export class VWSpeakAction extends VWCommunicativeAction {
    public constructor(actorID: string, content: number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string>, recipientsIDs?: Array<string>) {
        super(actorID, content, recipientsIDs);
    }
}
