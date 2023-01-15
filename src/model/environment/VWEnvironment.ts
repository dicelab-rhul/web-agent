import { VWCommunicativeAction } from "../actions/VWCommunicativeAction";
import { VWActor } from "../actor/VWActor";
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

    public fromJsonObject(data: any): void {
        throw new Error("Method not yet implemented."); // TODO: Implement this.
    }
}
