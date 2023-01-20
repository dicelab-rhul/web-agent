import { JOptional } from "../../common/JOptional";
import { VWPerception } from "../../common/VWPerception";
import { VWQueue } from "../../common/VWQueue";
import { VWSensor } from "./VWSensor";

export abstract class VWAbstractSensor<P extends VWPerception> implements VWSensor<P> {
    private perceptions: VWQueue<P>;

    public constructor() {
        this.perceptions = new VWQueue<P>();
    }

    public sink(perception: P) : void {
        if (perception === null || perception === undefined) {
            throw new Error("The perception cannot be null or undefined.");
        }
        else {
            this.perceptions.enqueue(perception);
        }
    }

    public sinkAll(perceptions: P[]) : void {
        if (perceptions === null || perceptions === undefined) {
            throw new Error("The perceptions cannot be null or undefined.");
        }
        else {
            perceptions.forEach(perception => this.sink(perception));
        }
    }

    public source() : JOptional<P> {
        if (this.perceptions.isEmpty()) {
            return JOptional.empty();
        }
        else {
            return JOptional.of(this.perceptions.dequeue());
        }
    }

    public sourceAll() : JOptional<P[]> {
        if (this.perceptions.isEmpty()) {
            return JOptional.empty();
        }
        else {
            let perceptions: P[] = [];

            while (!this.perceptions.isEmpty()) {
                perceptions.push(this.perceptions.dequeue());
            }

            return JOptional.of(perceptions);
        }
    }
}
