import { VWMessageContent } from "../common/VWMessage";
import { VWAction } from "./VWAction";

export abstract class VWCommunicativeAction extends VWAction {
    private content: VWMessageContent;
    private recipientsIDs: Array<string>;

    public constructor(actorID: string, content: VWMessageContent, recipientsIDs?: Array<string>) {
        super(actorID);

        this.content = VWCommunicativeAction.validateContent(content);
        this.recipientsIDs = recipientsIDs === null || recipientsIDs === undefined ? [] : recipientsIDs;
    }


    private static validateContent(content: VWMessageContent): VWMessageContent {
        if (content === null || content === undefined) {
            throw new Error("The content cannot be null or undefined.");
        }

        return content;
    }

    public getContent(): VWMessageContent {
        return this.content;
    }

    public getRecipientsIDs(): Array<string> {
        return this.recipientsIDs;
    }
}
