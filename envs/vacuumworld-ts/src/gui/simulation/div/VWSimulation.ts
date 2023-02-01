import { VWActorFactory } from "../../../model/actor/factories/VWActorFactory";
import { VWColour } from "../../../model/common/VWColour";
import { VWCoord } from "../../../model/common/VWCoord";
import { VWDirection } from "../../../model/common/VWDirection";
import { VWMap } from "../../../model/common/VWMap";
import { VWDirt } from "../../../model/dirt/VWDirt";
import { VWEnvironment } from "../../../model/environment/VWEnvironment";
import { VWLocation } from "../../../model/environment/VWLocation";
import { VWLocationAppearance } from "../../../model/environment/VWLocationAppearance";
import { VWExistenceChecker } from "../../../model/utils/VWExistenceChecker";
import { VWOptions } from "../../common/VWOptions";
import { VWCell } from "./VWCell";
import { VWGridDiv } from "./VWGridDiv";

export class VWSimulation {
    private gridSize: number;
    private config: any;
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

    public constructor(environment: VWEnvironment, options: VWOptions, config: any) {
        this.config = VWExistenceChecker.validateExistence(config, "Cannot create a simulation without a config.");
        this.gridSize = VWSimulation.validateGridSize(environment, config);
        this.environment = VWExistenceChecker.validateExistence(environment, "Cannot create a simulation without an environment.");
        this.gridDiv = this.createGrid(true);
        this.options = VWExistenceChecker.validateExistence(options, "Cannot create a simulation without options.");
        this.canRun = true;
        this.paused = false;
    }

    public setCallbacks(gridRepl: (g: VWGridDiv) => void, dragHide: () => void, dragReplace: (s: number) => void, simCtrlHide: () => void, simCtrlReplace: (s: number) => void): void {
        this.replaceGridDivCallback = gridRepl;
        this.replaceDraggableBodiesDivCallback = dragReplace;
        this.hideDraggableBodiesDivCallback = dragHide;
        this.hideSimulationControlsDivCallback = simCtrlHide;
        this.replaceSimulationControlsDivCallback = simCtrlReplace;
    }

    public getGridDiv(): VWGridDiv {
        return this.gridDiv;
    }

    public getEnvironment(): VWEnvironment {
        return this.environment;
    }

    public getConfig(): any {
        return this.config;
    }

    private static validateGridSize(environment: VWEnvironment, config: any): number {
        VWExistenceChecker.validateExistence(environment, "Cannot create a simulation without an environment.");
        VWExistenceChecker.validateExistence(config, "Cannot create a simulation without a config.");

        if (!VWExistenceChecker.allArgumentsExist(config["min_environment_dim"]) || config["min_environment_dim"] <= 0) {
            throw new Error("The config must have a `min_environment_dim` key.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(config["max_environment_dim"]) || config["max_environment_dim"] <= 0) {
            throw new Error("The config must have a `max_environment_dim` key.");
        }
        else if (config["min_environment_dim"] > config["max_environment_dim"]) {
            throw new Error("Invalid config: the value of `max_environment_dim` must be greater or equal to the value of `min_environment_dim`.");
        }
        else if (environment.getGridSize() < config["min_environment_dim"] || environment.getGridSize() > config["max_environment_dim"]) {
            throw new Error(`The grid size must be between ${config["min_environment_dim"]} and ${config["max_environment_dim"]} (inclusive).`);
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
                cell.addCallbacks(this.dropCallback.bind(this), this.rotateCallback.bind(this), this.doubleClickCallback.bind(this));
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
        document.getElementById("external_run_button").hidden = false;
        document.getElementById("external_pause_button").hidden = true;
        document.getElementById("external_resume_button").hidden = true;
        document.getElementById("external_stop_button").hidden = true;
        document.getElementById("external_reset_button").hidden = false;
        document.getElementById("external_speed_button").hidden = true;
        document.getElementById("external_save_button").hidden = false;
        document.getElementById("external_load_button").hidden = false;
        document.getElementById("external_guide_button").hidden = false;
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
        this.environment.cycle();

        this.gridDiv.hide(); // Hide the old grid.
        this.gridDiv.unpack(); // Delete the old grid.

        this.gridDiv = this.createGrid(false); // Create the new grid.

        this.replaceGridDivCallback(this.gridDiv); // Replace the old grid div with the new grid.

        this.gridDiv.pack(); // Pack the new grid.
        this.gridDiv.show(); // Show the new grid.

        await this.delay(1000 - this.options.getSpeed() * 1000);
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
}
