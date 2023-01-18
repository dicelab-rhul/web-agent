import { VWAction } from "../actions/VWAction";
import { VWActionOutcome } from "./VWActionOutcome";

export class VWActionResult {
    private actionOutcome: VWActionOutcome;
    private action: VWAction;

    public constructor(actionOutcome: VWActionOutcome, action: VWAction) {
        this.actionOutcome = VWActionResult.validateActionOutcome(actionOutcome);
        this.action = VWActionResult.validateAction(action);
    }

    private static validateActionOutcome(actionOutcome: VWActionOutcome): VWActionOutcome {
        if (actionOutcome === null || actionOutcome === undefined) {
            throw new Error("The action outcome cannot be null or undefined.");
        }

        return actionOutcome;
    }

    private static validateAction(action: VWAction): VWAction {
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
