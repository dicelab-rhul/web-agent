import { VWDirection } from "../common/VWDirection";
import { VWPhysicalAction } from "./VWPhysicalAction";

export class VWTurnAction extends VWPhysicalAction {
    private turningDirection: VWDirection;

    public constructor(actorID: string, turningDirection: VWDirection) {
        super(actorID);

        this.turningDirection = this.validateTurningDirection(turningDirection);
    }

    private validateTurningDirection(direction: VWDirection): VWDirection {
        if (direction === null || direction === undefined) {
            throw new Error("The turning direction cannot be null or undefined.");
        }

        return direction;
    }

    public getTurningDirection(): VWDirection {
        return this.turningDirection;
    }
}
