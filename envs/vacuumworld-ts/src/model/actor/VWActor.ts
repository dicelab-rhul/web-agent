import { VWAction } from "../actions/VWAction";
import { VWCommunicativeAction } from "../actions/VWCommunicativeAction";
import { VWPhysicalAction } from "../actions/VWPhysicalAction";
import { JOptional } from "../common/JOptional";
import { VWAbstractIdentifiable } from "../common/VWAbstractIdentifiable";
import { VWActionResult } from "../common/VWActionResult";
import { VWColour } from "../common/VWColour";
import { VWDirection } from "../common/VWDirection";
import { VWMessage } from "../common/VWMessage";
import { VWObservation } from "../common/VWObservation";
import { VWOrientation } from "../common/VWOrientation";
import { VWActionUtils } from "../utils/VWActionUtils";
import { VWExistenceChecker } from "../utils/VWExistenceChecker";
import { VWOrientationUtils } from "../utils/VWOrientationUtils";
import { VWActorAppearance } from "./appearance/VWActorAppearance";
import { VWCleaningAgentPhysicalActuator } from "./appendices/VWCleaningAgentPhysicalActuator";
import { VWCommunicativeActuator } from "./appendices/VWCommunicativeActuator";
import { VWListeningSensor } from "./appendices/VWListeningSensor";
import { VWObservationSensor } from "./appendices/VWObservationSensor";
import { VWPhysicalActuator } from "./appendices/VWPhysicalActuator";
import { VWUserPhysicalActuator } from "./appendices/VWUserPhysicalActuator";
import { VWCleaningAgentMind } from "./mind/VWCleaningAgentMind";
import { VWMind } from "./mind/VWMind";
import { VWUserMind } from "./mind/VWUserMind";

export type VWActorJSON = {
    colour: VWColour;
    orientation: VWOrientation;
    mind: string;
}

export abstract class VWActor extends VWAbstractIdentifiable {
    private colour: VWColour;
    private orientation: VWOrientation;
    private mind: VWMind;
    private observationSensor: JOptional<VWObservationSensor>;
    private listeningSensor: JOptional<VWListeningSensor>;
    private physicalActuator: JOptional<VWPhysicalActuator>;
    private communicativeActuator: JOptional<VWCommunicativeActuator>;

    public constructor(colour: VWColour, orientation: VWOrientation, mind: VWMind, observationSensor?: VWObservationSensor, listeningSensor?: VWListeningSensor, physicalActuator?: VWPhysicalActuator, communicativeActuator?: VWCommunicativeActuator) {
        super();

        this.colour = VWExistenceChecker.validateExistence(colour, "The colour cannot be null or undefined.");
        this.orientation = VWExistenceChecker.validateExistence(orientation, "The orientation cannot be null or undefined.");
        this.mind = VWExistenceChecker.validateExistence(mind, "The mind cannot be null or undefined.");
        this.observationSensor = observationSensor === null || observationSensor === undefined ? JOptional.empty() : JOptional.of(observationSensor);
        this.listeningSensor = listeningSensor === null || listeningSensor === undefined ? JOptional.empty() : JOptional.of(listeningSensor);
        this.physicalActuator = physicalActuator === null || physicalActuator === undefined ? JOptional.empty() : JOptional.of(physicalActuator);
        this.communicativeActuator = communicativeActuator === null || communicativeActuator === undefined ? JOptional.empty() : JOptional.of(communicativeActuator);
    }

    public getColour(): VWColour {
        return this.colour;
    }

    public isCleaningAgent(): boolean {
        return this.colour !== VWColour.USER && this.mind instanceof VWCleaningAgentMind && this.listeningSensor.isPresent() && this.communicativeActuator.isPresent() && this.physicalActuator.orElseThrow() instanceof VWCleaningAgentPhysicalActuator;
    }

    public isUser(): boolean {
        return this.colour === VWColour.USER && this.mind instanceof VWUserMind && !this.listeningSensor.isPresent() && !this.communicativeActuator.isPresent() && this.physicalActuator.orElseThrow() instanceof VWUserPhysicalActuator;
    }

    public getOrientation(): VWOrientation {
        return this.orientation;
    }

    public getMind(): VWMind {
        return this.mind;
    }

    public getObservationSensor(): JOptional<VWObservationSensor> {
        return this.observationSensor;
    }

    public getListeningSensor(): JOptional<VWListeningSensor> {
        return this.listeningSensor;
    }

    public getPhysicalActuator(): JOptional<VWPhysicalActuator> {
        return this.physicalActuator;
    }

    public getCommunicativeActuator(): JOptional<VWCommunicativeActuator> {
        return this.communicativeActuator;
    }

    public getAppearance(): VWActorAppearance {
        return new VWActorAppearance(this.getID(), this.getColour(), this.getOrientation());
    }

    public turn(direction: VWDirection) {
        if (!VWExistenceChecker.exists(direction)) {
            throw new Error("The turning direction cannot be null or undefined.");
        }
        else if (direction === VWDirection.LEFT) {
            this.orientation = VWOrientationUtils.getLeft(this.orientation);
        }
        else if (direction === VWDirection.RIGHT) {
            this.orientation = VWOrientationUtils.getRight(this.orientation);
        }
        else {
            throw new Error("The turning direction is invalid.");
        }
    }

    public cycle(): void {
        const observations: VWObservation[] = this.getObservationSensor().orElseThrow().sourceAll().orElseThrow();
        const observation: VWObservation = VWActor.mergeObservations(observations);
        const messages: VWMessage[] = this.sourceMessages();

        this.getMind().perceive(observation, messages);
        this.getMind().revise();
        this.getMind().decide();

        const nextActions: VWAction[] = this.getMind().execute();

        VWActionUtils.validateActions(nextActions);

        this.executeActions(nextActions);
    }

    private sourceMessages(): VWMessage[] {
        const messages: VWMessage[] = [];

        this.getListeningSensor().ifPresent((listeningSensor: VWListeningSensor) => listeningSensor.sourceAll().ifPresent((sourced: VWMessage[]) => messages.push(...sourced)));
    
        return messages;
    }

    private static mergeObservations(observations: VWObservation[]): VWObservation {
        if (!VWExistenceChecker.allExist(observations)) {
            throw new Error("The observations array cannot be null or undefined, or contain null or undefined observations.");
        }
        else if (observations.length === 0) {
            throw new Error("At least one observation must be present.");
        }
        else if (observations.length === 1) {
            return observations[0];
        }
        else if (observations.length === 2) {
            const results: VWActionResult[] = observations[0].getActionResults().concat(observations[1].getActionResults());

            return new VWObservation(observations[1].getLocations(), results);
        }
        else {
            throw new Error("At most two observations can be present.");
        }
    }

    private executeActions(actions: VWAction[]): void {
        for (const action of actions) {
            if (action instanceof VWPhysicalAction) {
                this.getPhysicalActuator().orElseThrow().sink(action);
            }
            else if (action instanceof VWCommunicativeAction) {
                this.getCommunicativeActuator().orElseThrow().sink(action);
            }
            else {
                throw new Error("The action is not supported.");
            }
        }
    }

    public toJsonObject(actorMindCorePath?: string): VWActorJSON {
        if (!VWExistenceChecker.exists(actorMindCorePath)) {
            throw new Error("The actor mind core path cannot be null or undefined.");
        }

        return {
            "colour": this.getColour(),
            "orientation": this.getOrientation(),
            "mind": actorMindCorePath
        };
    }

    public reset(): void {
        this.mind = this.resetMind();
    }

    protected abstract resetMind(): VWMind;
}
