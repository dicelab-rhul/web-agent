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
    private cumulativeEffort: bigint = 0n;
    private mindCoreFilePath: string;
    private reviseMethod: () => void;
    private decideMethod: () => VWAction[];

    public getLatestObservation(): VWObservation {
        return this.observation;
    }

    public getLatestMessages(): VWMessage[] {
        return this.messages;
    }

    public getMindCoreFilePath(): string {
        return this.mindCoreFilePath;
    }

    public setMindCoreFilePath(mindCoreFilePath: string): void {
        this.mindCoreFilePath = mindCoreFilePath;
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
        this.observation = VWAbstractMindCore.validateObservation(observation);
        this.messages = VWAbstractMindCore.validateMessages(messages);
    }

    private static validateObservation(observation: VWObservation): VWObservation {
        if (observation === null || observation === undefined) {
            throw new Error("The observation cannot be null or undefined.");
        }

        return observation;
    }

    private static validateMessages(messages: VWMessage[]): VWMessage[] {
        if (messages === null || messages === undefined) {
            throw new Error("The messages cannot be null or undefined.");
        }

        return messages;
    }

    public revise(): void {
        if (this.reviseMethod === null || this.reviseMethod === undefined) {
            throw new Error("The revise method cannot be null or undefined.");
        }
        else {
            this.reviseMethod();
        }
    }

    public decide(): VWAction[] {
        if (this.decideMethod === null || this.decideMethod === undefined) {
            throw new Error("The decide method cannot be null or undefined.");
        }
        else {
            return this.decideMethod();
        }
    }

    public getCumulativeEffort(): bigint {
        return this.cumulativeEffort;
    }

    public incrementEffort(effort: bigint): void {
        if (effort === null || effort === undefined) {
            throw new Error("The effort cannot be null or undefined.");
        }
        else {
            this.cumulativeEffort += effort;
        }
    }

    public static loadFromFile(mindCoreFilePath: string): VWMindCore {
        throw new Error("Not yet implemented."); // TODO: implement, and, in doing so, integrate Teleora.
    }

    public static import(teleora: any): VWMindCore {
        throw new Error("Not yet implemented."); // TODO: implement, and, in doing so, integrate Teleora.
    }

    // TODO: call this method from `loadFromFile()`, and validate the arguments.
    protected construct(mindCoreFilePath: string, reviseMethod: () => void, decideMethod: () => VWAction[]) {
        this.mindCoreFilePath = mindCoreFilePath;
        this.reviseMethod = reviseMethod;
        this.decideMethod = decideMethod;
    }

    // This is called when the simulation is stopped, and the mind core is to be reset.
    public newCore(): VWMindCore {
        let newCore: VWAbstractMindCore = new (this.constructor as any)();

        newCore.construct(this.mindCoreFilePath, this.reviseMethod, this.decideMethod);

        return newCore;
    }
}
