import { VWAction } from "../actions/VWAction";
import { VWActionOutcome } from "./VWActionOutcome";

export class VWActionResult {
    private actionOutcome: VWActionOutcome;
    private action: VWAction;

    public constructor(actionOutcome: VWActionOutcome, action: VWAction) {
        this.actionOutcome = this.validateActionOutcome(actionOutcome);
        this.action = this.validateAction(action);
    }

    private validateActionOutcome(actionOutcome: VWActionOutcome): VWActionOutcome {
        if (actionOutcome === null || actionOutcome === undefined) {
            throw new Error("The action outcome cannot be null or undefined.");
        }

        return actionOutcome;
    }

    private validateAction(action: VWAction): VWAction {
        if (action === null || action === undefined) {
            throw new Error("The action cannot be null or undefined.");
        }

        return action;
    }

    public getActionOutcome(): VWActionOutcome {
        return this.actionOutcome;
    }

    public getAction(): VWAction {
        return this.action;
    }
}
