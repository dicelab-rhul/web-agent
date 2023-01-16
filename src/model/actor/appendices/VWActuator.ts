import { VWAction } from "../../actions/VWAction";

export interface VWActuator<A extends VWAction> {
    sink(action: A) : void;

    sinkAll(actions: A[]) : void;

    source() : A;

    sourceAll() : A[];

    hasPendingActions(): boolean;
}
