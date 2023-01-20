import { VWCoord } from "../common/VWCoord";
import { VWMap } from "../common/VWMap";
import { VWEnvironment } from "../environment/VWEnvironment";
import { VWLocation } from "../environment/VWLocation";
import { VWLocationAppearance } from "../environment/VWLocationAppearance";
import { VWCell } from "./VWCell";
import { VWGrid } from "./VWGrid";

export class VWSimulationGUI {
    private gridSize: number;
    private config: any;
    private grid: VWGrid;
    private environment: VWEnvironment;

    public constructor(environment: VWEnvironment, config: any) {
        this.config = VWSimulationGUI.validateConfig(config);
        this.gridSize = VWSimulationGUI.validateGridSize(environment, config);
        this.environment = VWSimulationGUI.validateEnvironment(environment);
        this.grid = this.createGrid();
    }

    public pack(): void {
        this.grid.pack();
    }

    public show(): void {
        if (document.getElementById("initial_view_div").firstChild !== null) {
            document.getElementById("initial_view_div").removeChild(document.getElementById("initial_view_div").firstChild);
            document.getElementById("initial_view_div").hidden = true;
        }

        if (document.getElementById("start_button") !== null) {
            document.getElementById("initial_view_buttons_div").removeChild(document.getElementById("start_button"));
        }

        if (document.getElementById("options_button") !== null) {
            document.getElementById("initial_view_buttons_div").removeChild(document.getElementById("options_button"));
        }

        if (document.getElementById("guide_button") !== null) {
            document.getElementById("initial_view_buttons_div").removeChild(document.getElementById("guide_button"));
        }

        document.getElementById("initial_view_buttons_div").hidden = true;

        this.grid.show();
    }

    public unpack(): void {
        this.grid.unpack();

        document.getElementById("grid_div").removeChild(document.getElementById("grid_div").firstChild);
    }

    private static validateConfig(config: any): any {
        if (config === null || config === undefined) {
            throw new Error("Cannot create a simulation GUI without a config.");
        }
        else {
            return config;
        }
    }

    private static validateGridSize(environment: VWEnvironment, config: any): number {
        VWSimulationGUI.validateEnvironment(environment);
        VWSimulationGUI.validateConfig(config);

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
            throw new Error("Cannot create a simulation GUI without an environment.");
        }
        else {
            return environment;
        }
    }

    // TODO: this is just a test method.
    private createEmptyGrid(gridSize: number) {
        let gridMap: VWMap<VWCoord, VWCell> = new VWMap<VWCoord, VWCell>();

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const coord: VWCoord = new VWCoord(BigInt(i), BigInt(j));
                const locApp: VWLocationAppearance = new VWLocationAppearance(coord, VWLocation.generateWallFromCoordAndGridSize(coord, BigInt(gridSize)));

                gridMap.put(coord, new VWCell(locApp));
            }
        }

        return new VWGrid(gridSize, gridMap);
    }

    private createGrid(): VWGrid {
        let gridMap: VWMap<VWCoord, VWCell> = new VWMap<VWCoord, VWCell>();

        this.environment.getAmbient().getGrid().forEach((loc: VWLocation, coord: VWCoord) => {
            gridMap.put(coord, new VWCell(loc.getAppearance()));
        });
    
        return new VWGrid(this.gridSize, gridMap);
    }

    public reset(newEnvironment: VWEnvironment, newConfig: any): void {
        // TODO: implement this method.
    }

    public cycleSimulation(): void {
        console.log("Initial environment: ")
        console.log(this.environment.getAmbient().getGrid());

        let i = 10;
        while (i > 0) { // TODO: add a real condition to stop the simulation.
            this.environment.cycle();

            this.unpack(); // Delete the old grid.

            this.grid = this.createGrid(); // Create the new grid.

            this.pack(); // Create the new grid.
            this.show(); // Show the new grid.

            console.log("Cycle: " + this.environment.getCycleNumber() + ".")
            console.log("Environment: ")
            console.log(this.environment.getAmbient().getGrid());
            i--;

            (async () => await this.delay(1000))(); // TODO: use the `speed` option to set the delay.
        }
    }

    private delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
    
}
