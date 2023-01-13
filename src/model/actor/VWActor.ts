import { VWColour } from "../common/VWColour";
import { VWOrientation } from "../common/VWOrientation";
import { VWActorAppearance } from "./appearance/VWActorAppearance";

export abstract class VWActor {
    // TODO: Implement.
    public getAppearance(): VWActorAppearance {
        return new VWActorAppearance("", VWColour.GREEN, VWOrientation.NORTH); // TODO: Implement.
    }
}
