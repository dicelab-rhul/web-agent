import { VWDropDirtAction } from "../../actions/VWDropDirtAction";
import { JOptional } from "../../common/JOptional";
import { VWActionOutcome } from "../../common/VWActionOutcome";
import { VWActionResult } from "../../common/VWActionResult";
import { VWColour } from "../../common/VWColour";
import { VWCoord } from "../../common/VWCoord";
import { VWDirt } from "../../dirt/VWDirt";
import { VWEnvironment } from "../VWEnvironment";
import { VWAbstractExecutor } from "./VWAbstractExecutor";

export class VWDropDirtExecutor extends VWAbstractExecutor {
    protected isPossible(action: VWDropDirtAction, env: VWEnvironment): boolean {
        try {
            return VWAbstractExecutor.isActorInEnv(action.getActorID(), env) && VWDropDirtExecutor.isActorUser(action, env) && VWDropDirtExecutor.actorLocationHasNoDirt(action, env);
        }
        catch (e) {
            return false;
        }
    }

    private static isActorUser(action: VWDropDirtAction, env: VWEnvironment): boolean {
        return env.getActorByID(action.getActorID()).orElseThrow().getColour() === VWColour.USER;
    }

    private static actorLocationHasNoDirt(action: VWDropDirtAction, env: VWEnvironment): boolean {
        const actorCoord: JOptional<VWCoord> = env.getActorCoordByID(action.getActorID());

        return actorCoord.isPresent() && !env.getLocation(actorCoord.orElseThrow()).orElseThrow().hasDirt();
    }

    protected perform(action: VWDropDirtAction, env: VWEnvironment): VWActionResult {
        try {
            env.addDirtToLocation(this.getActorCoordBeforeAction(), new VWDirt(action.getColour()));

            return new VWActionResult(VWActionOutcome.SUCCESS, action);
        }
        catch (e) {
            return new VWActionResult(VWActionOutcome.FAILURE, action);
        }
    }

    protected succeeded(action: VWDropDirtAction, env: VWEnvironment): boolean {
        try {
            return this.checkInvariants(action, env) && this.checkDirtAdded(action, env);
        }
        catch (e) {
            return false;
        }
    }

    protected checkInvariants(action: VWDropDirtAction, env: VWEnvironment): boolean {
        return VWAbstractExecutor.isActorInEnv(action.getActorID(), env) && this.checkColourAfterAction(action, env) && this.checkOrientationAfterAction(action, env) && this.checkCoordAfterAction(action, env);
    }

    private checkDirtAdded(action: VWDropDirtAction, env: VWEnvironment): boolean {
        return env.getLocation(this.getActorCoordBeforeAction()).orElseThrow().hasDirt() && env.getLocation(this.getActorCoordBeforeAction()).orElseThrow().getDirt().orElseThrow().getColour() === action.getColour();
    }
}
