import { VWExistenceChecker } from "../utils/VWExistenceChecker";

export abstract class VWAction {
    private actorID: string;

    public constructor(actorID: string) {
        this.actorID = VWExistenceChecker.validateExistence(actorID, "The actor ID cannot be null or undefined.");
    }

    public getActorID(): string {
        return this.actorID;
    }

    public abstract getEffort(): bigint;
}
