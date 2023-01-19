import { VWMessageContent } from "../common/VWMessage";
import { VWCommunicativeAction } from "./VWCommunicativeAction";

export class VWSpeakAction extends VWCommunicativeAction {
    public constructor(actorID: string, content: VWMessageContent, recipientsIDs?: Array<string>) {
        super(actorID, content, recipientsIDs);
    }
}
