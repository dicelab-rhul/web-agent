import { VWAction } from "../../actions/VWAction";
import { VWMessage } from "../../common/VWMessage";
import { VWObservation } from "../../common/VWObservation";
import { VWMindCore } from "./core/VWMindCore";

export interface VWMind {
    perceive(observation: VWObservation, messages: VWMessage[]): void;

    revise(): void;

    decide(): void;

    execute(): VWAction[];

    getMindCore(): VWMindCore;
}
