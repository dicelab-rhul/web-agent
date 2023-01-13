import { VWMessage } from "./VWMessage";

export class VWMessageToSend {
    private content: number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string>;
    private senderID: string;
    private recipientsIDs: Array<string>;

    public constructor(content: number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string>, senderID: string, recipientsIDs?: Array<string>) {
        this.content = this.validateContent(content);
        this.senderID = this.validateSenderID(senderID);
        this.recipientsIDs = recipientsIDs === null || recipientsIDs === undefined ? [] : recipientsIDs;
    }

    private validateContent(content: number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string>): number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string> {
        if (content === null || content === undefined) {
            throw new Error("The content cannot be null or undefined.");
        }

        return content;
    }

    private validateSenderID(senderID: string): string {
        if (senderID === null || senderID === undefined) {
            throw new Error("The sender ID cannot be null or undefined.");
        }

        return senderID;
    }

    public getContent(): number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string> {
        return this.content;
    }

    public getSenderID(): string {
        return this.senderID;
    }

    public getRecipientsIDs(): Array<string> {
        return this.recipientsIDs;
    }

    public addRecipientID(recipientID: string): void {
        if (recipientID === null || recipientID === undefined) {
            throw new Error("The recipient ID cannot be null or undefined.");
        }
        else if (this.recipientsIDs.includes(recipientID)) {
            throw new Error("This recipient ID is already contained in the recipient IDs array.");
        }
        else {
            this.recipientsIDs.push(recipientID);
        }
    }

    public generateMessagesToDeliver(): Array<VWMessage> {
        const messagesToDeliver: Array<VWMessage> = [];

        for (const recipientID of this.recipientsIDs) {
            messagesToDeliver.push(new VWMessage(this.content, this.senderID, recipientID));
        }

        return messagesToDeliver;
    }
}
