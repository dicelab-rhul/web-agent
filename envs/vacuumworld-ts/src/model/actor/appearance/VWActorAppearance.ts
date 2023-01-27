import { VWAppearance } from "../../common/VWAppearance";
import { VWColour } from "../../common/VWColour";
import { VWOrientation } from "../../common/VWOrientation";
import { VWExistenceChecker } from "../../utils/VWExistenceChecker";

export class VWActorAppearance implements VWAppearance {
    private actorID: string;
    private colour: VWColour;
    private orientation: VWOrientation;

    constructor(actorID: string, colour: VWColour, orientation: VWOrientation) {
        this.actorID = VWExistenceChecker.validateExistence(actorID, "The actor ID cannot be null or undefined.");
        this.colour = VWExistenceChecker.validateExistence(colour, "The actor colour cannot be null or undefined.");
        this.orientation = VWExistenceChecker.validateExistence(orientation, "The actor orientation cannot be null or undefined.");
    }

    public getID(): string {
        return this.actorID;
    }

    public getColour(): VWColour {
        return this.colour;
    }

    public getOrientation(): VWOrientation {
        return this.orientation;
    }
}
