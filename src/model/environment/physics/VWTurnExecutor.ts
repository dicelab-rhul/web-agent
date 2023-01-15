import { VWTurnAction } from "../../actions/VWTurnAction";
import { VWActionOutcome } from "../../common/VWActionOutcome";
import { VWActionResult } from "../../common/VWActionResult";
import { VWDirection } from "../../common/VWDirection";
import { VWOrientation } from "../../common/VWOrientation";
import { VWEnvironment } from "../VWEnvironment";
import { VWAbstractExecutor } from "./VWAbstractExecutor";

export class VWTurnExecutor extends VWAbstractExecutor {
    protected isPossible(action: VWTurnAction, env: VWEnvironment): boolean {
        try {
            return this.isActorInEnv(action.getActorID(), env);
        }
        catch (e) {
            return false;
        }
    }

    protected perform(action: VWTurnAction, env: VWEnvironment): VWActionResult {
        try {
            env.turnActor(this.getActorCoordBeforeAction(), action.getTurningDirection());

            return new VWActionResult(VWActionOutcome.SUCCESS, action);
        }
        catch (e) {
            return new VWActionResult(VWActionOutcome.FAILURE, action);
        }
    }

    protected succeeded(action: VWTurnAction, env: VWEnvironment): boolean {
        try {
            return this.checkInvariants(action, env) && this.checkOrientationAfterTurn(action, env);
        }
        catch (e) {
            return false;
        }
    }

    protected checkInvariants(action: VWTurnAction, env: VWEnvironment): boolean {
        return this.isActorInEnv(action.getActorID(), env) && this.checkColourAfterAction(action, env) && this.checkCoordAfterAction(action, env) && this.checkDirtAfterAction(env);
    }

    private checkOrientationAfterTurn(action: VWTurnAction, env: VWEnvironment): boolean {
        const newOrientation = env.getActorByID(action.getActorID()).orElseThrow().getOrientation();

        if (action.getTurningDirection() === VWDirection.LEFT) {
            return this.checkOrientationAfterLeftTurn(newOrientation);
        }
        else if (action.getTurningDirection() === VWDirection.RIGHT) {
            return this.checkOrientationAfterRightTurn(newOrientation);
        }
        else {
            return false;
        }
    }

    private checkOrientationAfterLeftTurn(newOrientation: VWOrientation): boolean {
        if (this.getActorOrientationBeforeAction() === VWOrientation.NORTH) {
            return newOrientation === VWOrientation.WEST;
        }
        else if (this.getActorOrientationBeforeAction() === VWOrientation.EAST) {
            return newOrientation === VWOrientation.NORTH;
        }
        else if (this.getActorOrientationBeforeAction() === VWOrientation.SOUTH) {
            return newOrientation === VWOrientation.EAST;
        }
        else if (this.getActorOrientationBeforeAction() === VWOrientation.WEST) {
            return newOrientation === VWOrientation.SOUTH;
        }
        else {
            return false;
        }
    }

    private checkOrientationAfterRightTurn(newOrientation: VWOrientation): boolean {
        if (this.getActorOrientationBeforeAction() === VWOrientation.NORTH) {
            return newOrientation === VWOrientation.EAST;
        }
        else if (this.getActorOrientationBeforeAction() === VWOrientation.EAST) {
            return newOrientation === VWOrientation.SOUTH;
        }
        else if (this.getActorOrientationBeforeAction() === VWOrientation.SOUTH) {
            return newOrientation === VWOrientation.WEST;
        }
        else if (this.getActorOrientationBeforeAction() === VWOrientation.WEST) {
            return newOrientation === VWOrientation.NORTH;
        }
        else {
            return false;
        }
    }
}
