import { VWColour } from "../../common/VWColour";
import { VWOrientation } from "../../common/VWOrientation";
import { VWActor, VWActorJSON } from "../VWActor";
import { VWCleaningAgent } from "../VWCleaningAgent";
import { VWUser } from "../VWUser";
import { VWCleaningAgentPhysicalActuator } from "../appendices/VWCleaningAgentPhysicalActuator";
import { VWCommunicativeActuator } from "../appendices/VWCommunicativeActuator";
import { VWListeningSensor } from "../appendices/VWListeningSensor";
import { VWObservationSensor } from "../appendices/VWObservationSensor";
import { VWUserPhysicalActuator } from "../appendices/VWUserPhysicalActuator";
import { VWCleaningAgentMind } from "../mind/VWCleaningAgentMind";
import { VWUserMind } from "../mind/VWUserMind";

export class VWActorFactory {
    private constructor() {}

    public static createVWActorFromJSONObject(data: VWActorJSON): VWActor {
        if (data === null || data === undefined) {
            throw new Error("The JSON representation of a `VWActor` cannot be null or undefined.");
        }
        else if (data["colour"] === null || data["colour"] === undefined) {
            throw new Error("The colour of a `VWActor` cannot be null or undefined.");
        }
        else if (data["colour"] === VWColour.USER) {
            return this.createVWUserFromJSONObject(data);
        }
        else if (Object.values(VWColour).includes(data["colour"])) {
            return this.createVWCleaningAgentFromJSONObject(data);
        }
        else {
            throw new Error(`The colour of a \`VWActor\` cannot be "${data["colour"]}".`);
        }
    }

    public static createVWCleaningAgentFromJSONObject(data: VWActorJSON): VWCleaningAgent {
        if (data === null || data === undefined) {
            throw new Error("The JSON representation of a `VWCleaningAgent` cannot be null or undefined.");
        }
        else if (data["colour"] === null || data["colour"] === undefined) {
            throw new Error("The colour of a `VWCleaningAgent` cannot be null or undefined.");
        }
        else if (data["colour"] === VWColour.USER) {
            throw new Error(`The colour of a \`VWCleaningAgent\` cannot be "${VWColour.USER}".`);
        }
        else if (!Object.values(VWColour).includes(data["colour"])) {
            throw new Error(`The colour of a \`VWCleaningAgent\` cannot be "${data["colour"]}".`);
        }
        else if (data["orientation"] === null || data["orientation"] === undefined) {
            throw new Error("The orientation of a `VWCleaningAgent` cannot be null or undefined.");
        }
        else if (!Object.values(VWOrientation).includes(data["orientation"])) {
            throw new Error(`The orientation of a \`VWCleaningAgent\` cannot be "${data["orientation"]}".`);
        }
        else if (data["mind"] === null || data["mind"] === undefined) {
            throw new Error("The path of the mind of a `VWCleaningAgent` cannot be null or undefined.");
        }
        else {
            const colour: VWColour = VWColour[data["colour"]];
            const orientation: VWOrientation = VWOrientation[data["orientation"]];
            const mind: VWCleaningAgentMind = new VWCleaningAgentMind(data["mind"]);
            const observationSensor: VWObservationSensor = new VWObservationSensor();
            const listeningSensor: VWListeningSensor = new VWListeningSensor();
            const physicalActuator: VWCleaningAgentPhysicalActuator = new VWCleaningAgentPhysicalActuator();
            const communicativeActuator: VWCommunicativeActuator = new VWCommunicativeActuator();

            return new VWCleaningAgent(colour, orientation, mind, observationSensor, listeningSensor, physicalActuator, communicativeActuator);
        }
    }

    public static createVWUserFromJSONObject(data: VWActorJSON): VWUser {
        if (data === null || data === undefined) {
            throw new Error("The JSON representation of a `VWUser` cannot be null or undefined.");
        }
        else if (data["colour"] === null || data["colour"] === undefined) {
            throw new Error("The colour of a `VWUser` cannot be null or undefined.");
        }
        else if (data["colour"] !== VWColour.USER) {
            throw new Error(`The colour of a \`VWUser\` must be "${VWColour.USER}".`);
        }
        else if (data["orientation"] === null || data["orientation"] === undefined) {
            throw new Error("The orientation of a `VWUser` cannot be null or undefined.");
        }
        else if (!Object.values(VWOrientation).includes(data["orientation"])) {
            throw new Error(`The orientation of a \`VWUser\` cannot be "${data["orientation"]}".`);
        }
        else {
            const orientation: VWOrientation = VWOrientation[data["orientation"]];
            const mind: VWUserMind = new VWUserMind();
            const observationSensor: VWObservationSensor = new VWObservationSensor();
            const physicalActuator: VWUserPhysicalActuator = new VWUserPhysicalActuator();

            return new VWUser(orientation, mind, observationSensor, physicalActuator);
        }
    }
}
