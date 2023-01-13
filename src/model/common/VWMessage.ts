export class VWMessage {
    private content: number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string>;
    private senderID: string;
    private recipientID: string;

    public constructor(content: number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string>, senderID: string, recipientIDs: string) {
        this.content = this.validateContent(content);
        this.senderID = this.validateSenderID(senderID);
        this.recipientID = this.validateRecipientID(recipientIDs);
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

    private validateRecipientID(recipientID: string): string {
        if (recipientID === null || recipientID === undefined) {
            throw new Error("The recipient ID cannot be null or undefined.");
        }

        return recipientID;
    }

    public getContent(): number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string> {
        return this.content;
    }

    public getSenderID(): string {
        return this.senderID;
    }

    public getRecipientID(): string {
        return this.recipientID;
    }
}
