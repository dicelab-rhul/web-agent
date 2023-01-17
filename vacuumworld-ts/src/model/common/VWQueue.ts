export class VWQueue<T> {
    private queue: T[];

    public constructor() {
        this.queue = [];
    }

    public enqueue(elm: T) : void {
        if (elm == null || elm == undefined) {
            throw new Error("The perception cannot be null or undefined.");
        }
        else {
            this.queue.push(elm);
        }
    }

    public dequeue() : T {
        const candidate: T | undefined = this.queue.shift();

        if (candidate == null || candidate == undefined) {
            throw new Error("No perceptions to dequeue.");
        }
        else {
            return candidate;
        }
    }

    public peek() : T {
        const candidate: T | undefined = this.queue[0];

        if (candidate == null || candidate == undefined) {
            throw new Error("No perceptions to peek.");
        }
        else {
            return candidate;
        }
    }

    public isEmpty() : boolean {
        return this.queue.length == 0;
    }
}
