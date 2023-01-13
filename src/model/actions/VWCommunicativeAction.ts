import { VWAction } from "./VWAction";
import { VWActionEffort } from "./VWActionEffort";
import { VWBroadcastAction } from "./VWBroadcastAction";

export abstract class VWCommunicativeAction extends VWAction {
    private content: number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string>;
    private recipientsIDs: Array<string>;

    public constructor(actorID: string, content: number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string>, recipientsIDs?: Array<string>) {
        super(actorID);

        this.content = this.validateContent(content);
        this.recipientsIDs = recipientsIDs === null || recipientsIDs === undefined ? [] : recipientsIDs;
    }


    private validateContent(content: number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string>): number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string> {
        if (content === null || content === undefined) {
            throw new Error("The content cannot be null or undefined.");
        }

        return content;
    }

    public getContent(): number | bigint | string | Array<number | bigint | string> | Map<string, number | bigint | string> {
        return this.content;
    }

    public getRecipientsIDs(): Array<string> {
        return this.recipientsIDs;
    }

    public getEffort(): bigint {
        if (this.recipientsIDs.length === 0) {
            return VWActionEffort.getEffort(typeof VWBroadcastAction)
        }
        else {
            return super.getEffort();
        }
    }
}
