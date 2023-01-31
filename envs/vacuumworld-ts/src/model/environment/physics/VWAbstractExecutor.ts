import { VWAction } from "../../actions/VWAction";
import { JOptional } from "../../common/JOptional";
import { VWActionOutcome } from "../../common/VWActionOutcome";
import { VWActionResult } from "../../common/VWActionResult";
import { VWColour } from "../../common/VWColour";
import { VWCoord } from "../../common/VWCoord";
import { VWOrientation } from "../../common/VWOrientation";
import { VWDirt } from "../../dirt/VWDirt";
import { VWExistenceChecker } from "../../utils/VWExistenceChecker";
import { VWEnvironment } from "../VWEnvironment";
import { VWActionExecutor } from "./VWActionExecutor";

export abstract class VWAbstractExecutor implements VWActionExecutor {
    private actorColourBeforeAction: VWColour;
    private actorOrientationBeforeAction: VWOrientation;
    private actorCoordBeforeAction: VWCoord;
    private dirtBeforeAction: JOptional<VWDirt>;

    protected getActorColourBeforeAction(): VWColour {
        return this.actorColourBeforeAction;
    }

    protected setActorColourBeforeAction(colour: VWColour): void {
        if (!VWExistenceChecker.allArgumentsExist(colour)) {
            throw new Error("The actor colour cannot be null or undefined.");
        }
        else {
            this.actorColourBeforeAction = colour;
        }
    }

    protected getActorOrientationBeforeAction(): VWOrientation {
        return this.actorOrientationBeforeAction;
    }

    protected setActorOrientationBeforeAction(orientation: VWOrientation): void {
        if (!VWExistenceChecker.allArgumentsExist(orientation)) {
            throw new Error("The actor orientation cannot be null or undefined.");
        }
        else {
            this.actorOrientationBeforeAction = orientation;
        }
    }

    protected getActorCoordBeforeAction(): VWCoord {
        return this.actorCoordBeforeAction;
    }

    protected setActorCoordBeforeAction(coord: VWCoord): void {
        if (!VWExistenceChecker.allArgumentsExist(coord)) {
            throw new Error("The actor coord cannot be null or undefined.");
        }
        else {
            this.actorCoordBeforeAction = coord;
        }
    }

    protected getDirtBeforeAction(): JOptional<VWDirt> {
        return this.dirtBeforeAction;
    }

    protected setDirtBeforeAction(dirt: JOptional<VWDirt>): void {
        if (!VWExistenceChecker.allArgumentsExist(dirt)) {
            throw new Error("The dirt cannot be null or undefined.");
        }
        else {
            this.dirtBeforeAction = dirt;
        }
    }

    public attempt(action: VWAction, env: VWEnvironment): VWActionResult {
        if (!VWExistenceChecker.allArgumentsExist(action)) {
            throw new Error("The action cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(env)) {
            throw new Error("The environment cannot be null or undefined.");
        }
        else if (!this.isPossible(action, env)) {
            return new VWActionResult(VWActionOutcome.IMPOSSIBLE, action);
        }
        else {
            this.setActorColourBeforeAction(env.getActorByID(action.getActorID()).orElseThrow().getColour());
            this.setActorOrientationBeforeAction(env.getActorByID(action.getActorID()).orElseThrow().getOrientation());
            this.setActorCoordBeforeAction(env.getActorCoordByID(action.getActorID()).orElseThrow());
            this.setDirtBeforeAction(env.getLocation(this.getActorCoordBeforeAction()).orElseThrow().getDirt());

            const candidateResult: VWActionResult = this.perform(action, env);

            if (!this.succeeded(action, env)) {
                return new VWActionResult(VWActionOutcome.FAILURE, action);
            }
            else {
                return candidateResult;
            }
        }
    }

    protected abstract isPossible(action: VWAction, env: VWEnvironment): boolean;

    protected abstract perform(action: VWAction, env: VWEnvironment): VWActionResult;

    protected abstract succeeded(action: VWAction, env: VWEnvironment): boolean;

    protected static isActorInEnv(actorID: string, env: VWEnvironment): boolean {
        return env.getActorByID(actorID).isPresent();
    }

    protected abstract checkInvariants(action: VWAction, env: VWEnvironment): boolean;

    protected checkAllInvariants(action: VWAction, env: VWEnvironment): boolean {
        return VWAbstractExecutor.isActorInEnv(action.getActorID(), env) && this.checkColourAfterAction(action, env) && this.checkOrientationAfterAction(action, env) && this.checkCoordAfterAction(action, env) && this.checkDirtAfterAction(env);
    }

    protected checkColourAfterAction(action: VWAction, env: VWEnvironment): boolean {
        return this.getActorColourBeforeAction() === env.getActorByID(action.getActorID()).orElseThrow().getColour();
    }

    protected checkOrientationAfterAction(action: VWAction, env: VWEnvironment): boolean {
        return this.getActorOrientationBeforeAction() === env.getActorByID(action.getActorID()).orElseThrow().getOrientation();
    }

    protected checkCoordAfterAction(action: VWAction, env: VWEnvironment): boolean {
        return this.getActorCoordBeforeAction().equals(env.getActorCoordByID(action.getActorID()).orElseThrow());
    }

    protected checkDirtAfterAction(env: VWEnvironment): boolean {
        return this.getDirtBeforeAction().equals(env.getLocation(this.getActorCoordBeforeAction()).orElseThrow().getDirt());
    }
}
