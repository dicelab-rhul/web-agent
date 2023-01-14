import { VWAction } from "../../../actions/VWAction";
import { VWMessage } from "../../../common/VWMessage";
import { VWObservation } from "../../../common/VWObservation";

export interface VWMindCore {
    perceive(observation: VWObservation, messages: VWMessage[]): void;

    revise(): void;

    decide(): VWAction[];
}
