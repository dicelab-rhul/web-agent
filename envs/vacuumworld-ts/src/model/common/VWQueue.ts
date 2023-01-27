import { VWExistenceChecker } from "../utils/VWExistenceChecker";

// TODO: should this class be moved to a separate npm module?
export class VWQueue<T> {
    private queue: T[];

    public constructor() {
        this.queue = [];
    }

    public enqueue(elm: T) : void {
        if (!VWExistenceChecker.exists(elm)) {
            throw new Error("The perception cannot be null or undefined.");
        }
        else {
            this.queue.push(elm);
        }
    }

    public dequeue() : T {
        const candidate: T | undefined = this.queue.shift();

        if (!VWExistenceChecker.exists(candidate)) {
            throw new Error("No perceptions to dequeue.");
        }
        else {
            return candidate;
        }
    }

    public peek() : T {
        const candidate: T | undefined = this.queue[0];

        if (!VWExistenceChecker.exists(candidate)) {
            throw new Error("No perceptions to peek.");
        }
        else {
            return candidate;
        }
    }

    public isEmpty() : boolean {
        return this.queue.length === 0;
    }
}
