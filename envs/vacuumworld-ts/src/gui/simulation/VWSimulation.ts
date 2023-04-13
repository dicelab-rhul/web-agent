import { VWActorFactory } from "../../model/actor/factories/VWActorFactory";
import { VWColour } from "../../model/common/VWColour";
import { VWCoord } from "../../model/common/VWCoord";
import { VWDirection } from "../../model/common/VWDirection";
import { VWMap } from "../../model/common/VWMap";
import { VWDirt } from "../../model/dirt/VWDirt";
import { VWEnvironment } from "../../model/environment/VWEnvironment";
import { VWLocation } from "../../model/environment/VWLocation";
import { VWLocationAppearance } from "../../model/environment/VWLocationAppearance";
import { VWExistenceChecker } from "../../model/utils/VWExistenceChecker";
import { VWOptions } from "../common/VWOptions";
import { VWCell } from "./div/VWCell";
import { VWGridDiv } from "./div/VWGridDiv";
import envData from "../../../../../static/json/envs.json";
import { Base64 } from "js-base64";

import globalGUIConfig from "../../../../../static/json/gui.json";
import config from "../../model/config.json";

const { runBtn, pauseBtn, resumeBtn, stopBtn, resetBtn, speedUpBtn, saveStateBtn, loadStateBtn, guideBtn } = globalGUIConfig.gui.externalSimulationControlsDivData.children;
const { minEnvDim, maxEnvDim, debug, debugPrimes, debugPrimesTest, debugTest } = config;

export class VWSimulation {
    private gridSize: number;
    private gridDiv: VWGridDiv;
    private environment: VWEnvironment;
    private options: VWOptions
    private canRun: boolean;
    private paused: boolean;
    private replaceGridDivCallback: (newGridDiv: VWGridDiv) => void;
    private hideDraggableBodiesDivCallback: () => void;
    private replaceDraggableBodiesDivCallback: (gridSize: number) => void;
    private hideSimulationControlsDivCallback: () => void;
    private replaceSimulationControlsDivCallback: (gridSize: number) => void;
    private cellSelectedCallback: (coord?: VWCoord) => void;

    public constructor(environment: VWEnvironment, options: VWOptions) {
        this.gridSize = VWSimulation.validateGridSize(environment);
        this.environment = VWExistenceChecker.validateExistence(environment, "Cannot create a simulation without an environment.");
        this.gridDiv = this.createGrid(true);
        this.options = VWExistenceChecker.validateExistence(options, "Cannot create a simulation without options.");
        this.canRun = true;
        this.paused = false;
    }

    public setCallbacks(gridRepl: (g: VWGridDiv) => void, dragHide: () => void, dragReplace: (s: number) => void, simCtrlHide: () => void, simCtrlReplace: (s: number) => void, selected: (c?: VWCoord) => void): void {
        this.replaceGridDivCallback = gridRepl;
        this.replaceDraggableBodiesDivCallback = dragReplace;
        this.hideDraggableBodiesDivCallback = dragHide;
        this.hideSimulationControlsDivCallback = simCtrlHide;
        this.replaceSimulationControlsDivCallback = simCtrlReplace;
        this.cellSelectedCallback = selected;
    }

    public getGridDiv(): VWGridDiv {
        return this.gridDiv;
    }

    public getEnvironment(): VWEnvironment {
        return this.environment;
    }

    private static validateGridSize(environment: VWEnvironment): number {
        VWExistenceChecker.validateExistence(environment, "Cannot create a simulation without an environment.");

        if (minEnvDim > maxEnvDim) {
            throw new Error("Invalid config: the value of `max_environment_dim` must be greater or equal to the value of `min_environment_dim`.");
        }
        else if (environment.getGridSize() < minEnvDim || environment.getGridSize() > maxEnvDim) {
            throw new Error(`The grid size must be between ${minEnvDim} and ${maxEnvDim} (inclusive).`);
        }
        else {
            return environment.getGridSize();
        }
    }

    private createGrid(addListeners: boolean): VWGridDiv {
        let gridMap: VWMap<VWCoord, VWCell> = new VWMap<VWCoord, VWCell>();

        this.environment.getAmbient().getGrid().forEach((loc: VWLocation, coord: VWCoord) => {
            let cell: VWCell = new VWCell(loc.getAppearance());

            if (addListeners) {
                cell.addCallbacks(this.dropCallback.bind(this), this.rotateCallback.bind(this), this.doubleClickCallback.bind(this), this.cellSelectedCallback);
            }

            gridMap.put(coord, cell);
        });

        let gridDiv: VWGridDiv = new VWGridDiv();

        gridDiv.updateGrid(this.gridSize, gridMap);

        return gridDiv;
    }

