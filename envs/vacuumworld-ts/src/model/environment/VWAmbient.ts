import { VWActor } from "../actor/VWActor";
import { VWCleaningAgent } from "../actor/VWCleaningAgent";
import { VWUser } from "../actor/VWUser";
import { JOptional } from "../common/JOptional";
import { VWCoord} from "../common/VWCoord";
import { VWDirection } from "../common/VWDirection";
import { VWMap } from "../common/VWMap";
import { VWDirt } from "../dirt/VWDirt";
import { VWExistenceChecker } from "../utils/VWExistenceChecker";
import { VWLocation } from "./VWLocation";

export class VWAmbient {
    private grid: VWMap<VWCoord, VWLocation>;

    public constructor(grid: VWMap<VWCoord, VWLocation>) {
        this.grid = VWExistenceChecker.validateExistence(grid, "The grid cannot be null or undefined.");
    }

    public getGridSize(): number {
        return Math.sqrt(this.grid.size());
    }

    public getGrid(): VWMap<VWCoord, VWLocation> {
        return this.grid;
    }

    public getLocation(coord: VWCoord): JOptional<VWLocation> {
        return JOptional.ofNullable(this.grid.get(coord));
    }

    public getActors(): VWActor[] {
        const actors: VWActor[] = [];

        for (const [_, location] of this.grid) {
            const actor = location.getActor();

            if (actor.isPresent()) {
                actors.push(actor.orElseThrow());
            }
        }

        return actors;
    }

    public getCleaningAgents(): VWCleaningAgent[] {
        const cleaningAgents: VWCleaningAgent[] = [];

        for (const [_, location] of this.grid) {
            const actor = location.getActor();

            if (actor.isPresent() && actor.orElseThrow().isCleaningAgent()) {
                cleaningAgents.push(actor.orElseThrow() as VWCleaningAgent);
            }
        }

        return cleaningAgents;
    }

    public getUsers(): VWUser[] {
        const users: VWUser[] = [];

        for (const [_, location] of this.grid) {
            const actor = location.getActor();

            if (actor.isPresent() && actor.orElseThrow().isUser()) {
                users.push(actor.orElseThrow() as VWUser);
            }
        }

        return users;
    }

    public getActorsIDs(): string[] {
        const actorIDs: string[] = [];

        for (let [_, location] of this.grid) {
            const actor = location.getActor();

            if (actor.isPresent()) {
                actorIDs.push(actor.orElseThrow().getID());
            }
        }

        return actorIDs;
    }

    public getActorsIDsExcept(id: string): string[] {
        const actorIDs: string[] = [];

        for (let [_, location] of this.grid) {
            const actor = location.getActor();

            if (actor.isPresent() && actor.orElseThrow().getID() !== id) {
                actorIDs.push(actor.orElseThrow().getID());
            }
        }

        return actorIDs;
    }

    public getActorByID(id: string): JOptional<VWActor> {
        for (let [_, location] of this.grid) {
            const actor = location.getActor();

            if (actor.isPresent() && actor.orElseThrow().getID() === id) {
                return actor;
            }
        }

        return JOptional.empty();
    }

    public getActorByCoord(coord: VWCoord): JOptional<VWActor> {
        return this.getLocation(coord).flatMap(location => location.getActor());
    }

    public getActorCoordByID(id: string): JOptional<VWCoord> {
        for (let [coord, location] of this.grid) {
            const actor = location.getActor();

            if (actor.isPresent() && actor.orElseThrow().getID() === id) {
                return JOptional.of(coord);
            }
        }

        return JOptional.empty();
    }

    public addActorToLocation(coord: VWCoord, actor: VWActor): void {
        if (!VWExistenceChecker.exists(coord)) {
            throw new Error("The coordinates of the location cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.exists(actor)) {
            throw new Error("The actor cannot be null or undefined.");
        }
        else if (this.getActorByCoord(coord).isPresent()) {
            throw new Error("There is already an actor at the location.");
        }
        else {
            this.getLocation(coord).ifPresent(location => location.addActor(actor));
        }
    }

    public popActorByCoord(coord: VWCoord): JOptional<VWActor> {
        return this.getLocation(coord).flatMap(location => location.popActor());
    }

    public moveActor(from: VWCoord, to: VWCoord): void {
        if (!VWExistenceChecker.exists(from)) {
            throw new Error("The coordinates of the origin location cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.exists(to)) {
            throw new Error("The coordinates of the destination location cannot be null or undefined.");
        }
        else if (from.equals(to)) {
            throw new Error("The destination location cannot be the same as the origin location.");
        }
        else if (!this.getActorByCoord(from).isPresent()) {
            throw new Error("There is no actor at the origin location.");
        }
        else if (this.getActorByCoord(to).isPresent()) {
            throw new Error("There is already an actor at the destination location.");
        }
        else {
            const actor = this.popActorByCoord(from).orElseThrow();
            const location = this.getLocation(to).orElseThrow();

            location.addActor(actor);
        }
    }

    public turnActor(coord: VWCoord, direction: VWDirection): void {
        if (!VWExistenceChecker.exists(coord)) {
            throw new Error("The coordinates of the actor location cannot be null or undefined.");
        }
        else if (!this.getActorByCoord(coord).isPresent()) {
            throw new Error("There is no actor at the origin location.");
        }
        else {
            const actor = this.getActorByCoord(coord).orElseThrow();

            actor.turn(direction);
        }
    }

    public getDirtsIDs(): string[] {
        const dirtIDs: string[] = [];

        for (let [_, location] of this.grid) {
            const dirt = location.getDirt();

            if (dirt.isPresent()) {
                dirtIDs.push(dirt.orElseThrow().getID());
            }
        }

        return dirtIDs;
    }

    public getDirtByID(id: string): JOptional<VWDirt> {
        for (let [_, location] of this.grid) {
            const dirt = location.getDirt();

            if (dirt.isPresent() && dirt.orElseThrow().getID() === id) {
                return dirt;
            }
        }

        return JOptional.empty();
    }

    public getDirtByCoord(coord: VWCoord): JOptional<VWDirt> {
        return this.getLocation(coord).flatMap(location => location.getDirt());
    }

    public getDirtCoordByID(id: string): JOptional<VWCoord> {
        for (let [coord, location] of this.grid) {
            const dirt = location.getDirt();

            if (dirt.isPresent() && dirt.orElseThrow().getID() === id) {
                return JOptional.of(coord);
            }
        }

        return JOptional.empty();
    }

    public cleanDirtByCoord(coord: VWCoord): void {
        if (!VWExistenceChecker.exists(coord)) {
            throw new Error("The coordinates of the dirt location cannot be null or undefined.");
        }
        else if (!this.getDirtByCoord(coord).isPresent()) {
            throw new Error("There is no dirt at the location.");
        }
        else {
            const location = this.getLocation(coord).orElseThrow();

            location.removeDirt();
        }
    }

    public addDirtToLocation(coord: VWCoord, dirt: VWDirt): void {
        if (!VWExistenceChecker.exists(coord)) {
            throw new Error("The coordinates of the location cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.exists(dirt)) {
            throw new Error("The dirt cannot be null or undefined.");
        }
        else if (this.getDirtByCoord(coord).isPresent()) {
            throw new Error("There is already a dirt at the location.");
        }
        else {
            this.getLocation(coord).ifPresent(location => location.addDirt(dirt));
        }
    }
}
