import { VWActionEffort } from "./VWActionEffort";

export abstract class VWAction {
    private actorID: string;

    public constructor(actorID: string) {
        this.actorID = VWAction.validateActorID(actorID);
    }

    private static validateActorID(actorID: string): string {
        if (actorID === null || actorID === undefined) {
            throw new Error("The actor ID cannot be null or undefined.");
        }

        return actorID;
    }

    public getActorID(): string {
        return this.actorID;
    }

    public getEffort(): bigint {
        return VWActionEffort.getEffort(typeof this);
    }
}
