import { VWActor } from "../actor/VWActor";
import { JOptional } from "../common/JOptional";
import { VWColour } from "../common/VWColour";
import { VWCoord } from "../common/VWCoord";
import { VWOrientation } from "../common/VWOrientation";
import { VWDirt } from "../dirt/VWDirt";
import { VWLocationAppearance } from "./VWLocationAppearance";

export class VWLocation {
    private coord: VWCoord;
    private actor: JOptional<VWActor>;
    private dirt: JOptional<VWDirt>;
    private wall: Map<VWOrientation, boolean>;

    public constructor(coord: VWCoord, wall: Map<VWOrientation, boolean>, actor?: VWActor, dirt?: VWDirt) {
        this.coord = this.validateCoord(coord);
        this.wall = this.validateWall(wall);
        this.actor = JOptional.ofNullable(actor);
        this.dirt = JOptional.ofNullable(dirt);
    }

    private validateCoord(coord: VWCoord): VWCoord {
        if (coord == null || coord == undefined) {
            throw new Error("The coordinates cannot be null or undefined.");
        }

        return coord;
    }

    private validateWall(wall: Map<VWOrientation, boolean>): Map<VWOrientation, boolean> {
        if (wall == null || wall == undefined) {
            throw new Error("The wall cannot be null or undefined.");
        }
        else if (wall.size != 4) {
            throw new Error("The wall must have 4 sides.");
        }
        else if (!wall.has(VWOrientation.NORTH) || !wall.has(VWOrientation.EAST) || !wall.has(VWOrientation.SOUTH) || !wall.has(VWOrientation.WEST)) {
            throw new Error("The wall must have 4 sides.");
        }
        else {
            return wall;
        }
    }

    public hasActor(): boolean {
        return this.actor.isPresent();
    }

    public hasCleaningAgent(): boolean {
        return this.actor.isPresent() && this.actor.orElseThrow().getAppearance().getColour() !== VWColour.USER;
    }

    public hasUser(): boolean {
        return this.actor.isPresent() && this.actor.orElseThrow().getAppearance().getColour() === VWColour.USER;
    }

    public getActor(): JOptional<VWActor> {
        return this.actor;
    }

    public addActor(actor: VWActor): void {
        if (this.hasActor()) {
            throw new Error("There is already an actor in this location.");
        }
        else if (actor == null || actor == undefined) {
            throw new Error("The actor cannot be null or undefined.");
        }
        else {
            this.actor = JOptional.of(actor);
        }
    }

    public removeActor(): void {
        if (!this.hasActor()) {
            throw new Error("There is no actor in this location.");
        }
        else {
            this.actor = JOptional.empty();
        }
    }

    public hasDirt(): boolean {
        return this.dirt.isPresent();
    }

    public getDirt(): JOptional<VWDirt> {
        return this.dirt;
    }

    public addDirt(dirt: VWDirt): void {
        if (this.hasDirt()) {
            throw new Error("There is already a dirt in this location.");
        }
        else if (dirt == null || dirt == undefined) {
            throw new Error("The dirt cannot be null or undefined.");
        }
        else {
            this.dirt = JOptional.of(dirt);
        }
    }

    public removeDirt(): void {
        if (!this.hasDirt()) {
            throw new Error("There is no dirt in this location.");
        }
        else {
            this.dirt = JOptional.empty();
        }
    }

    public getCoord(): VWCoord {
        return this.coord;
    }

    public getWall(): Map<VWOrientation, boolean> {
        return this.wall;
    }

    public hasWallOn(orientation: VWOrientation): boolean {
        return this.wall.get(orientation)!;
    }

    public hasWallOnNorth(): boolean {
        return this.hasWallOn(VWOrientation.NORTH);
    }

    public hasWallOnEast(): boolean {
        return this.hasWallOn(VWOrientation.EAST);
    }

    public hasWallOnSouth(): boolean {
        return this.hasWallOn(VWOrientation.SOUTH);
    }

    public hasWallOnWest(): boolean {
        return this.hasWallOn(VWOrientation.WEST);
    }

    public getAppearance(): VWLocationAppearance {
        if (this.hasActor() && this.hasDirt()) {
            return new VWLocationAppearance(this.coord, this.wall, this.getActor().orElseThrow().getAppearance(), this.getDirt().orElseThrow().getAppearance());
        }
        else if (this.hasActor()) {
            return new VWLocationAppearance(this.coord, this.wall, this.getActor().orElseThrow().getAppearance(), undefined);
        }
        else if (this.hasDirt()) {
            return new VWLocationAppearance(this.coord, this.wall, undefined, this.getDirt().orElseThrow().getAppearance());
        }
        else {
            return new VWLocationAppearance(this.coord, this.wall);
        }
    }
}