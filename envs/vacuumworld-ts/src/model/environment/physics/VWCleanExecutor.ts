import { VWCleanAction } from "../../actions/VWCleanAction";
import { JOptional } from "../../common/JOptional";
import { VWActionOutcome } from "../../common/VWActionOutcome";
import { VWActionResult } from "../../common/VWActionResult";
import { VWColour } from "../../common/VWColour";
import { VWCoord } from "../../common/VWCoord";
import { VWEnvironment } from "../VWEnvironment";
import { VWAbstractExecutor } from "./VWAbstractExecutor";

export class VWCleanExecutor extends VWAbstractExecutor {
    protected isPossible(action: VWCleanAction, env: VWEnvironment): boolean {
        try {
            return VWAbstractExecutor.isActorInEnv(action.getActorID(), env) && VWCleanExecutor.isActorCleaningAgent(action, env) && VWCleanExecutor.actorLocationHasCompatibleDirt(action, env);
        }
        catch (e) {
            return false;
        }
    }

    private static isActorCleaningAgent(action: VWCleanAction, env: VWEnvironment): boolean {
        const actorColour: VWColour = env.getActorByID(action.getActorID()).orElseThrow().getColour();

        return Object.values(VWColour).includes(actorColour) && actorColour !== VWColour.USER;
    }

    private static actorLocationHasCompatibleDirt(action: VWCleanAction, env: VWEnvironment): boolean {
        const actorCoord: JOptional<VWCoord> = env.getActorCoordByID(action.getActorID());
        const actorColour: VWColour = env.getActorByID(action.getActorID()).orElseThrow().getColour();

        return actorCoord.isPresent() && env.getLocation(actorCoord.orElseThrow()).orElseThrow().hasDirt() && VWCleanExecutor.canClean(actorColour, actorCoord, env);
    }

    private static canClean(actorColour: VWColour, actorCoord: JOptional<VWCoord>, env: VWEnvironment): boolean {
        // Assumes a dirt is present.
        return actorColour === VWColour.WHITE || actorColour === env.getLocation(actorCoord.orElseThrow()).orElseThrow().getDirt().orElseThrow().getColour();
    }

    protected perform(action: VWCleanAction, env: VWEnvironment): VWActionResult {
        try {
            env.cleanDirtByCoord(this.getActorCoordBeforeAction());

            return new VWActionResult(VWActionOutcome.SUCCESS, action);
        }
        catch (e) {
            return new VWActionResult(VWActionOutcome.FAILURE, e.message);
        }
    }

    protected succeeded(action: VWCleanAction, env: VWEnvironment): boolean {
        try {
            return this.checkInvariants(action, env) && this.checkDirtRemoved(env);
        }
        catch (e) {
            return false;
        }
    }

    protected checkInvariants(action: VWCleanAction, env: VWEnvironment): boolean {
        return VWAbstractExecutor.isActorInEnv(action.getActorID(), env) && this.checkColourAfterAction(action, env) && this.checkOrientationAfterAction(action, env) && this.checkCoordAfterAction(action, env);
    }

    private checkDirtRemoved(env: VWEnvironment): boolean {
        return !env.getLocation(this.getActorCoordBeforeAction()).orElseThrow().hasDirt();
    }
}
