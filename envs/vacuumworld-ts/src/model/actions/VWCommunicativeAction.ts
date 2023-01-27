import { VWMessageContent } from "../common/VWMessage";
import { VWExistenceChecker } from "../utils/VWExistenceChecker";
import { VWAction } from "./VWAction";

export abstract class VWCommunicativeAction extends VWAction {
    private content: VWMessageContent;
    private recipientsIDs: Array<string>;

    public constructor(actorID: string, content: VWMessageContent, recipientsIDs?: Array<string>) {
        super(actorID);

        this.content = VWExistenceChecker.validateExistence(content, "The content cannot be null or undefined.");
        this.recipientsIDs = recipientsIDs === null || recipientsIDs === undefined ? [] : recipientsIDs;
    }

    public getContent(): VWMessageContent {
        return this.content;
    }

    public getRecipientsIDs(): Array<string> {
        return this.recipientsIDs;
    }
}
