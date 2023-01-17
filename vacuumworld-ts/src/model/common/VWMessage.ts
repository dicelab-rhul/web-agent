import { VWPerception } from "./VWPerception";

export class VWMessage extends VWPerception {
    private content: number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string>;
    private senderID: string;
    private recipientID: string;

    public constructor(content: number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string>, senderID: string, recipientID: string) {
        super();

        this.content = VWMessage.validateContent(content);
        this.senderID = VWMessage.validateSenderID(senderID);
        this.recipientID = VWMessage.validateRecipientID(recipientID);
    }

    private static validateContent(content: number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string>): number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string> {
        if (content === null || content === undefined) {
            throw new Error("The content cannot be null or undefined.");
        }

        return content;
    }

    private static validateSenderID(senderID: string): string {
        if (senderID === null || senderID === undefined) {
            throw new Error("The sender ID cannot be null or undefined.");
        }

        return senderID;
    }

    private static validateRecipientID(recipientID: string): string {
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
