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
import { VWUser } from "../actor/VWUser";
import { VWListeningSensor } from "../actor/appendices/VWListeningSensor";
import { VWObservationSensor } from "../actor/appendices/VWObservationSensor";
import { VWMindCore } from "../actor/mind/core/VWMindCore";
import { JOptional } from "../common/JOptional";
import { VWActionOutcome } from "../common/VWActionOutcome";
import { VWActionResult } from "../common/VWActionResult";
import { VWCoord } from "../common/VWCoord";
import { VWDirection } from "../common/VWDirection";
import { VWMap } from "../common/VWMap";
import { VWMessage } from "../common/VWMessage";
import { VWObservation } from "../common/VWObservation";
import { VWPosition } from "../common/VWPosition";
import { VWUserDifficulty } from "../common/VWUserDifficulty";
import { VWDirt } from "../dirt/VWDirt";
import { VWOptions } from "../../gui/common/VWOptions";
import { VWActionUtils } from "../utils/VWActionUtils";
import { VWExistenceChecker } from "../utils/VWExistenceChecker";
import { VWAmbient } from "./VWAmbient";
import { VWLocation, VWLocationJSON } from "./VWLocation";
import { VWLocationAppearance } from "./VWLocationAppearance";
import { VWAbstractExecutor } from "./physics/VWAbstractExecutor";
import { VWBroadcastExecutor } from "./physics/VWBroadcastExecutor";
import { VWCleanExecutor } from "./physics/VWCleanExecutor";
import { VWDropDirtExecutor } from "./physics/VWDropDirtExecutor";
import { VWIdleExecutor } from "./physics/VWIdleExecutor";
import { VWMoveExecutor } from "./physics/VWMoveExecutor";
import { VWSpeakExecutor } from "./physics/VWSpeakExecutor";
import { VWTurnExecutor } from "./physics/VWTurnExecutor";

import config from "../config.json";

const { minEnvDim, maxEnvDim, initialEnvDim } = config;

export type VWEnvironmentJSON = {
    locations: VWLocationJSON[];
}

export class VWEnvironment {
    private ambient: VWAmbient;
    private cycleNumber: number;
    private userDifficulty: VWUserDifficulty;

