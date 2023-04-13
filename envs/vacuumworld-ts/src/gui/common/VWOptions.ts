import { VWColour } from "../../model/common/VWColour";
import { VWUserDifficulty } from "../../model/common/VWUserDifficulty";
import { VWEnvironmentJSON } from "../../model/environment/VWEnvironment";
import { VWExistenceChecker } from "../../model/utils/VWExistenceChecker";

export class VWOptions {
    private speed: number;
    private autoplay: boolean;
    private stateToLoad: VWEnvironmentJSON;
    private tooltipsActive: boolean;
    private maxNumberOfCycles: number;
    private efforts: Map<string, bigint>;
    private teleora: any; // TODO: Add Teleora type.
    private teleoraFunctions: Map<VWColour, (...args: any[]) => any>; // For each agent colour, minimally `revise()` and `decide()`.
    private userDifficulty: VWUserDifficulty;

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
        this.teleoraFunctions = new Map<VWColour, (...args: any[]) => any>(); // Will be filled with the Teleora functions.
        this.userDifficulty = VWUserDifficulty.BASIC;
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

    public getTeleoraFunctions(): Map<VWColour, (...args: any[]) => any> {
        return this.teleoraFunctions;
    }

    public setTeleoraFunctions(teleoraFunctions: Map<VWColour, (...args: any[]) => any>): void {
        // TODO: validate the functions.
        this.teleoraFunctions = VWExistenceChecker.validateExistence(teleoraFunctions); // Individual functions can be undefined.
    }

    public getUserDifficulty(): VWUserDifficulty {
        return this.userDifficulty;
    }

    public setUserDifficulty(userDifficulty: VWUserDifficulty): void {
        this.userDifficulty = userDifficulty;
    }

    public toggleUserDifficulty(): void {
        this.userDifficulty = this.userDifficulty === VWUserDifficulty.BASIC ? VWUserDifficulty.ADVANCED : VWUserDifficulty.BASIC;
    }
}
