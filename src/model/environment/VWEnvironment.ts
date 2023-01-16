import { VWCommunicativeAction } from "../actions/VWCommunicativeAction";
import { VWActor } from "../actor/VWActor";
import { VWMindCore } from "../actor/mind/core/VWMindCore";
import { JOptional } from "../common/JOptional";
import { VWCoord } from "../common/VWCoord";
import { VWDirection } from "../common/VWDirection";
import { VWDirt } from "../dirt/VWDirt";
import { VWAmbient } from "./VWAmbient";
import { VWLocation } from "./VWLocation";

export class VWEnvironment {
    private ambient: VWAmbient;
    private cycleNumber: number;

    public constructor(ambient: VWAmbient) {
        this.ambient = VWEnvironment.validateAmbient(ambient);
        this.cycleNumber = 0;
    }

    private static validateAmbient(ambient: VWAmbient): VWAmbient {
        if (ambient == null || ambient == undefined) {
            throw new Error("The ambient cannot be null or undefined.");
        }
        else {
            return ambient;
        }
    }

    public getAmbient(): VWAmbient {
        return this.ambient;
    }

    public getCycleNumber(): number {
        return this.cycleNumber;
    }

    public resetCycleNumber(): void {
        this.cycleNumber = 0;
    }

    public getLocation(coord: VWCoord): JOptional<VWLocation> {
        return this.ambient.getLocation(coord);
    }

    public getActorsIDs(): string[] {
        return this.ambient.getActorsIDs();
    }

    public getActorByID(id: string): JOptional<VWActor> {
        return this.ambient.getActorByID(id);
    }

    public getActorByCoord(coord: VWCoord): JOptional<VWActor> {
        return this.ambient.getActorByCoord(coord);
    }

    public getActorCoordByID(id: string): JOptional<VWCoord> {
        return this.ambient.getActorCoordByID(id);
    }

    public addActorToLocation(coord: VWCoord, actor: VWActor): void {
        this.ambient.addActorToLocation(coord, actor);
    }

    public moveActor(from: VWCoord, to: VWCoord): void {
        this.ambient.moveActor(from, to);
    }

    public turnActor(coord: VWCoord, direction: VWDirection): void {
        this.ambient.turnActor(coord, direction);
    }

    public getDirtsIDs(): string[] {
        return this.ambient.getDirtsIDs();
    }

    public getDirtByID(id: string): JOptional<VWDirt> {
        return this.ambient.getDirtByID(id);
    }

    public getDirtByCoord(coord: VWCoord): JOptional<VWDirt> {
        return this.ambient.getDirtByCoord(coord);
    }

    public getDirtCoordByID(id: string): JOptional<VWCoord> {
        return this.ambient.getDirtCoordByID(id);
    }

    public cleanDirtByCoord(coord: VWCoord): void {
        this.ambient.cleanDirtByCoord(coord);
    }

    public addDirtToLocation(coord: VWCoord, dirt: VWDirt): void {
        this.ambient.addDirtToLocation(coord, dirt);
    }

    public cycle(): void {
        if (this.cycleNumber == 0) {
            this.forceInitialPerceptionToActors();
        }

        this.cycleActors();

        this.cycleNumber++;
    }

    private forceInitialPerceptionToActors(): void {
        throw new Error("Method not yet implemented."); // TODO: Implement this.
    }

    private cycleActors(): void {
        this.ambient.getActors().forEach((actor: VWActor) => this.cycleActor(actor));
    }

    private cycleActor(actor: VWActor): void {
        actor.cycle();

        this.executeActorActions(actor);
    }

    private executeActorActions(actor: VWActor): void {
        throw new Error("Method not yet implemented."); // TODO: Implement this.
    }

    public sendMessageToRecipients(action: VWCommunicativeAction): boolean {
        throw new Error("Method not yet implemented."); // TODO: Implement this.
    }

    public toJsonObject(): object {
        return {
            "locations": this.serialiseLocations()
        }
    }

    private serialiseLocations(): object[] {
        let locations: object[] = [];

        for (let location of this.ambient.getGrid().values()) {
            locations.push(this.serialiseLocation(location));
        }

        return locations;
    }

    private serialiseLocation(location: VWLocation): object {
        if (location == null || location == undefined) {
            throw new Error("The location cannot be null or undefined.");
        }
        else if (!location.hasActor()) {
            return location.toJsonObject();
        }
        else {
            const actorMindCorePath: string = this.getActorMindCorePath(location.getActor().orElseThrow().getMind().getMindCore());

            return location.toJsonObject(actorMindCorePath);
        }
    }

