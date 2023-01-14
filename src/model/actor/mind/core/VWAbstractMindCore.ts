import { VWAction } from "../../../actions/VWAction";
import { VWColour } from "../../../common/VWColour";
import { VWCoord } from "../../../common/VWCoord";
import { VWMessage } from "../../../common/VWMessage";
import { VWObservation } from "../../../common/VWObservation";
import { VWOrientation } from "../../../common/VWOrientation";
import { VWMindCore } from "./VWMindCore";

export abstract class VWAbstractMindCore implements VWMindCore {
    private observation: VWObservation;
    private messages: VWMessage[];

    public getLatestObservation(): VWObservation {
        return this.observation;
    }

    public getLatestMessages(): VWMessage[] {
        return this.messages;
    }

    public getOwnID(): string {
        return this.observation.getOwnID();
    }

    public getOwnColour(): VWColour {
        return this.observation.getOwnColour();
    }

    public getOwnOrientation(): VWOrientation {
        return this.observation.getOwnOrientation();
    }

    public getOwnCoordinates(): VWCoord {
        return this.observation.getOwnCoordinates();
    }

    public perceive(observation: VWObservation, messages: VWMessage[]): void {
        this.observation = this.validateObservation(observation);
        this.messages = this.validateMessages(messages);
    }

    private validateObservation(observation: VWObservation): VWObservation {
        if (observation === null || observation === undefined) {
            throw new Error("The observation cannot be null or undefined.");
        }

        return observation;
    }

    private validateMessages(messages: VWMessage[]): VWMessage[] {
        if (messages === null || messages === undefined) {
            throw new Error("The messages cannot be null or undefined.");
        }

        return messages;
    }

    public abstract revise(): void; // TODO: integrate Teleora.

    public abstract decide(): VWAction[]; // TODO: integrate Teleora.
}
