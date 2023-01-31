import { VWActor, VWActorJSON } from "../actor/VWActor";
import { JOptional } from "../common/JOptional";
import { VWCoord, VWCoordJSON } from "../common/VWCoord";
import { VWOrientation } from "../common/VWOrientation";
import { VWDirt, VWDirtJSON } from "../dirt/VWDirt";
import { VWActorFactory } from "../actor/factories/VWActorFactory";
import { VWLocationAppearance } from "./VWLocationAppearance";
import { VWExistenceChecker } from "../utils/VWExistenceChecker";
import { VWUserDifficulty } from "../common/VWUserDifficulty";

export type VWWallJSON = {
    north: boolean;
    east: boolean;
    south: boolean;
    west: boolean;
}

export type VWLocationJSON = {
    coord: VWCoordJSON;
    wall: VWWallJSON;
    actor?: VWActorJSON;
    dirt?: VWDirtJSON;
}

export class VWLocation {
    private coord: VWCoord;
    private actor: JOptional<VWActor>;
    private dirt: JOptional<VWDirt>;
    private wall: Map<VWOrientation, boolean>;

    public constructor(coord: VWCoord, wall: Map<VWOrientation, boolean>, actor?: VWActor, dirt?: VWDirt) {
        this.coord = VWExistenceChecker.validateExistence(coord, "The coordinates cannot be null or undefined.");
        this.wall = VWLocation.validateWall(wall);
        this.actor = JOptional.ofNullable(actor);
        this.dirt = JOptional.ofNullable(dirt);
    }

    private static validateWall(wall: Map<VWOrientation, boolean>): Map<VWOrientation, boolean> {
        if (!VWExistenceChecker.allArgumentsExist(wall)) {
            throw new Error("The wall cannot be null or undefined.");
        }
        else if (wall.size !== 4) {
            throw new Error("The wall must have 4 sides.");
        }
        else if (Object.values(VWOrientation).some(orientation => !wall.has(orientation))) {
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
        return this.actor.isPresent() && this.actor.orElseThrow().isCleaningAgent();
    }

    public hasUser(): boolean {
        return this.actor.isPresent() && this.actor.orElseThrow().isUser();
    }

    public getActor(): JOptional<VWActor> {
        return this.actor;
    }

    public addActor(actor: VWActor): void {
        if (this.hasActor()) {
            throw new Error("There is already an actor in this location.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(actor)) {
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

    public removeActorIfPresent(): void {
        if (this.hasActor()) {
            this.removeActor();
        }
    }

    public popActor(): JOptional<VWActor> {
        const actor: JOptional<VWActor> = this.getActor();

        if (actor.isPresent()) {
            this.removeActor();
        }

        return actor;
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
        else if (!VWExistenceChecker.allArgumentsExist(dirt)) {
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

    public removeDirtIfPresent(): void {
        if (this.hasDirt()) {
            this.removeDirt();
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

    public toJsonObject(actorMindCorePath?: string): VWLocationJSON {
        const data: VWLocationJSON = {
            "coord": this.coord.toJsonObject(),
            "wall": {
                "north": this.hasWallOnNorth(),
                "east": this.hasWallOnEast(),
                "south": this.hasWallOnSouth(),
                "west": this.hasWallOnWest()
            }
        };

        if (this.hasActor()) {
            data["actor"] = this.getActor().orElseThrow().toJsonObject(actorMindCorePath);
        }

        if (this.hasDirt()) {
            data["dirt"] = this.getDirt().orElseThrow().toJsonObject();
        }

        return data;
    }

    public static fromJsonObject(data: VWLocationJSON, userDifficulty: VWUserDifficulty): VWLocation {
        if (!VWExistenceChecker.allArgumentsExist(data)) {
            throw new Error("The JSON representation of a `VWLocation` cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(data["wall"])) {
            throw new Error("The JSON representation of a `VWLocation` must have a `wall` property.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(data["coord"])) {
            throw new Error("The JSON representation of a `VWLocation` must have a `coord` property.");
        }
        else {
            return VWLocation.fromJsonObjectHelper(VWCoord.fromJsonObject(data["coord"]), data["wall"], data["actor"], data["dirt"], userDifficulty);
        }
    }

    private static fromJsonObjectHelper(coord: VWCoord, wallData: VWWallJSON, actorData: VWActorJSON, dirtData: VWDirtJSON, userDifficulty: VWUserDifficulty): VWLocation {
        const wall: Map<VWOrientation, boolean> = VWLocation.constructWallFromData(wallData);
        const actor: JOptional<VWActor> = !VWExistenceChecker.allArgumentsExist(actorData) ? JOptional.empty() : JOptional.of(VWActorFactory.createVWActorFromJSONObject(actorData, userDifficulty));
        const dirt: JOptional<VWDirt> = !VWExistenceChecker.allArgumentsExist(dirtData) ? JOptional.empty() : JOptional.of(VWDirt.fromJsonObject(dirtData));

        if (actor.isPresent() && dirt.isPresent()) {
            return new VWLocation(coord, wall, actor.orElseThrow(), dirt.orElseThrow());
        }
        else if (actor.isPresent()) {
            return new VWLocation(coord, wall, actor.orElseThrow(), undefined);
        }
        else if (dirt.isPresent()) {
            return new VWLocation(coord, wall, undefined, dirt.orElseThrow());
        }
        else {
            return new VWLocation(coord, wall);
        }
    }

    private static constructWallFromData(wallData: VWWallJSON): Map<VWOrientation, boolean> {
        const wall: Map<VWOrientation, boolean> = new Map<VWOrientation, boolean>();

        if (!VWExistenceChecker.allArgumentsExist(wallData)) {
            throw new Error("The wall cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(wallData["north"])) {
            throw new Error("The wall must have a `north` property.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(wallData["east"])) {
            throw new Error("The wall must have an `east` property.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(wallData["south"])) {
            throw new Error("The wall must have a `south` property.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(wallData["west"])) {
            throw new Error("The wall must have a `west` property.");
        }
        else {
            wall.set(VWOrientation.NORTH, wallData["north"]);
            wall.set(VWOrientation.EAST, wallData["east"]);
            wall.set(VWOrientation.SOUTH, wallData["south"]);
            wall.set(VWOrientation.WEST, wallData["west"]);

            return wall;
        }
    }

    public static generateWallFromCoordAndGridSize(coord: VWCoord, gridSize: bigint): Map<VWOrientation, boolean> {
        const wall: Map<VWOrientation, boolean> = new Map<VWOrientation, boolean>();

        wall.set(VWOrientation.NORTH, coord.getY() === 0n);
        wall.set(VWOrientation.EAST, coord.getX() === BigInt(gridSize) - 1n);
        wall.set(VWOrientation.SOUTH, coord.getY() === BigInt(gridSize) - 1n);
        wall.set(VWOrientation.WEST, coord.getX() === 0n);

        return wall;
    }
}
