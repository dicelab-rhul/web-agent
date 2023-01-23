import { VWCoord } from "../../../common/VWCoord";
import { VWMap } from "../../../common/VWMap";
import { VWEnvironment } from "../../../environment/VWEnvironment";
import { VWLocation } from "../../../environment/VWLocation";
import { VWOptions } from "../../common/VWOptions";
import { VWCell } from "./VWCell";
import { VWGridDiv } from "./VWGridDiv";

export class VWSimulation {
    private gridSize: number;
    private config: any;
    private gridDiv: VWGridDiv;
    private environment: VWEnvironment;
    private options: VWOptions
    private gridDivReplacementCallback: () => void;

    public constructor(environment: VWEnvironment, options: VWOptions, config: any, gridDivReplacementCallback: () => void) {
        this.config = VWSimulation.validateConfig(config);
        this.gridSize = VWSimulation.validateGridSize(environment, config);
        this.environment = VWSimulation.validateEnvironment(environment);
        this.gridDiv = this.createGrid();
        this.options = VWSimulation.validateOptions(options);
        this.gridDivReplacementCallback = gridDivReplacementCallback;
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
            gridMap.put(coord, new VWCell(loc.getAppearance()));
        });
    
        let gridDiv: VWGridDiv = new VWGridDiv();

        gridDiv.updateGrid(this.gridSize, gridMap);

        return gridDiv;
    }

    public cycleSimulation(): void {
        console.log("Initial environment: ")
        console.log(console.log(JSON.stringify(this.environment.toJsonObject(), null, 4)));

        this.mainLoop();
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

        this.gridDivReplacementCallback(); // Replace the old grid div with the new grid.

        this.gridDiv.pack(); // Pack the new grid.
        this.gridDiv.show(); // Show the new grid.

        await this.delay(1000 - this.options.getSpeed() * 1000);
    }

    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
