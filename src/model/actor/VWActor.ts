import { VWAction } from "../actions/VWAction";
import { VWCommunicativeAction } from "../actions/VWCommunicativeAction";
import { VWPhysicalAction } from "../actions/VWPhysicalAction";
import { JOptional } from "../common/JOptional";
import { VWAbstractIdentifiable } from "../common/VWAbstractIdentifiable";
import { VWActionResult } from "../common/VWActionResult";
import { VWColour } from "../common/VWColour";
import { VWMessage } from "../common/VWMessage";
import { VWObservation } from "../common/VWObservation";
import { VWOrientation } from "../common/VWOrientation";
import { VWActorAppearance } from "./appearance/VWActorAppearance";
import { VWCommunicativeActuator } from "./appendices/VWCommunicativeActuator";
import { VWListeningSensor } from "./appendices/VWListeningSensor";
import { VWObservationSensor } from "./appendices/VWObservationSensor";
import { VWPhysicalActuator } from "./appendices/VWPhysicalActuator";
import { VWActorFactory } from "./factories/VWActorFactory";
import { VWMind } from "./mind/VWMind";

export abstract class VWActor extends VWAbstractIdentifiable {
    private colour: VWColour;
    private orientation: VWOrientation;
    private mind: VWMind;
    private observationSensor: JOptional<VWObservationSensor>;
    private listeningSensor: JOptional<VWListeningSensor>;
    private physicalActuator: JOptional<VWPhysicalActuator>;
    private CommunicativeActuator: JOptional<VWCommunicativeActuator>;

    public constructor(colour: VWColour, orientation: VWOrientation, mind: VWMind, observationSensor?: VWObservationSensor, listeningSensor?: VWListeningSensor, physicalActuator?: VWPhysicalActuator, communicativeActuator?: VWCommunicativeActuator) {
        super();

        this.colour = this.validateColour(colour);
        this.orientation = this.validateOrientation(orientation);
        this.mind = this.validateMind(mind);
        this.observationSensor = observationSensor === null || observationSensor === undefined ? JOptional.empty() : JOptional.of(observationSensor);
        this.listeningSensor = listeningSensor === null || listeningSensor === undefined ? JOptional.empty() : JOptional.of(listeningSensor);
        this.physicalActuator = physicalActuator === null || physicalActuator === undefined ? JOptional.empty() : JOptional.of(physicalActuator);
        this.CommunicativeActuator = communicativeActuator === null || communicativeActuator === undefined ? JOptional.empty() : JOptional.of(communicativeActuator);
    }

    private validateColour(colour: VWColour): VWColour {
        if (colour === null || colour === undefined) {
            throw new Error("The colour cannot be null or undefined.");
        }

        return colour;
    }

    private validateOrientation(orientation: VWOrientation): VWOrientation {
        if (orientation === null || orientation === undefined) {
            throw new Error("The orientation cannot be null or undefined.");
        }

        return orientation;
    }

    private validateMind(mind: VWMind): VWMind {
        if (mind === null || mind === undefined) {
            throw new Error("The mind cannot be null or undefined.");
        }

        return mind;
    }

    public getColour(): VWColour {
        return this.colour;
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
        return this.CommunicativeActuator;
    }

    public getAppearance(): VWActorAppearance {
        return new VWActorAppearance(this.getID(), this.getColour(), this.getOrientation());
    }

    public cycle(): void {
        const observations: VWObservation[] = this.getObservationSensor().orElseThrow().sourceAll();
        const observation: VWObservation = this.mergeObservations(observations);
        const messages: VWMessage[] = this.getListeningSensor().orElseThrow().sourceAll();

        this.getMind().perceive(observation, messages);
        this.getMind().revise();
        this.getMind().decide();

        const nextActions: VWAction[] = this.getMind().execute();

        this.validateActions(nextActions);
        this.executeActions(nextActions);
    }

    private mergeObservations(observations: VWObservation[]): VWObservation {
        if (observations === null || observations === undefined) {
            throw new Error("The observations array cannot be null or undefined.");
        }
        else if (observations.some((observation: VWObservation) => observation === null || observation === undefined)) {
            throw new Error("The observations array cannot contain null or undefined observations.");
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

    private validateActions(actions: VWAction[]): void {
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

    public static fromJsonObject(jsonObject: any): VWActor {
        return VWActorFactory.createVWActorFromJSONObject(jsonObject);
    }
}
