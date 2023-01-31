import { VWColour } from "../common/VWColour";
import { VWOrientation } from "../common/VWOrientation";
import { VWExistenceChecker } from "../utils/VWExistenceChecker";
import { VWActor } from "./VWActor";
import { VWCleaningAgentPhysicalActuator } from "./appendices/VWCleaningAgentPhysicalActuator";
import { VWCommunicativeActuator } from "./appendices/VWCommunicativeActuator";
import { VWListeningSensor } from "./appendices/VWListeningSensor";
import { VWObservationSensor } from "./appendices/VWObservationSensor";
import { VWCleaningAgentMind } from "./mind/VWCleaningAgentMind";

export class VWCleaningAgent extends VWActor {
    public constructor(colour: VWColour, orientation: VWOrientation, mind: VWCleaningAgentMind, observationSensor: VWObservationSensor, listeningSensor: VWListeningSensor, physicalActuator: VWCleaningAgentPhysicalActuator, communicativeActuator: VWCommunicativeActuator) {
        super(VWCleaningAgent.validateColourForCleaningAgent(colour), orientation, mind, observationSensor, listeningSensor, physicalActuator, communicativeActuator);
    }

    protected static validateColourForCleaningAgent(colour: VWColour): VWColour {
        if (!VWExistenceChecker.allArgumentsExist(colour)) {
            throw new Error("The colour cannot be null or undefined.");
        }
        else if (colour === VWColour.USER) {
            throw new Error("The colour of a cleaning agent cannot be USER.");
        }
        else {
            return colour;
        }
    }

    public getMind(): VWCleaningAgentMind {
        return super.getMind() as VWCleaningAgentMind;
    }

    public resetMind(): VWCleaningAgentMind {
        return new VWCleaningAgentMind(this.getMind().getMindCore().newCore());
    }
}
