import { VWColour } from "../common/VWColour";
import { VWOrientation } from "../common/VWOrientation";
import { VWActor } from "./VWActor";
import { VWObservationSensor } from "./appendices/VWObservationSensor";
import { VWUserPhysicalActuator } from "./appendices/VWUserPhysicalActuator";
import { VWUserMind } from "./mind/VWUserMind";

export class VWUser extends VWActor {
    public constructor(orientation: VWOrientation, mind: VWUserMind, observationSensor: VWObservationSensor, physicalActuator: VWUserPhysicalActuator) {
        super(VWColour.USER, orientation, mind, observationSensor, undefined, physicalActuator);
    }

    public getMind(): VWUserMind {
        return super.getMind() as VWUserMind;
    }

    public resetMind(): VWUserMind {
        return new VWUserMind(this.getMind().getMindCore().getDifficultyLevel());
    }
}
