import { VWMoveAction } from "../../actions/VWMoveAction";
import { JOptional } from "../../common/JOptional";
import { VWActionOutcome } from "../../common/VWActionOutcome";
import { VWActionResult } from "../../common/VWActionResult";
import { VWCoord } from "../../common/VWCoord";
import { VWOrientation } from "../../common/VWOrientation";
import { VWEnvironment } from "../VWEnvironment";
import { VWAbstractExecutor } from "./VWAbstractExecutor";

export class VWMoveExecutor extends VWAbstractExecutor {
    protected isPossible(action: VWMoveAction, env: VWEnvironment): boolean {
        try {
            return this.isActorInEnv(action.getActorID(), env) && this.targetExists(action, env) && this.targetHasNoActor(action, env);
        }
        catch (e) {
            return false;
        }
    }

    private targetExists(action: VWMoveAction, env: VWEnvironment): boolean {
        const actorCoord: JOptional<VWCoord> = env.getActorCoordByID(action.getActorID());
        const actorOrientation: VWOrientation = env.getActorByID(action.getActorID()).orElseThrow().getOrientation();

        return actorCoord.isPresent() && !env.getLocation(actorCoord.orElseThrow()).orElseThrow().hasWallOn(actorOrientation);
    }

    private targetHasNoActor(action: VWMoveAction, env: VWEnvironment): boolean {
        try {
            const actorCoord: JOptional<VWCoord> = env.getActorCoordByID(action.getActorID());

            return actorCoord.isPresent() && !env.getLocation(actorCoord.orElseThrow()).orElseThrow().hasActor();
        }
        catch (e) {
            return false;
        }
    }

    protected perform(action: VWMoveAction, env: VWEnvironment): VWActionResult {
        try {
            const newCoord: VWCoord = this.getActorCoordBeforeAction().getForwardCoord(this.getActorOrientationBeforeAction());

            if (env.getLocation(newCoord).isPresent()) {
                env.moveActor(this.getActorCoordBeforeAction(), newCoord);

                return new VWActionResult(VWActionOutcome.SUCCESS, action);
            }
            else {
                return new VWActionResult(VWActionOutcome.FAILURE, action);
            }
        }
        catch (e) {
            return new VWActionResult(VWActionOutcome.FAILURE, action);
        }
    }

    protected succeeded(action: VWMoveAction, env: VWEnvironment): boolean {
        try {
            return this.checkInvariants(action, env) && this.checkOriginalLocation(action, env) && this.checkTargetLocation(action, env);
        }
        catch (e) {
            return false;
        }
    }

    protected checkInvariants(action: VWMoveAction, env: VWEnvironment): boolean {
        return this.isActorInEnv(action.getActorID(), env) && this.checkColourAfterAction(action, env) && this.checkOrientationAfterAction(action, env) && this.checkDirtAfterAction(env);
    }

    private checkOriginalLocation(action: VWMoveAction, env: VWEnvironment): boolean {
        return this.noActorInOriginalLocation(env) || this.differentActorInOriginalLocation(action.getActorID(), env);
    }

    private noActorInOriginalLocation(env: VWEnvironment): boolean {
        return !env.getLocation(this.getActorCoordBeforeAction()).orElseThrow().hasActor();
    }

    private differentActorInOriginalLocation(actorID: string, env: VWEnvironment): boolean {
        return env.getLocation(this.getActorCoordBeforeAction()).orElseThrow().hasActor() && env.getLocation(this.getActorCoordBeforeAction()).orElseThrow().getActor().orElseThrow().getID() !== actorID;
    }

    private checkTargetLocation(action: VWMoveAction, env: VWEnvironment): boolean {
        const actorCoord: JOptional<VWCoord> = env.getActorCoordByID(action.getActorID());

        return actorCoord.isPresent() && env.getLocation(actorCoord.orElseThrow()).orElseThrow().hasActor() && env.getLocation(actorCoord.orElseThrow()).orElseThrow().getActor().orElseThrow().getID() === action.getActorID();
    }
}
