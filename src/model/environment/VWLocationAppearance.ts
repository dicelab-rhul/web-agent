import { VWActorAppearance } from "../actor/appearance/VWActorAppearance";
import { Appearance } from "../common/Appearance";
import { JOptional } from "../common/JOptional";
import { VWCoord } from "../common/VWCoord";
import { VWDirtAppearance } from "../dirt/VWDirtAppearance";

export class VWLocationAppearance implements Appearance {
    private coord: VWCoord;
    private actorAppearance: JOptional<VWActorAppearance>;
    private dirtAppearance: JOptional<VWDirtAppearance>;

    public constructor(coord: VWCoord, actorAppearance?: VWActorAppearance, dirtAppearance?: VWDirtAppearance) {
        this.coord = this.validateCoord(coord);
        this.actorAppearance = JOptional.ofNullable(actorAppearance);
        this.dirtAppearance = JOptional.ofNullable(dirtAppearance);
    }

    private validateCoord(coord: VWCoord): VWCoord {
        if (coord === null || coord === undefined) {
            throw new Error("The coordinates cannot be null or undefined.");
        }

        return coord;
    }

    public getID(): string {
        return this.coord.toString();
    }

    public getCoord(): VWCoord {
        return this.coord;
    }

    public getActorAppearance(): JOptional<VWActorAppearance> {
        return this.actorAppearance;
    }

    public getDirtAppearance(): JOptional<VWDirtAppearance> {
        return this.dirtAppearance;
    }
}