    private dropCallback(imageSrc: string, locationAppearance: VWLocationAppearance): VWLocationAppearance {
        const coord: VWCoord = locationAppearance.getCoord();

        if (imageSrc.endsWith("green_north.png")) {
            this.environment.getLocation(coord).ifPresent((loc: VWLocation) => loc.removeActorIfPresent());
            this.environment.getLocation(coord).ifPresent((loc: VWLocation) => loc.addActor(VWActorFactory.createVWActorFacingNorth(VWColour.GREEN, this.options)));
        }
        else if (imageSrc.endsWith("orange_north.png")) {
            this.environment.getLocation(coord).ifPresent((loc: VWLocation) => loc.removeActorIfPresent());
            this.environment.getLocation(coord).ifPresent((loc: VWLocation) => loc.addActor(VWActorFactory.createVWActorFacingNorth(VWColour.ORANGE, this.options)));
        }
        else if (imageSrc.endsWith("white_north.png")) {
            this.environment.getLocation(coord).ifPresent((loc: VWLocation) => loc.removeActorIfPresent());
            this.environment.getLocation(coord).ifPresent((loc: VWLocation) => loc.addActor(VWActorFactory.createVWActorFacingNorth(VWColour.WHITE, this.options)));
        }
        else if (imageSrc.endsWith("user_north.png")) {
            this.environment.getLocation(coord).ifPresent((loc: VWLocation) => loc.removeActorIfPresent());
            this.environment.getLocation(coord).ifPresent((loc: VWLocation) => loc.addActor(VWActorFactory.createVWActorFacingNorth(VWColour.USER, this.options)));
        }
        else if (imageSrc.endsWith("green_dirt.png")) {
            this.environment.getLocation(coord).ifPresent((loc: VWLocation) => loc.removeDirtIfPresent());
            this.environment.getLocation(coord).ifPresent((loc: VWLocation) => loc.addDirt(new VWDirt(VWColour.GREEN)));
        }
        else if (imageSrc.endsWith("orange_dirt.png")) {
            this.environment.getLocation(coord).ifPresent((loc: VWLocation) => loc.removeDirtIfPresent());
            this.environment.getLocation(coord).ifPresent((loc: VWLocation) => loc.addDirt(new VWDirt(VWColour.ORANGE)));
        }
        else {
            throw new Error("Invalid image src.");
        }

        return this.environment.getLocation(coord).orElseThrow().getAppearance();
    }

    private doubleClickCallback(locationAppearance: VWLocationAppearance): VWLocationAppearance {
        const coord: VWCoord = locationAppearance.getCoord();

        // We only remove the "top" item, so if there is an actor, remove it, otherwise remove the dirt (if present).
        this.environment.getLocation(coord).ifPresent((loc: VWLocation) => {
            if (loc.hasActor()) {
                loc.removeActor();
            }
            else if (loc.hasDirt()) {
                loc.removeDirt();
            }
        });

        return this.environment.getLocation(coord).orElseThrow().getAppearance();
    }

    private rotateCallback(direction: VWDirection, locationAppearance: VWLocationAppearance): VWLocationAppearance {
        const coord: VWCoord = locationAppearance.getCoord();

        this.environment.getLocation(coord).ifPresent((loc: VWLocation) => {
            if (loc.hasActor()) {
                this.environment.turnActor(coord, direction);
            }
        });

        return this.environment.getLocation(coord).orElseThrow().getAppearance();
    }

    public showSimulation(): void {
        this.gridDiv = this.createGrid(true); // Create the new grid.

        this.replaceGridDivCallback(this.gridDiv); // Replace the old grid div with the new grid.

        this.gridDiv.pack(); // Pack the new grid.

        this.replaceDraggableBodiesDivCallback(this.gridSize);
        this.replaceSimulationControlsDivCallback(this.gridSize);

        this.gridDiv.show(); // Show the new grid.
    }

    public cycleSimulation(): void {
        this.validateCallbacks();
        this.hideDraggableBodiesDivCallback();

        this.paused = false;
        this.canRun = true;

        console.log("Simulation starting...");
        console.log("Initial environment: ");
        console.log(this.environment.toJsonObject());
        console.log(console.log(JSON.stringify(this.environment.toJsonObject(), null, 4)));

        this.mainLoop();
    }

