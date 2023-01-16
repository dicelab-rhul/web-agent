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

    public constructor(ambient: VWAmbient) {
        this.ambient = VWEnvironment.validateAmbient(ambient);
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
        throw new Error("Method not yet implemented."); // TODO: Implement this.
    }

    public static newEmptyVWEnvironment(gridSize: number): VWEnvironment {
        throw new Error("Method not yet implemented."); // TODO: Implement this.
    }
}
