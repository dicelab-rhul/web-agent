import { VWAction } from "../actions/VWAction";
import { VWExistenceChecker } from "../utils/VWExistenceChecker";
import { VWActionOutcome } from "./VWActionOutcome";

export class VWActionResult {
    private actionOutcome: VWActionOutcome;
    private action: VWAction;

    public constructor(actionOutcome: VWActionOutcome, action: VWAction) {
        this.actionOutcome = VWExistenceChecker.validateExistence(actionOutcome, "The action outcome cannot be null or undefined.");
        this.action = VWExistenceChecker.validateExistence(action, "The action cannot be null or undefined.");
    }

    public getActionOutcome(): VWActionOutcome {
        return this.actionOutcome;
    }

    public getAction(): VWAction {
        return this.action;
    }
}
