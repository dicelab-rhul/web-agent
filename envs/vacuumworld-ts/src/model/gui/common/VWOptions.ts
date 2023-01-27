import { VWEnvironmentJSON } from "../../environment/VWEnvironment";
import { VWExistenceChecker } from "../../utils/VWExistenceChecker";

export class VWOptions {
    private speed: number;
    private autoplay: boolean;
    private stateToLoad: VWEnvironmentJSON;
    private tooltipsActive: boolean;
    private maxNumberOfCycles: number;
    private efforts: Map<string, bigint>;
    private teleora: any; // TODO: Add Teleora type.

    public constructor() {
        this.setDefaultOptions();
    }

    private setDefaultOptions(): void {
        this.speed = 0.0; // Normal speed.
        this.autoplay = false; // Autoplay is disabled by default.
        this.stateToLoad = undefined; // No state to load.
        this.tooltipsActive = true; // Tooltips are active by default.
        this.maxNumberOfCycles = undefined; // No limit.
        this.efforts = new Map<string, bigint>(); // Will be filled with the default efforts.
        this.teleora = undefined; // No Teleora file.
    }

    public getSpeed(): number {
        return this.speed;
    }

    public setSpeed(speed: number): void {
        this.speed = speed;
    }

    public isAutoplayActive(): boolean {
        return this.autoplay;
    }

    public activateAutoplay(): void {
        this.autoplay = true;
    }

    public deactivateAutoplay(): void {
        this.autoplay = false;
    }

    public getStateToLoad(): VWEnvironmentJSON {
        return this.stateToLoad;
    }

    public setStateToLoad(stateToLoad: VWEnvironmentJSON): void {
        this.stateToLoad = stateToLoad;
    }

    public areTooltipsActive(): boolean {
        return this.tooltipsActive;
    }

    public activateTooltips(): void {
        this.tooltipsActive = true;
    }

    public deactivateTooltips(): void {
        this.tooltipsActive = false;
    }

    public getMaxNumberOfCycles(): number {
        return this.maxNumberOfCycles;
    }

    public setMaxNumberOfCycles(maxNumberOfCycles: number): void {
        this.maxNumberOfCycles = maxNumberOfCycles; // Can be undefined.
    }

    public getEfforts(): Map<string, bigint> {
        return this.efforts;
    }

    public setEfforts(efforts: Map<string, bigint>): void {
        this.efforts = VWExistenceChecker.validateExistence(efforts); // Individual efforts can be undefined.
    }

    public setEffort(actionName: string, effort: bigint): void {
        this.efforts.set(actionName, effort);
    }

    public getTeleora(): any { // TODO: Add Teleora type.
        return this.teleora;
    }

    public setTeleora(teleora: any): void { // TODO: Add Teleora type.
        this.teleora = teleora;
    }
}
