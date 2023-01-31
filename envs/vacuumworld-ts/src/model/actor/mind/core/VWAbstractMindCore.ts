import { VWAction } from "../../../actions/VWAction";
import { VWColour } from "../../../common/VWColour";
import { VWCoord } from "../../../common/VWCoord";
import { VWMessage } from "../../../common/VWMessage";
import { VWObservation } from "../../../common/VWObservation";
import { VWOrientation } from "../../../common/VWOrientation";
import { VWExistenceChecker } from "../../../utils/VWExistenceChecker";
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
        this.observation = VWExistenceChecker.validateExistence(observation, "The observation cannot be null or undefined.");
        this.messages = VWExistenceChecker.validateAllExistence(messages, "The messages cannot be null or undefined.");
    }

    public revise(): void {
        VWExistenceChecker.validateExistence(this.reviseMethod, "The revise method cannot be null or undefined.")();
    }

    public decide(): VWAction[] {
        return VWExistenceChecker.validateExistence(this.decideMethod, "The decide method cannot be null or undefined.")();
    }

    public getCumulativeEffort(): bigint {
        return this.cumulativeEffort;
    }

    public incrementEffort(effort: bigint): void {
        if (!VWExistenceChecker.allArgumentsExist(effort)) {
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
        this.mindCoreFilePath = VWExistenceChecker.validateExistence(mindCoreFilePath, "The mind core file path cannot be null or undefined.");
        this.reviseMethod = VWExistenceChecker.validateExistence(reviseMethod, "The revise method cannot be null or undefined.");
        this.decideMethod = VWExistenceChecker.validateExistence(decideMethod, "The decide method cannot be null or undefined.");
    }

    // This is called when the simulation is stopped, and the mind core is to be reset.
    public newCore(): VWMindCore {
        let newCore: VWAbstractMindCore = new (this.constructor as any)();

        newCore.construct(this.mindCoreFilePath, this.reviseMethod, this.decideMethod);

        return newCore;
    }
}
