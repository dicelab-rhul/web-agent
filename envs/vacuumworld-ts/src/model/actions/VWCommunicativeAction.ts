import { VWMessageContent } from "../common/VWMessage";
import { VWExistenceChecker } from "../utils/VWExistenceChecker";
import { VWAction } from "./VWAction";

export abstract class VWCommunicativeAction extends VWAction {
    private content: VWMessageContent;
    private recipientsIDs: string[];

    public constructor(actorID: string, content: VWMessageContent, recipientsIDs?: string[]) {
        super(actorID);

        this.content = VWExistenceChecker.validateExistence(content, "The content cannot be null or undefined.");
        this.recipientsIDs = recipientsIDs || [];
    }

    public getContent(): VWMessageContent {
        return this.content;
    }

    public getRecipientsIDs(): string[] {
        return this.recipientsIDs;
    }
}
