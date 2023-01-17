import { VWAction } from "../../actions/VWAction";
import { VWQueue } from "../../common/VWQueue";
import { VWActuator } from "./VWActuator";

export abstract class VWAbstractActuator<A extends VWAction> implements VWActuator<A> {
    private actions: VWQueue<A>;

    public constructor() {
        this.actions = new VWQueue<A>();
    }

    public sink(action: A) : void {
        if (action == null || action == undefined) {
            throw new Error("The action cannot be null or undefined.");
        }
        else {
            this.actions.enqueue(action);
        }
    }

    public sinkAll(actions: A[]) : void {
        if (actions == null || actions == undefined) {
            throw new Error("The actions cannot be null or undefined.");
        }
        else {
            actions.forEach(action => this.sink(action));
        }
    }

    public source() : A {
        if (this.actions.isEmpty()) {
            throw new Error("No actions to source.");
        }
        else {
            return this.actions.dequeue();
        }
    }

    public sourceAll() : A[] {
        if (this.actions.isEmpty()) {
            throw new Error("No actions to source.");
        }
        else {
            const actions: A[] = [];

            while (!this.actions.isEmpty()) {
                actions.push(this.actions.dequeue());
            }

            return actions;
        }
    }

    public hasPendingActions(): boolean {
        return !this.actions.isEmpty()
    }
}
