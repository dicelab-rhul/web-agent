import { VWColour } from "../../common/VWColour";
import { VWOrientation } from "../../common/VWOrientation";
import { VWUserDifficulty } from "../../common/VWUserDifficulty";
import { VWOptions } from "../../gui/common/VWOptions";
import { VWExistenceChecker } from "../../utils/VWExistenceChecker";
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
import { VWAbstractMindCore } from "../mind/core/VWAbstractMindCore";
import { VWHystereticMindCore } from "../mind/core/VWHystereticMindCore";
import { VWMindCore } from "../mind/core/VWMindCore";

export class VWActorFactory {
    private constructor() {}

    public static createVWActorFromJSONObject(data: VWActorJSON, userDifficulty: VWUserDifficulty): VWActor {
        if (!VWExistenceChecker.exists(data)) {
            throw new Error("The JSON representation of a `VWActor` cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.exists(data["colour"])) {
            throw new Error("The colour of a `VWActor` cannot be null or undefined.");
        }
        else if (data["colour"] === VWColour.USER) {
            return this.createVWUserFromJSONObject(data, userDifficulty);
        }
        else if (Object.values(VWColour).includes(data["colour"])) {
            return this.createVWCleaningAgentFromJSONObject(data);
        }
        else {
            throw new Error(`The colour of a \`VWActor\` cannot be "${data["colour"]}".`);
        }
    }

    public static createVWCleaningAgentFromJSONObject(data: VWActorJSON): VWCleaningAgent {
        if (!VWExistenceChecker.exists(data)) {
            throw new Error("The JSON representation of a `VWCleaningAgent` cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.exists(data["colour"])) {
            throw new Error("The colour of a `VWCleaningAgent` cannot be null or undefined.");
        }
        else if (data["colour"] === VWColour.USER) {
            throw new Error(`The colour of a \`VWCleaningAgent\` cannot be "${VWColour.USER}".`);
        }
        else if (!Object.values(VWColour).includes(data["colour"])) {
            throw new Error(`The colour of a \`VWCleaningAgent\` cannot be "${data["colour"]}".`);
        }
        else if (!VWExistenceChecker.exists(data["orientation"])) {
            throw new Error("The orientation of a `VWCleaningAgent` cannot be null or undefined.");
        }
        else if (!Object.values(VWOrientation).includes(data["orientation"])) {
            throw new Error(`The orientation of a \`VWCleaningAgent\` cannot be "${data["orientation"]}".`);
        }
        else if (!VWExistenceChecker.exists(data["mind"])) {
            throw new Error("The path of the mind of a `VWCleaningAgent` cannot be null or undefined.");
        }
        else {
            const colour: VWColour = VWColour[data["colour"]];
            const orientation: VWOrientation = VWOrientation[data["orientation"]];
            const mindCore: VWMindCore = data["mind"] === "hysteretic" ? new VWHystereticMindCore() : VWAbstractMindCore.loadFromFile(data["mind"]);
            const mind: VWCleaningAgentMind = new VWCleaningAgentMind(mindCore);
            const observationSensor: VWObservationSensor = new VWObservationSensor();
            const listeningSensor: VWListeningSensor = new VWListeningSensor();
            const physicalActuator: VWCleaningAgentPhysicalActuator = new VWCleaningAgentPhysicalActuator();
            const communicativeActuator: VWCommunicativeActuator = new VWCommunicativeActuator();

            return new VWCleaningAgent(colour, orientation, mind, observationSensor, listeningSensor, physicalActuator, communicativeActuator);
        }
    }

    public static createVWUserFromJSONObject(data: VWActorJSON, userDifficulty: VWUserDifficulty): VWUser {
        if (!VWExistenceChecker.exists(data)) {
            throw new Error("The JSON representation of a `VWUser` cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.exists(data["colour"])) {
            throw new Error("The colour of a `VWUser` cannot be null or undefined.");
        }
        else if (data["colour"] !== VWColour.USER) {
            throw new Error(`The colour of a \`VWUser\` must be "${VWColour.USER}".`);
        }
        else if (!VWExistenceChecker.exists(data["orientation"])) {
            throw new Error("The orientation of a `VWUser` cannot be null or undefined.");
        }
        else if (!Object.values(VWOrientation).includes(data["orientation"])) {
            throw new Error(`The orientation of a \`VWUser\` cannot be "${data["orientation"]}".`);
        }
        else {
            const orientation: VWOrientation = VWOrientation[data["orientation"]];
            const mind: VWUserMind = new VWUserMind(userDifficulty);
            const observationSensor: VWObservationSensor = new VWObservationSensor();
            const physicalActuator: VWUserPhysicalActuator = new VWUserPhysicalActuator();

            return new VWUser(orientation, mind, observationSensor, physicalActuator);
        }
    }

    public static createVWActorFacingNorth(colour: VWColour, options: VWOptions): VWActor {
        if (!VWExistenceChecker.exists(colour)) {
            throw new Error("The colour of a `VWActor` cannot be null or undefined.");
        }
        else if (colour === VWColour.USER) {
            return this.createVWUserFacingNorth(options);
        }
        else if (Object.values(VWColour).includes(colour)) {
            return this.createVWCleaningAgentFacingNorth(colour, options);
        }
        else {
            throw new Error(`The colour of a \`VWActor\` cannot be "${colour}".`);
        }
    }

    public static createVWCleaningAgentFacingNorth(colour: VWColour, options: VWOptions): VWCleaningAgent {
        if (!VWExistenceChecker.exists(colour)) {
            throw new Error("The colour of a `VWCleaningAgent` cannot be null or undefined.");
        }
        else if (colour === VWColour.USER) {
            throw new Error(`The colour of a \`VWCleaningAgent\` cannot be "${VWColour.USER}".`);
        }
        else if (!Object.values(VWColour).includes(colour)) {
            throw new Error(`The colour of a \`VWCleaningAgent\` cannot be "${colour}".`);
        }
        else if (options === null || options === undefined) {
            throw new Error("The simulation options cannot be null or undefined.");
        }
        else {
            const orientation: VWOrientation = VWOrientation.NORTH;
            const mindCore: VWMindCore = VWExistenceChecker.exists(options.getTeleora()) ? VWAbstractMindCore.import(options.getTeleora()) : new VWHystereticMindCore();
            const mind: VWCleaningAgentMind = new VWCleaningAgentMind(mindCore);
            const observationSensor: VWObservationSensor = new VWObservationSensor();
            const listeningSensor: VWListeningSensor = new VWListeningSensor();
            const physicalActuator: VWCleaningAgentPhysicalActuator = new VWCleaningAgentPhysicalActuator();
            const communicativeActuator: VWCommunicativeActuator = new VWCommunicativeActuator();

            return new VWCleaningAgent(colour, orientation, mind, observationSensor, listeningSensor, physicalActuator, communicativeActuator);
        }
    }

    public static createVWUserFacingNorth(options: VWOptions): VWUser {
        const orientation: VWOrientation = VWOrientation.NORTH;
        const mind: VWUserMind = new VWUserMind(options.getUserDifficulty());
        const observationSensor: VWObservationSensor = new VWObservationSensor();
        const physicalActuator: VWUserPhysicalActuator = new VWUserPhysicalActuator();

        return new VWUser(orientation, mind, observationSensor, physicalActuator);
    }
}
