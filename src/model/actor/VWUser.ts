import { VWColour } from "../common/VWColour";
import { VWOrientation } from "../common/VWOrientation";
import { VWActor } from "./VWActor";
import { VWObservationSensor } from "./appendices/VWObservationSensor";
import { VWUserPhysicalActuator } from "./appendices/VWUserPhysicalActuator";
import { VWUserMind } from "./mind/VWUserMind";

export class VWUser extends VWActor {
    public constructor(colour: VWColour, orientation: VWOrientation, mind: VWUserMind, observationSensor: VWObservationSensor, physicalActuator: VWUserPhysicalActuator) {
        super(VWUser.validateColour(colour), orientation, mind, observationSensor, undefined, physicalActuator, undefined);
    }

    private static validateColour(colour: VWColour): VWColour {
        if (colour === null || colour === undefined) {
            throw new Error("The colour cannot be null or undefined.");
        }
        else if (colour !== VWColour.USER) {
            throw new Error("The colour of a user must be USER.");
        }
        else {
            return colour;
        }
    }
}
