import { VWLocationAppearance } from "../environment/VWLocationAppearance";
import { VWOrientationUtils } from "../utils/VWOrientationUtils";
import { JOptional } from "./JOptional";
import { VWActionResult } from "./VWActionResult";
import { VWColour } from "./VWColour";
import { VWCoord } from "./VWCoord";
import { VWOrientation } from "./VWOrientation";
import { VWPerception } from "./VWPerception";
import { VWPosition } from "./VWPosition";

export class VWObservation extends VWPerception {
    private locations: Map<VWPosition, VWLocationAppearance>;
    private actionResults: VWActionResult[];

    public constructor(locations: Map<VWPosition, VWLocationAppearance>, actionResults: VWActionResult[]) {
        super();

        this.locations = new Map<VWPosition, VWLocationAppearance>();
        this.actionResults = VWObservation.validateActionResults(actionResults);

        for (const position of locations.keys()) {
            if (position === null || position === undefined) {
                throw new Error("The position cannot be null or undefined.");
            }
            else if (locations.get(position) === null || locations.get(position) === undefined) {
                throw new Error("The location appearance cannot be null or undefined.");
            }
            else {
                this.locations.set(position, locations.get(position)!);
            }
        }
    }

    private static validateActionResults(actionResults: VWActionResult[]): VWActionResult[] {
        if (actionResults === null || actionResults === undefined) {
            throw new Error("The action results cannot be null or undefined.");
        }
        else if (actionResults.some((actionResult: VWActionResult) => actionResult === null || actionResult === undefined)) {
            throw new Error("The action results array cannot contain null or undefined elements.");
        }
        else if (actionResults.length === 0) {
            throw new Error("The action results array cannot be empty.");
        }
        else {
            return actionResults;
        }
    }

    public getLocations(): Map<VWPosition, VWLocationAppearance> {
        return this.locations;
    }

    public getLocationAt(position: VWPosition): JOptional<VWLocationAppearance> {
        if (this.locations.has(position) && this.locations.get(position) !== null && this.locations.get(position) !== undefined) {
            return JOptional.of(this.locations.get(position)!);
        }
        else {
            return JOptional.empty();
        }
    }

    public getCenter(): JOptional<VWLocationAppearance> {
        return this.getLocationAt(VWPosition.CENTER);
    }

    public getLeft(): JOptional<VWLocationAppearance> {
        return this.getLocationAt(VWPosition.LEFT);
    }

    public getRight(): JOptional<VWLocationAppearance> {
        return this.getLocationAt(VWPosition.RIGHT);
    }

    public getForward(): JOptional<VWLocationAppearance> {
        return this.getLocationAt(VWPosition.FORWARD);
    }

    public getForwardLeft(): JOptional<VWLocationAppearance> {
        return this.getLocationAt(VWPosition.FORWARDLEFT);
    }

    public getForwardRight(): JOptional<VWLocationAppearance> {
        return this.getLocationAt(VWPosition.FORWARDRIGHT);
    }

    public getOwnID(): string {
        return this.getCenter().orElseThrow().getActorAppearance().orElseThrow().getID();
    }

    public getOwnColour(): VWColour {
        return this.getCenter().orElseThrow().getActorAppearance().orElseThrow().getColour();
    }

    public getOwnOrientation(): VWOrientation {
        return this.getCenter().orElseThrow().getActorAppearance().orElseThrow().getOrientation();
    }

    public getOwnCoordinates(): VWCoord {
        return this.getCenter().orElseThrow().getCoord();
    }

    public getActionResults(): VWActionResult[] {
        return this.actionResults;
    }

    public isWallImmediatelyAhead(): boolean {
        return this.getCenter().orElseThrow().hasWallOn(this.getOwnOrientation());
    }

    public isWallOneStepAhead(): boolean {
        return !this.isWallImmediatelyAhead() && this.getForward().orElseThrow().hasWallOn(this.getOwnOrientation());
    }

    public isWallVisibleSomewhereAhead(): boolean {
        return this.isWallImmediatelyAhead() || this.isWallOneStepAhead();
    }

    public isWallImmediatelyToTheLeft(): boolean {
        return this.getCenter().orElseThrow().hasWallOn(VWOrientationUtils.getLeft(this.getOwnOrientation()));
    }

    public isWallOneStepToTheLeft(): boolean {
        return !this.isWallImmediatelyToTheLeft() && this.getLeft().orElseThrow().hasWallOn(VWOrientationUtils.getLeft(this.getOwnOrientation()));
    }

    public isWallVisibleSomewhereToTheLeft(): boolean {
        return this.isWallImmediatelyToTheLeft() || this.isWallOneStepToTheLeft();
    }

    public isWallImmediatelyToTheRight(): boolean {
        return this.getCenter().orElseThrow().hasWallOn(VWOrientationUtils.getRight(this.getOwnOrientation()));
    }

    public isWallOneStepToTheRight(): boolean {
        return !this.isWallImmediatelyToTheRight() && this.getRight().orElseThrow().hasWallOn(VWOrientationUtils.getRight(this.getOwnOrientation()));
    }

    public isWallVisibleSomewhereToTheRight(): boolean {
        return this.isWallImmediatelyToTheRight() || this.isWallOneStepToTheRight();
    }
}
