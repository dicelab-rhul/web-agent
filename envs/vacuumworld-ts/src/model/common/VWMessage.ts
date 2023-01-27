import { VWExistenceChecker } from "../utils/VWExistenceChecker";
import { VWPerception } from "./VWPerception";

export type VWMessageContent = number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string>;

export class VWMessage extends VWPerception {
    private content: VWMessageContent;
    private senderID: string;
    private recipientID: string;

    public constructor(content: VWMessageContent, senderID: string, recipientID: string) {
        super();

        this.content = VWExistenceChecker.validateExistence(content, "The content cannot be null or undefined.");
        this.senderID = VWExistenceChecker.validateExistence(senderID, "The sender ID cannot be null or undefined.");
        this.recipientID = VWExistenceChecker.validateExistence(recipientID, "The recipient ID cannot be null or undefined.");
    }

    public getContent(): VWMessageContent {
        return this.content;
    }

    public getSenderID(): string {
        return this.senderID;
    }

    public getRecipientID(): string {
        return this.recipientID;
    }
}
