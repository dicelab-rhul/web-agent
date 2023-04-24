// TODO: move JOptional to a separate npm module

import { VWExistenceChecker } from "../utils/VWExistenceChecker";

type TMaybe<T> = T | null | undefined;

export class JOptional<T> {
    private value: TMaybe<T>;

    private constructor(value: TMaybe<T>) {
        this.value = value;
    }

    public static of<T>(value: T | null | undefined): JOptional<T> {
        if (!VWExistenceChecker.allArgumentsExist(value)) {
            throw new Error("The value cannot be null or undefined.");
        }
        else {
            return new JOptional<T>(value);
        }
    }

    public static ofNullable<T>(value: T | null | undefined): JOptional<T> {
        if (!VWExistenceChecker.allArgumentsExist(value)) {
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
        return VWExistenceChecker.validateExistence(this.value, "The value is null or undefined.");
    }

    public orElse(other: T): T {
        return VWExistenceChecker.allArgumentsExist(this.value) ? this.value : other;
    }

    public orElseGet(other: () => T): T {
        return VWExistenceChecker.allArgumentsExist(this.value) ? this.value : other();
    }

    public orElseThrow(error?: Error): T {
        if (!VWExistenceChecker.allArgumentsExist(this.value)) {
            throw error || new Error("The value is null or undefined.");
        }
        else {
            return this.value;
        }
    }

    public ifPresent(consumer: (value: T) => void): void {
        if (VWExistenceChecker.allArgumentsExist(this.value)) {
            consumer(this.value);
        }
    }

    public ifPresentOrElse(consumer: (value: T) => void, alternative: () => void): void {
        if (VWExistenceChecker.allArgumentsExist(this.value)) {
            consumer(this.value);
        }
        else {
            alternative();
        }
    }

    public filter(predicate: (value: T) => boolean): JOptional<T> {
        if (!VWExistenceChecker.allArgumentsExist(this.value)) {
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
        if (!VWExistenceChecker.allArgumentsExist(this.value)) {
            return JOptional.empty<U>();
        }
        else {
            return JOptional.of<U>(mapper(this.value));
        }
    }

    public flatMap<U>(mapper: (value: T) => JOptional<U>): JOptional<U> {
        if (!VWExistenceChecker.allArgumentsExist(this.value)) {
            return JOptional.empty<U>();
        }
        else {
            return mapper(this.value);
        }
    }

    public equals(other: object): boolean {
        if (!VWExistenceChecker.allArgumentsExist(other)) {
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
