import { VWAction } from "../actions/VWAction";
import { VWBroadcastAction } from "../actions/VWBroadcastAction";
import { VWCleanAction } from "../actions/VWCleanAction";
import { VWCommunicativeAction } from "../actions/VWCommunicativeAction";
import { VWDropDirtAction } from "../actions/VWDropDirtAction";
import { VWIdleAction } from "../actions/VWIdleAction";
import { VWMoveAction } from "../actions/VWMoveAction";
import { VWPhysicalAction } from "../actions/VWPhysicalAction";
import { VWSpeakAction } from "../actions/VWSpeakAction";
import { VWTurnAction } from "../actions/VWTurnAction";
import { VWActor } from "../actor/VWActor";
import { VWListeningSensor } from "../actor/appendices/VWListeningSensor";
import { VWObservationSensor } from "../actor/appendices/VWObservationSensor";
import { VWMindCore } from "../actor/mind/core/VWMindCore";
import { JOptional } from "../common/JOptional";
import { VWActionOutcome } from "../common/VWActionOutcome";
import { VWActionResult } from "../common/VWActionResult";
import { VWCoord } from "../common/VWCoord";
import { VWDirection } from "../common/VWDirection";
import { VWMessage } from "../common/VWMessage";
import { VWObservation } from "../common/VWObservation";
import { VWPosition } from "../common/VWPosition";
import { VWDirt } from "../dirt/VWDirt";
import { VWAmbient } from "./VWAmbient";
import { VWLocation } from "./VWLocation";
import { VWLocationAppearance } from "./VWLocationAppearance";
import { VWAbstractExecutor } from "./physics/VWAbstractExecutor";
import { VWBroadcastExecutor } from "./physics/VWBroadcastExecutor";
import { VWCleanExecutor } from "./physics/VWCleanExecutor";
import { VWDropDirtExecutor } from "./physics/VWDropDirtExecutor";
import { VWIdleExecutor } from "./physics/VWIdleExecutor";
import { VWMoveExecutor } from "./physics/VWMoveExecutor";
import { VWSpeakExecutor } from "./physics/VWSpeakExecutor";
import { VWTurnExecutor } from "./physics/VWTurnExecutor";

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

    public getActorsIDsExcept(id: string): string[] {
        return this.ambient.getActorsIDsExcept(id);
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

        this.ambient.getActors().forEach((actor: VWActor) => this.cycleActor(actor));

        this.cycleNumber++;
    }

    private forceInitialPerceptionToActors(): void {
        this.ambient.getActors().forEach((actor: VWActor) => this.forceInitialPerceptionToActor(actor));
    }

    private forceInitialPerceptionToActor(actor: VWActor): void {
        const result: VWActionResult = new VWActionResult(VWActionOutcome.IMPOSSIBLE, new VWIdleAction(actor.getID()));

        this.sendResultToActor(result, false);
    }

    private cycleActor(actor: VWActor): void {
        actor.cycle();

        this.executeActorActions(actor);
    }

    private executeActorActions(actor: VWActor): void {
        const actions: VWAction[] = []

        if (actor.getPhysicalActuator().orElseThrow().hasPendingActions()) {
            actor.getPhysicalActuator().orElseThrow().sourceAll().forEach((action: VWPhysicalAction) => actions.push(action));
        }
    
        if (actor.getCommunicativeActuator().isPresent() && actor.getCommunicativeActuator().orElseThrow().hasPendingActions()) {
            actor.getCommunicativeActuator().orElseThrow().sourceAll().forEach((action: VWCommunicativeAction) => actions.push(action));
        }
    
        VWEnvironment.validateActions(actions);

        actions.forEach((action: VWAction) => this.executeAction(action));
    }

    public static validateActions(actions: VWAction[]): void {
        if (actions === null || actions === undefined) {
            throw new Error("The actions array cannot be null or undefined.");
        }
        else if (actions.some((action: VWAction) => action === null || action === undefined)) {
            throw new Error("The actions array cannot contain null or undefined actions.");
        }
        else if (actions.length === 0) {
            throw new Error("At least one action per cycle must by attempted by each actor.");
        }
        else if (actions.length > 2) {
            throw new Error("At most two actions per cycle can be attempted by each actor.");
        }
        else if (actions.length === 2 && actions[0] instanceof VWPhysicalAction && actions[1] instanceof VWPhysicalAction) {
            throw new Error("At most one physical action per cycle can be attempted by each actor.");
        }
        else if (actions.length === 2 && actions[0] instanceof VWCommunicativeAction && actions[1] instanceof VWCommunicativeAction) {
            throw new Error("At most one communicative action per cycle can be attempted by each actor.");
        }
    }

    private executeAction(action: VWAction): void {
        const executor: JOptional<VWAbstractExecutor> = VWEnvironment.getExecutorFor(action);

        if (executor.isPresent()) {
            const result: VWActionResult = executor.orElseThrow().attempt(action, this);

            this.sendResultToActor(result, true);
        }
        else {
            throw new Error("No executor found for the action " + action + ".");
        }
    }

    public static getExecutorFor(action: VWAction): JOptional<VWAbstractExecutor> {
        if (action instanceof VWIdleAction) {
            return JOptional.of(new VWIdleExecutor());
        }
        else if (action instanceof VWMoveAction) {
            return JOptional.of(new VWMoveExecutor());
        }
        else if (action instanceof VWTurnAction) {
            return JOptional.of(new VWTurnExecutor());
        }
        else if (action instanceof VWCleanAction) {
            return JOptional.of(new VWCleanExecutor());
        }
        else if (action instanceof VWDropDirtAction) {
            return JOptional.of(new VWDropDirtExecutor());
        }
        else if (action instanceof VWSpeakAction) {
            return JOptional.of(new VWSpeakExecutor());
        }
        else if (action instanceof VWBroadcastAction) {
            return JOptional.of(new VWBroadcastExecutor());
        }
        else {
            return JOptional.empty();
        }
    }

    private sendResultToActor(result: VWActionResult, incrementEffort: boolean): void {
        const locations: Map<VWPosition, VWLocationAppearance> = new Map<VWPosition, VWLocationAppearance>();
        const actorCoord: VWCoord = this.getActorCoordByID(result.getAction().getActorID()).orElseThrow();
        const actorOrientation = this.getActorByCoord(actorCoord).orElseThrow().getOrientation();
        const forwardCoord: VWCoord = this.getActorCoordByID(result.getAction().getActorID()).orElseThrow().getForwardCoord(actorOrientation);
        const leftCoord: VWCoord = this.getActorCoordByID(result.getAction().getActorID()).orElseThrow().getLeftCoord(actorOrientation);
        const rightCoord: VWCoord = this.getActorCoordByID(result.getAction().getActorID()).orElseThrow().getRightCoord(actorOrientation);
        const forwardleftCoord: VWCoord = this.getActorCoordByID(result.getAction().getActorID()).orElseThrow().getForwardLeftCoord(actorOrientation);
        const forwardrightCoord: VWCoord = this.getActorCoordByID(result.getAction().getActorID()).orElseThrow().getForwardRightCoord(actorOrientation);

        if (this.ambient.getGrid().has(actorCoord)) {
            locations.set(VWPosition.CENTER, this.ambient.getGrid().get(actorCoord)!.getAppearance());
        }
        
        if (this.ambient.getGrid().has(forwardCoord)) {
            locations.set(VWPosition.FORWARD, this.ambient.getGrid().get(forwardCoord)!.getAppearance());
        }

        if (this.ambient.getGrid().has(leftCoord)) {
            locations.set(VWPosition.LEFT, this.ambient.getGrid().get(leftCoord)!.getAppearance());
        }

        if (this.ambient.getGrid().has(rightCoord)) {
            locations.set(VWPosition.RIGHT, this.ambient.getGrid().get(rightCoord)!.getAppearance());
        }

        if (this.ambient.getGrid().has(forwardleftCoord)) {
            locations.set(VWPosition.FORWARDLEFT, this.ambient.getGrid().get(forwardleftCoord)!.getAppearance());
        }

        if (this.ambient.getGrid().has(forwardrightCoord)) {
            locations.set(VWPosition.FORWARDRIGHT, this.ambient.getGrid().get(forwardrightCoord)!.getAppearance());
        }

        const observation: VWObservation = new VWObservation(locations, [result]);

        this.getActorByCoord(actorCoord).orElseThrow().getObservationSensor().ifPresent((sensor: VWObservationSensor) => sensor.sink(observation));
        this.getActorByCoord(actorCoord).orElseThrow().getMind().getMindCore().incrementEffort(incrementEffort ? result.getAction().getEffort() : 0n);
    }

    public sendMessageToRecipients(action: VWCommunicativeAction): boolean {
        try {
            const recipientsIDs: string[] = action.getRecipientsIDs().length > 0 ? action.getRecipientsIDs() : this.getActorsIDsExcept(action.getActorID());

            recipientsIDs.forEach((recipientID: string) => this.sendMessageToRecipient(action, recipientID));

            return true;
        }
        catch (e) {
            return false;
        }
    }

    private sendMessageToRecipient(action: VWCommunicativeAction, recipientID: string): void {
        this.getActorByID(recipientID).ifPresent((actor: VWActor) => actor.getListeningSensor().ifPresent((sensor: VWListeningSensor) => sensor.sink(new VWMessage(action.getContent(), action.getActorID(), recipientID))));
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

    public static fromJsonObject(data: object, config: object): VWEnvironment {
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
            return VWEnvironment.fromJsonObjectHelper(data, config);
        }
    }

    private static fromJsonObjectHelper(data: object, config: object): VWEnvironment {
        const grid: Map<VWCoord, VWLocation> = VWEnvironment.loadLocations(data["locations"]);

        VWEnvironment.validateGrid(grid, config);

        return new VWEnvironment(new VWAmbient(grid));
    }

    private static loadLocations(locations: object[]): Map<VWCoord, VWLocation> {
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