    private validateCallbacks(): void {
        if (!VWExistenceChecker.allArgumentsExist(this.replaceGridDivCallback)) {
            throw new Error("Cannot cycle the simulation without a callback to replace the grid div.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.hideDraggableBodiesDivCallback)) {
            throw new Error("Cannot cycle the simulation without a callback to hide the draggable bodies div.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.replaceDraggableBodiesDivCallback)) {
            throw new Error("Cannot cycle the simulation without a callback to replace the draggable bodies div.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.hideSimulationControlsDivCallback)) {
            throw new Error("Cannot cycle the simulation without a callback to hide the simulation controls div.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.replaceSimulationControlsDivCallback)) {
            throw new Error("Cannot cycle the simulation without a callback to replace the simulation controls div.");
        }
    }

    private async mainLoop(): Promise<void> {
        if (this.options.getMaxNumberOfCycles() === undefined) {
            await this.loopForever();
        }
        else {
            await this.loopNumberOfTimes();
        }

        // In case the ends beacues the max number of cycles has been reached.
        this.paused = false;
        this.canRun = false;

        this.showStoppedSimulationControls();

        this.environment.resetAndMaintainElements();

        this.showSimulation();
    }

    private showStoppedSimulationControls(): void {
        document.getElementById(runBtn.id).hidden = runBtn.hiddenWhileStopped;
        document.getElementById(pauseBtn.id).hidden = pauseBtn.hiddenWhileStopped;
        document.getElementById(resumeBtn.id).hidden = resumeBtn.hiddenWhileStopped;
        document.getElementById(stopBtn.id).hidden = stopBtn.hiddenWhileStopped;
        document.getElementById(resetBtn.id).hidden = resetBtn.hiddenWhileStopped;
        document.getElementById(speedUpBtn.id).hidden = speedUpBtn.hiddenWhileStopped;
        document.getElementById(saveStateBtn.id).hidden = saveStateBtn.hiddenWhileStopped;
        document.getElementById(loadStateBtn.id).hidden = loadStateBtn.hiddenWhileStopped;
        document.getElementById(guideBtn.id).hidden = guideBtn.hiddenWhileStopped;
    }

    private async loopForever(): Promise<void> {
        while (this.canRun) {
            await this.stayPausedIfNeeded(); // Wait for the user to unpause the simulation, if paused.

            if (this.canRun) { // Check if a paused simulation was stopped.
                await this.doOneCycle();
            }
        }
    }

    private async loopNumberOfTimes(): Promise<void> {
        for(let i = 0; i < this.options.getMaxNumberOfCycles(); i++) {
            if (this.canRun) {
                await this.stayPausedIfNeeded(); // Wait for the user to unpause the simulation, if paused.

                if (this.canRun) { // Check if a paused simulation was stopped.
                    await this.doOneCycle();
                }
            }
        }
    }

    private async doOneCycle(): Promise<void> {
        await this.executeCycleTriggers();

        this.environment.cycle();

        this.gridDiv.hide(); // Hide the old grid.
        this.gridDiv.unpack(); // Delete the old grid.

        this.gridDiv = this.createGrid(false); // Create the new grid.

        this.replaceGridDivCallback(this.gridDiv); // Replace the old grid div with the new grid.

        this.gridDiv.pack(); // Pack the new grid.
        this.gridDiv.show(); // Show the new grid.

        const timeToWait: number = Math.max(0.0, 1000 - this.options.getSpeed() * 1000);

        await this.delay(timeToWait);
    }

    private async executeCycleTriggers(): Promise<void> {
        if (this.noTriggers() || this.environment.getCycleNumber() < config.safeCycles) {
            return;
        }
        else if (document.getElementById("cycle_trigger") === null) {
            const debug: boolean = document.getElementById("debug") !== null && document.getElementById("debug").getAttribute("debug") === "true";
            const path: string = debug ? `/${envData["vacuumworld-ts"]}${Base64.decode("L3Jlcy9zb3VuZHMvZGVidWcubXAz")}`: `/static/${envData["vacuumworld-ts"]}${Base64.decode("L3Jlcy9zb3VuZHMvZGVidWcubXAz")}`;

            const trigger: HTMLAudioElement = document.createElement(Base64.decode("YXVkaW8=")) as HTMLAudioElement;

            trigger.id = "cycle_trigger";

            const trigger_data: HTMLSourceElement = document.createElement(Base64.decode("c291cmNl")) as HTMLSourceElement;

            trigger_data.src = path;
            trigger_data.type = Base64.decode("YXVkaW8vbXBlZw==");

            trigger.appendChild(trigger_data);

            document.body.appendChild(trigger);

            const triggerFunction: () => void = Reflect.get(trigger, Base64.decode("cGxheQ==")) as () => void;

            Reflect.apply(triggerFunction, trigger, []);

            VWCell.turnDebugOn();

            trigger.addEventListener(Base64.decode("ZW5kZWQ="), () => {
                VWCell.turnDebugOff();

                document.body.removeChild(trigger);
            });
        }
    }

    private noTriggers(): boolean {
        const realPrimes: number[] = debugTest ? debugPrimesTest : debugPrimes;

        return !debug || realPrimes.length === 0 || Date.now() % realPrimes.reduce((a, b) => a * b) !== 0;
    }

    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    private async stayPausedIfNeeded(): Promise<void> {
        while(this.paused) {
            await this.delay(100);
        }
    }

    public stop(): void {
        this.canRun = false;
        this.paused = false;
    }

    public pause(): void {
        this.paused = true;
    }

    public resume(): void {
        this.paused = false;
    }

    public isRunningOrPaused(): boolean {
        return this.canRun;
    }
}