    private getActorMindCorePath(mindCore: VWMindCore): string {
        throw new Error("Method not yet implemented."); // TODO: Implement this.
    }

    public fromJsonObject(data: object, config: object): VWEnvironment {
        if (data == null || data == undefined) {
            throw new Error("The data cannot be null or undefined.");
        }
        else if (data["locations"] == null || data["locations"] == undefined) {
            throw new Error("The data must contain a 'locations' property.");
        }
        else if (!Array.isArray(data["locations"])) {
            throw new Error("The 'locations' property must be an array.");
        }
        else if (data["locations"].some((location: object) => location == null || location == undefined)) {
            throw new Error("The 'locations' array cannot contain null or undefined values.");
        }
        else if (config == null || config == undefined) {
            throw new Error("The config cannot be null or undefined.");
        }
        else {
            return this.fromJsonObjectHelper(data, config);
        }
    }

    private fromJsonObjectHelper(data: object, config: object): VWEnvironment {
        const grid: Map<VWCoord, VWLocation> = this.loadLocations(data["locations"]);

        VWEnvironment.validateGrid(grid, config);

        return new VWEnvironment(new VWAmbient(grid));
    }

    private loadLocations(locations: object[]): Map<VWCoord, VWLocation> {
        const grid: Map<VWCoord, VWLocation> = new Map<VWCoord, VWLocation>();

        for (const location of locations) {
            if (location["coord"] == null || location["coord"] == undefined) {
                throw new Error("The location coordinates cannot be null or undefined.");
            }
            else {
                grid.set(VWCoord.fromString(location["coord"]), VWLocation.fromJsonObject(location));
            }
        }

        return grid;
    }

    private static validateGrid(grid: Map<VWCoord, VWLocation>, config: object): void {
        if (grid == null || grid == undefined) {
            throw new Error("The grid cannot be null or undefined.");
        }
        else if (config == null || config == undefined) {
            throw new Error("The config cannot be null or undefined.");
        }
        else if (config["min_environment_dim"] == null || config["min_environment_dim"] == undefined) {
            throw new Error("The config must contain a 'min_environment_dim' property.");
        }
        else if (config["max_environment_dim"] == null || config["max_environment_dim"] == undefined) {
            throw new Error("The config must contain a 'max_environment_dim' property.");
        }
        else {
            VWEnvironment.validateGridHelper(grid, config);
        }
    }

    private static validateGridHelper(grid: Map<VWCoord, VWLocation>, config: object): void {
        const gridSize: number = Math.sqrt(grid.size);

        VWEnvironment.validateGridSize(gridSize, config);
    }

    private static validateGridSize(gridSize: number, config: object): void {
        const gridSizeInt: number = Math.floor(gridSize);

        if (gridSize != gridSizeInt) {
            throw new Error("The grid must be a square.");
        }
        else if (gridSize < config["min_environment_dim"]) {
            throw new Error(`The grid size is too small (min: "${config["min_environment_dim"]}").`);
        }
        else if (gridSize > config["max_environment_dim"]) {
            throw new Error(`The grid size is too big (max: "${config["max_environment_dim"]}").`);
        }
    }

    public static newEmptyVWEnvironment(config: object, gridSize?: bigint): VWEnvironment {
        if (config == null || config == undefined) {
            throw new Error("The config cannot be null or undefined.");
        }
        else {
            return VWEnvironment.newEmptyVWEnvironmentHelper(config, gridSize);
        }
    }

    private static newEmptyVWEnvironmentHelper(config: object, gridSize?: bigint): VWEnvironment {
        const realGridSize: bigint = gridSize == null || gridSize == undefined ? BigInt(config["initial_environment_dim"]) : gridSize;

        VWEnvironment.validateGridSize(Number(realGridSize), config);

        const grid: Map<VWCoord, VWLocation> = new Map<VWCoord, VWLocation>();

        for (let x = 0n; x < realGridSize; x++) {
            for (let y = 0n; y < realGridSize; y++) {
                const coord: VWCoord = new VWCoord(x, y);

                grid.set(coord, new VWLocation(coord, VWLocation.generateWallFromCoordAndGridSize(coord, realGridSize)));
            }
        }

        return new VWEnvironment(new VWAmbient(grid));
    }
}