    public constructor(ambient: VWAmbient) {
        this.ambient = VWExistenceChecker.validateExistence(ambient, "The ambient cannot be null or undefined.");
        this.cycleNumber = 0;
        this.userDifficulty = VWUserDifficulty.BASIC;
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

    public toggleUserDifficulty(): void {
        this.userDifficulty = this.userDifficulty + 1 % 2;

        console.log("New user difficulty: " + VWUserDifficulty[this.userDifficulty] + ".");
    }

    public getGridSize(): number {
        return this.ambient.getGridSize();
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
        console.log("Start of cycle #" + this.cycleNumber + "...");

        if (this.cycleNumber === 0) {
            this.forceInitialPerceptionToActors();
        }

        this.ambient.getUsers().forEach((user: VWUser) => user.getMind().getMindCore().overrideDifficultyLevel(this.userDifficulty));
        this.ambient.getActors().forEach((actor: VWActor) => this.cycleActor(actor));

        console.log("Environment after the actions: ");
        console.log(this.toJsonObject());
        console.log(JSON.stringify(this.toJsonObject(), null, 4));
        console.log("End of cycle #" + this.cycleNumber + "...");

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
        const actions: VWAction[] = [];

        if (actor.getPhysicalActuator().orElseThrow().hasPendingActions()) {
            actor.getPhysicalActuator().orElseThrow().sourceAll().forEach((action: VWPhysicalAction) => actions.push(action));
        }

        if (actor.getCommunicativeActuator().isPresent() && actor.getCommunicativeActuator().orElseThrow().hasPendingActions()) {
            actor.getCommunicativeActuator().orElseThrow().sourceAll().forEach((action: VWCommunicativeAction) => actions.push(action));
        }

        VWActionUtils.validateActions(actions);
        VWActionUtils.checkSenderID(actions, actor.getID());

        actions.forEach((action: VWAction) => this.executeAction(action));
    }

    private executeAction(action: VWAction): void {
        VWEnvironment.getExecutorFor(action).ifPresentOrElse((executor: VWAbstractExecutor) => {
            const result: VWActionResult = executor.attempt(action, this);

            this.sendResultToActor(result, true);
        },
        () => {
            throw new Error("No executor found for the action " + action + ".");
        });
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

        if (this.ambient.getGrid().containsKey(actorCoord)) {
            locations.set(VWPosition.CENTER, this.ambient.getGrid().get(actorCoord)!.getAppearance());
        }

        if (this.ambient.getGrid().containsKey(forwardCoord)) {
            locations.set(VWPosition.FORWARD, this.ambient.getGrid().get(forwardCoord)!.getAppearance());
        }

        if (this.ambient.getGrid().containsKey(leftCoord)) {
            locations.set(VWPosition.LEFT, this.ambient.getGrid().get(leftCoord)!.getAppearance());
        }

        if (this.ambient.getGrid().containsKey(rightCoord)) {
            locations.set(VWPosition.RIGHT, this.ambient.getGrid().get(rightCoord)!.getAppearance());
        }

        if (this.ambient.getGrid().containsKey(forwardleftCoord)) {
            locations.set(VWPosition.FORWARDLEFT, this.ambient.getGrid().get(forwardleftCoord)!.getAppearance());
        }

        if (this.ambient.getGrid().containsKey(forwardrightCoord)) {
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

    public toJsonObject(): VWEnvironmentJSON {
        return {
            "locations": this.serialiseLocations()
        }
    }

    private serialiseLocations(): VWLocationJSON[] {
        let locations: VWLocationJSON[] = [];

        for (let location of this.ambient.getGrid().getValues()) {
            locations.push(this.serialiseLocation(location));
        }

        return locations;
    }

    private serialiseLocation(location: VWLocation): VWLocationJSON {
        if (!VWExistenceChecker.allArgumentsExist(location)) {
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
        return mindCore.getMindCoreFilePath();
    }

    public static newEnvironment(options: VWOptions, data?: VWEnvironmentJSON): VWEnvironment {
        VWExistenceChecker.validateExistence(options, "The options cannot be null or undefined.");

        if (!VWExistenceChecker.allArgumentsExist(options.getStateToLoad())) {
            return VWEnvironment.newEmptyVWEnvironment();
        }
        else {
            return VWEnvironment.fromJsonObject(data);
        }
    }

    public static fromJsonObject(data: VWEnvironmentJSON): VWEnvironment {
        if (!VWExistenceChecker.allArgumentsExist(data)) {
            throw new Error("The state to load cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(data["locations"])) {
            throw new Error("The state to load must contain a 'locations' property.");
        }
        else if (!Array.isArray(data["locations"])) {
            throw new Error("The 'locations' property must be an array.");
        }
        else if (!VWExistenceChecker.allValuesExist(data["locations"])) {
            throw new Error("The 'locations' array cannot contain null or undefined values.");
        }
        else {
            return VWEnvironment.fromJsonObjectHelper(data);
        }
    }

    private static fromJsonObjectHelper(data: VWEnvironmentJSON): VWEnvironment {
        const grid: VWMap<VWCoord, VWLocation> = VWEnvironment.loadLocations(data["locations"]);

        VWEnvironment.validateGrid(grid);

        return new VWEnvironment(new VWAmbient(grid));
    }

    private static loadLocations(locations: VWLocationJSON[]): VWMap<VWCoord, VWLocation> {
        const grid: VWMap<VWCoord, VWLocation> = new VWMap<VWCoord, VWLocation>();

        for (const location of locations) {
            if (!VWExistenceChecker.allArgumentsExist(location["coord"])) {
                throw new Error("The location coordinates cannot be null or undefined.");
            }
            else {
                grid.put(VWCoord.fromJsonObject(location["coord"]), VWLocation.fromJsonObject(location, undefined));
            }
        }

        return grid;
    }

    private static validateGrid(grid: VWMap<VWCoord, VWLocation>): void {
        if (!VWExistenceChecker.allArgumentsExist(grid)) {
            throw new Error("The grid cannot be null or undefined.");
        }
        else {
            const gridSize: number = Math.sqrt(grid.size());

            VWEnvironment.validateGridSize(gridSize);
        }
    }

    private static validateGridSize(gridSize: number): void {
        const gridSizeInt: number = Math.floor(gridSize);

        if (gridSize !== gridSizeInt) {
            throw new Error("The grid must be a square.");
        }
        else if (gridSize < minEnvDim) {
            throw new Error(`The grid size is too small (min: "${minEnvDim}").`);
        }
        else if (gridSize > maxEnvDim) {
            throw new Error(`The grid size is too big (max: "${maxEnvDim}").`);
        }
    }

    public static newEmptyVWEnvironment(gridSize?: bigint): VWEnvironment {
        const realGridSize: bigint = gridSize ?? BigInt(initialEnvDim);

        VWEnvironment.validateGridSize(Number(realGridSize));

        const grid: VWMap<VWCoord, VWLocation> = new VWMap<VWCoord, VWLocation>();

        for (let x = 0n; x < realGridSize; x++) {
            for (let y = 0n; y < realGridSize; y++) {
                const coord: VWCoord = new VWCoord(x, y);

                grid.put(coord, new VWLocation(coord, VWLocation.generateWallFromCoordAndGridSize(coord, realGridSize)));
            }
        }

        return new VWEnvironment(new VWAmbient(grid));
    }

    public resetAndMaintainElements(): void {
        this.ambient.getActors().forEach((actor: VWActor) => actor.reset());
        this.cycleNumber = 0;
    }
}
