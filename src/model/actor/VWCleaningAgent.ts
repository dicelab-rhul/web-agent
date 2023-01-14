import { VWColour } from "../common/VWColour";
import { VWOrientation } from "../common/VWOrientation";
import { VWActor } from "./VWActor";
import { VWCleaningAgentPhysicalActuator } from "./appendices/VWCleaningAgentPhysicalActuator";
import { VWCommunicativeActuator } from "./appendices/VWCommunicativeActuator";
import { VWListeningSensor } from "./appendices/VWListeningSensor";
import { VWObservationSensor } from "./appendices/VWObservationSensor";
import { VWCleaningAgentMind } from "./mind/VWCleaningAgentMind";

export class VWCleaningAgent extends VWActor {
    public constructor(colour: VWColour, orientation: VWOrientation, mind: VWCleaningAgentMind, observationSensor: VWObservationSensor, listeningSensor: VWListeningSensor, physicalActuator: VWCleaningAgentPhysicalActuator, communicativeActuator: VWCommunicativeActuator) {
        super(VWCleaningAgent.validateColour(colour), orientation, mind, observationSensor, listeningSensor, physicalActuator, communicativeActuator);
    }

    private static validateColour(colour: VWColour): VWColour {
        if (colour === null || colour === undefined) {
            throw new Error("The colour cannot be null or undefined.");
        }
        else if (colour === VWColour.USER) {
            throw new Error("The colour of a cleaning agent cannot be USER.");
        }
        else {
            return colour;
        }
    }
}
