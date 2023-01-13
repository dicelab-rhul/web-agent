import { VWLocationAppearance } from "../environment/VWLocationAppearance";
import { JOptional } from "./JOptional";
import { VWActionResult } from "./VWActionResult";
import { VWColour } from "./VWColour";
import { VWCoord } from "./VWCoord";
import { VWOrientation } from "./VWOrientation";
import { VWPosition } from "./VWPosition";

export class VWObservation {
    private locations: Map<VWPosition, VWLocationAppearance>;
    private actionResults: Array<VWActionResult>;

    public constructor(locations: Map<VWPosition, VWLocationAppearance>) {
        this.locations = new Map<VWPosition, VWLocationAppearance>();

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

    public getActionResults(): Array<VWActionResult> {
        return this.actionResults;
    }
}
