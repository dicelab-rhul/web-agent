import { VWTurnAction } from "../../actions/VWTurnAction";
import { VWActionOutcome } from "../../common/VWActionOutcome";
import { VWActionResult } from "../../common/VWActionResult";
import { VWDirection } from "../../common/VWDirection";
import { VWOrientationUtils } from "../../utils/VWOrientationUtils";
import { VWEnvironment } from "../VWEnvironment";
import { VWAbstractExecutor } from "./VWAbstractExecutor";

export class VWTurnExecutor extends VWAbstractExecutor {
    protected isPossible(action: VWTurnAction, env: VWEnvironment): boolean {
        try {
            return VWAbstractExecutor.isActorInEnv(action.getActorID(), env);
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
        return VWAbstractExecutor.isActorInEnv(action.getActorID(), env) && this.checkColourAfterAction(action, env) && this.checkCoordAfterAction(action, env) && this.checkDirtAfterAction(env);
    }

    private checkOrientationAfterTurn(action: VWTurnAction, env: VWEnvironment): boolean {
        const newOrientation = env.getActorByID(action.getActorID()).orElseThrow().getOrientation();

        if (action.getTurningDirection() === VWDirection.LEFT) {
            return newOrientation === VWOrientationUtils.getLeft(this.getActorOrientationBeforeAction());
        }
        else if (action.getTurningDirection() === VWDirection.RIGHT) {
            return newOrientation === VWOrientationUtils.getRight(this.getActorOrientationBeforeAction());
        }
        else {
            return false;
        }
    }
}
