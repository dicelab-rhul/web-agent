import { VWActorAppearance } from "../actor/appearance/VWActorAppearance";
import { VWAppearance } from "../common/VWAppearance";
import { JOptional } from "../common/JOptional";
import { VWCoord } from "../common/VWCoord";
import { VWOrientation } from "../common/VWOrientation";
import { VWDirtAppearance } from "../dirt/VWDirtAppearance";
import { VWExistenceChecker } from "../utils/VWExistenceChecker";

export class VWLocationAppearance implements VWAppearance {
    private coord: VWCoord;
    private actorAppearance: JOptional<VWActorAppearance>;
    private dirtAppearance: JOptional<VWDirtAppearance>;
    private wall: Map<VWOrientation, boolean>;

    public constructor(coord: VWCoord, wall: Map<VWOrientation, boolean>, actorAppearance?: VWActorAppearance, dirtAppearance?: VWDirtAppearance) {
        this.coord = VWExistenceChecker.validateExistence(coord, "The coordinates cannot be null or undefined.");
        this.wall = VWLocationAppearance.validateWall(wall);
        this.actorAppearance = JOptional.ofNullable(actorAppearance);
        this.dirtAppearance = JOptional.ofNullable(dirtAppearance);
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

    public getID(): string {
        return this.coord.toString();
    }

    public getCoord(): VWCoord {
        return this.coord;
    }

    public hasActor(): boolean {
        return this.actorAppearance.isPresent();
    }

    public hasCleaningAgent(): boolean {
        return this.actorAppearance.isPresent() && this.actorAppearance.orElseThrow().belongsToCleaningAgent();
    }

    public hasUser(): boolean {
        return this.actorAppearance.isPresent() && this.actorAppearance.orElseThrow().belongsToUser();
    }

    public getActorAppearance(): JOptional<VWActorAppearance> {
        return this.actorAppearance;
    }

    public hasDirt(): boolean {
        return this.dirtAppearance.isPresent();
    }

    public getDirtAppearance(): JOptional<VWDirtAppearance> {
        return this.dirtAppearance;
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
}
