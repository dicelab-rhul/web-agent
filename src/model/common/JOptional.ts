// TODO: should this class be moved to a separate package?

export class JOptional<T> {
    private value: T | null | undefined;

    private constructor(value: T | null | undefined) {
        this.value = value;
    }

    public static of<T>(value: T | null | undefined): JOptional<T> {
        if (value === null || value === undefined) {
            throw new Error("The value cannot be null or undefined.");
        }
        else {
            return new JOptional<T>(value);
        }
    }

    public static ofNullable<T>(value: T | null | undefined): JOptional<T> {
        if (value === null || value === undefined) {
            return JOptional.empty();
        }
        else {
            return new JOptional<T>(value);
        }
    }

    public static empty<T>(): JOptional<T> {
        return new JOptional<T>(null);
    }

    public isPresent(): boolean {
        return this.value !== null;
    }

    public isEmpty(): boolean {
        return this.value === null;
    }

    public get(): T {
        if (this.value === null || this.value === undefined) {
            throw new Error("The value is null.");
        }
        else {
            return this.value;
        }
    }

    public orElse(other: T): T {
        if (this.value === null || this.value === undefined) {
            return other;
        }
        else {
            return this.value;
        }
    }

    public orElseGet(other: () => T): T {
        if (this.value === null || this.value === undefined) {
            return other();
        }
        else {
            return this.value;
        }
    }

    public orElseThrow(error?: Error): T {
        const errorToThrow: Error = error === null || error === undefined ? new Error("The value is null or undefined.") : error;

        if (this.value === null || this.value === undefined) {
            throw errorToThrow;
        }
        else {
            return this.value;
        }
    }

    public ifPresent(consumer: (value: T) => void): void {
        if (this.value !== null && this.value !== undefined) {
            consumer(this.value);
        }
    }

    public filter(predicate: (value: T) => boolean): JOptional<T> {
        if (this.value === null || this.value === undefined) {
            return JOptional.empty<T>();
        }
        else if (predicate(this.value)) {
            return this;
        }
        else {
            return JOptional.empty<T>();
        }
    }

    public map<U>(mapper: (value: T) => U): JOptional<U> {
        if (this.value === null || this.value === undefined) {
            return JOptional.empty<U>();
        }
        else {
            return JOptional.of<U>(mapper(this.value));
        }
    }

    public flatMap<U>(mapper: (value: T) => JOptional<U>): JOptional<U> {
        if (this.value === null || this.value === undefined) {
            return JOptional.empty<U>();
        }
        else {
            return mapper(this.value);
        }
    }

    public equals(other: object): boolean {
        if (other === null || other === undefined) {
            return false;
        }
        else if (this === other) {
            return true;
        }
        else if (!(other instanceof JOptional)) {
            return false;
        }
        else if (this.value === null) {
            return other.value === null;
        }
        else if (this.value === undefined) {
            return other.value === undefined;
        }
        else {
            return this.value === other.value;
        }
    }
}
