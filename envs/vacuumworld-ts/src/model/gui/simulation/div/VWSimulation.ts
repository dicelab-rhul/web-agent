import { VWActorFactory } from "../../../actor/factories/VWActorFactory";
import { VWColour } from "../../../common/VWColour";
import { VWCoord } from "../../../common/VWCoord";
import { VWDirection } from "../../../common/VWDirection";
import { VWMap } from "../../../common/VWMap";
import { VWDirt } from "../../../dirt/VWDirt";
import { VWEnvironment } from "../../../environment/VWEnvironment";
import { VWLocation } from "../../../environment/VWLocation";
import { VWLocationAppearance } from "../../../environment/VWLocationAppearance";
import { VWOptions } from "../../common/VWOptions";
import { VWCell } from "./VWCell";
import { VWDraggableBodiesDiv } from "./VWDraggableBodiesDiv";
import { VWGridDiv } from "./VWGridDiv";
import { VWSimulationControlsDiv } from "./VWSimulationControlsDiv";

export class VWSimulation {
    private gridSize: number;
    private config: any;
    private gridDiv: VWGridDiv;
    private environment: VWEnvironment;
    private options: VWOptions
    private replaceGridDivCallback: (newGridDiv: VWGridDiv) => void;
    private hideDraggableBodiesDivCallback: () => void;
    private replaceDraggableBodiesDivCallback: (newDraggableBodiesDiv: VWDraggableBodiesDiv) => void;
    private hideSimulationControlsDivCallback: () => void;
    private replaceSimulationControlsDivCallback: (newSimulationControlsDiv: VWSimulationControlsDiv) => void;

    public constructor(environment: VWEnvironment, options: VWOptions, config: any) {
        this.config = VWSimulation.validateConfig(config);
        this.gridSize = VWSimulation.validateGridSize(environment, config);
        this.environment = VWSimulation.validateEnvironment(environment);
        this.gridDiv = this.createGrid();
        this.options = VWSimulation.validateOptions(options);
    }

    public setCallbacks(gridRepl: (g: VWGridDiv) => void, dragHide: () => void, dragReplace: (d: VWDraggableBodiesDiv) => void, simCtrlHide: () => void, simCtrlReplace: (s: VWSimulationControlsDiv) => void): void {
        this.replaceGridDivCallback = gridRepl;
        this.replaceDraggableBodiesDivCallback = dragReplace;
        this.hideDraggableBodiesDivCallback = dragHide;
        this.hideSimulationControlsDivCallback = simCtrlHide;
        this.replaceSimulationControlsDivCallback = simCtrlReplace;
    }

    public getGridDiv(): VWGridDiv {
        return this.gridDiv;
    }

    private static validateConfig(config: any): any {
        if (config === null || config === undefined) {
            throw new Error("Cannot create a simulation without a config.");
        }
        else {
            return config;
        }
    }

    private static validateGridSize(environment: VWEnvironment, config: any): number {
        VWSimulation.validateEnvironment(environment);
        VWSimulation.validateConfig(config);

        // TODO: throw errors with more meaningful messages.
        if (config["min_environment_dim"] === null || config["min_environment_dim"] === undefined || config["min_environment_dim"] <= 0) {
            throw new Error("Invalid config.");
        }
        else if (config["max_environment_dim"] === null || config["max_environment_dim"] === undefined || config["max_environment_dim"] <= 0) {
            throw new Error("Invalid config.");
        }
        else if (config["min_environment_dim"] > config["max_environment_dim"]) {
            throw new Error("Invalid config.");
        }
        else if (environment.getGridSize() < config["min_environment_dim"] || environment.getGridSize() > config["max_environment_dim"]) {
            throw new Error("Invalid environment.");
        }
        else {
            return environment.getGridSize();
        }
    }

    private static validateEnvironment(environment: VWEnvironment): VWEnvironment {
        if (environment === null || environment === undefined) {
            throw new Error("Cannot create a simulation without an environment.");
        }
        else {
            return environment;
        }
    }

    private static validateOptions(options: VWOptions): VWOptions {
        if (options === null || options === undefined) {
            throw new Error("Cannot create a simulation without options.");
        }
        else {
            return options;
        }
    }

    private createGrid(): VWGridDiv {
        let gridMap: VWMap<VWCoord, VWCell> = new VWMap<VWCoord, VWCell>();

        this.environment.getAmbient().getGrid().forEach((loc: VWLocation, coord: VWCoord) => {
            gridMap.put(coord, new VWCell(loc.getAppearance(), this.dropCallback.bind(this), this.rotateCallback.bind(this), this.doubleClickCallback.bind(this)));
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
        this.gridDiv = this.createGrid(); // Create the new grid.

        this.replaceGridDivCallback(this.gridDiv); // Replace the old grid div with the new grid.

        this.gridDiv.pack(); // Pack the new grid.

        this.replaceDraggableBodiesDivCallback(new VWDraggableBodiesDiv(this.gridSize));

        this.gridDiv.show(); // Show the new grid.
    }

    public cycleSimulation(): void {
        this.validateCallbacks();

        console.log("Simulation starting...");
        console.log("Initial environment: ");
        console.log(console.log(JSON.stringify(this.environment.toJsonObject(), null, 4)));

        this.mainLoop();
    }

    private validateCallbacks(): void {
        if (this.replaceGridDivCallback === null || this.replaceGridDivCallback === undefined) {
            throw new Error("Cannot cycle the simulation without a callback to replace the grid div.");
        }
        else if (this.hideDraggableBodiesDivCallback === null || this.hideDraggableBodiesDivCallback === undefined) {
            throw new Error("Cannot cycle the simulation without a callback to hide the draggable bodies div.");
        }
        else if (this.hideSimulationControlsDivCallback === null || this.hideSimulationControlsDivCallback === undefined) {
            throw new Error("Cannot cycle the simulation without a callback to hide the simulation controls div.");
        }
        else if (this.replaceSimulationControlsDivCallback === null || this.replaceSimulationControlsDivCallback === undefined) {
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
    }

    private async loopForever(): Promise<void> {
        while (true) {
            await this.doOneCycle();
        }
    }

    private async loopNumberOfTimes(): Promise<void> {
        for(let i = 0; i < this.options.getMaxNumberOfCycles(); i++) {
            await this.doOneCycle();
        }
    }

    private async doOneCycle(): Promise<void> {
        this.environment.cycle();

        this.gridDiv.hide(); // Hide the old grid.
        this.gridDiv.unpack(); // Delete the old grid.

        this.gridDiv = this.createGrid(); // Create the new grid.

        this.replaceGridDivCallback(this.gridDiv); // Replace the old grid div with the new grid.

        this.gridDiv.pack(); // Pack the new grid.
        this.gridDiv.show(); // Show the new grid.

        await this.delay(1000 - this.options.getSpeed() * 1000);
    }

    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
