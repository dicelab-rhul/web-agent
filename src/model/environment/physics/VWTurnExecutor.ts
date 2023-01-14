import { VWTurnAction } from "../../actions/VWTurnAction";
import { VWActionOutcome } from "../../common/VWActionOutcome";
import { VWActionResult } from "../../common/VWActionResult";
import { VWColour } from "../../common/VWColour";
import { VWCoord } from "../../common/VWCoord";
import { VWDirection } from "../../common/VWDirection";
import { VWOrientation } from "../../common/VWOrientation";
import { VWEnvironment } from "../VWEnvironment";
import { VWAbstractExecutor } from "./VWAbstractExecutor";

export class VWTurnExecutor extends VWAbstractExecutor {
    private actorColourBeforeTurn: VWColour;
    private actorOrientationBeforeTurn: VWOrientation;
    private actorCoordBeforeTurn: VWCoord;

    public isPossible(action: VWTurnAction, env: VWEnvironment): boolean {
        try {
            return this.isActorInEnv(action.getActorID(), env);
        }
        catch (e) {
            return false;
        }
    }

    public perform(action: VWTurnAction, env: VWEnvironment): VWActionResult {
        try {
            const actor = env.getActorByID(action.getActorID()).orElseThrow();

            this.actorColourBeforeTurn = actor.getColour();
            this.actorOrientationBeforeTurn = actor.getOrientation();
            this.actorCoordBeforeTurn = env.getActorCoordByID(action.getActorID()).orElseThrow();

            env.turnActor(this.actorCoordBeforeTurn, action.getTurningDirection());

            return new VWActionResult(VWActionOutcome.SUCCESS, action);
        }
        catch (e) {
            return new VWActionResult(VWActionOutcome.FAILURE, action);
        }
    }

    public succeeded(action: VWTurnAction, env: VWEnvironment): boolean {
        try {
            return this.checkInvariants(action, env) && this.checkOrientationAfterTurn(action, env);
        }
        catch (e) {
            return false;
        }
    }

    public checkInvariants(action: VWTurnAction, env: VWEnvironment): boolean {
        if(!this.isActorInEnv(action.getActorID(), env)) {
            return false;
        }
        else if (this.actorColourBeforeTurn !== env.getActorByID(action.getActorID()).orElseThrow().getColour()) {
            return false;
        }
        else if (this.actorCoordBeforeTurn !== env.getActorCoordByID(action.getActorID()).orElseThrow()) {
            return false;
        }
        else {
            return true;
        }
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
        if (this.actorOrientationBeforeTurn === VWOrientation.NORTH) {
            return newOrientation === VWOrientation.WEST;
        }
        else if (this.actorOrientationBeforeTurn === VWOrientation.EAST) {
            return newOrientation === VWOrientation.NORTH;
        }
        else if (this.actorOrientationBeforeTurn === VWOrientation.SOUTH) {
            return newOrientation === VWOrientation.EAST;
        }
        else if (this.actorOrientationBeforeTurn === VWOrientation.WEST) {
            return newOrientation === VWOrientation.SOUTH;
        }
        else {
            return false;
        }
    }

    private checkOrientationAfterRightTurn(newOrientation: VWOrientation): boolean {
        if (this.actorOrientationBeforeTurn === VWOrientation.NORTH) {
            return newOrientation === VWOrientation.EAST;
        }
        else if (this.actorOrientationBeforeTurn === VWOrientation.EAST) {
            return newOrientation === VWOrientation.SOUTH;
        }
        else if (this.actorOrientationBeforeTurn === VWOrientation.SOUTH) {
            return newOrientation === VWOrientation.WEST;
        }
        else if (this.actorOrientationBeforeTurn === VWOrientation.WEST) {
            return newOrientation === VWOrientation.NORTH;
        }
        else {
            return false;
        }
    }
}
