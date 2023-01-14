import { VWAction } from "../../actions/VWAction";
import { VWMessage } from "../../common/VWMessage";
import { VWObservation } from "../../common/VWObservation";

export interface VWMind {
    perceive(observation: VWObservation, messages: VWMessage[]): void;

    revise(): void;

    decide(): void;

    execute(): VWAction[];
}
