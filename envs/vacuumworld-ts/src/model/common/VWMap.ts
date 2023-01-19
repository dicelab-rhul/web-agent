import { Equalisable } from "./Equalisable";

export class VWMapEntry<K extends Equalisable, V> {
    private key: K;
    private value: V;

    public constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    public getKey(): K {
        return this.key;
    }

    public getValue(): V {
        return this.value;
    }

    public setValue(value: V): void {
        this.value = value;
    }
}


export class VWMap<K extends Equalisable, V> {
    private entries: VWMapEntry<K, V>[];

    public constructor() {
        this.entries = [];
    }

    public put(key: K, value: V): void {
        let entry: VWMapEntry<K, V> = this.getEntry(key);

        if (entry === null || entry === undefined) {
            this.entries.push(new VWMapEntry(key, value));
        }
        else {
            entry.setValue(value);
        }
    }

    public get(key: K): V {
        const entry: VWMapEntry<K, V> = this.getEntry(key);

        if (entry === null || entry === undefined) {
            return null;
        }
        else {
            return entry.getValue();
        }
    }

    public remove(key: K): void {
        const entry: VWMapEntry<K, V> = this.getEntry(key);

        if (entry !== null && entry !== undefined) {
            this.entries.splice(this.entries.indexOf(entry), 1);
        }
    }

    public containsKey(key: K): boolean {
        return this.getEntry(key) !== null && this.getEntry(key) !== undefined;
    }

    public containsValue(value: V): boolean {
        for (let entry of this.entries) {
            if (entry.getValue() === value) {
                return true;
            }
        }

        return false;
    }

    public size(): number {
        return this.entries.length;
    }

    public isEmpty(): boolean {
        return this.entries.length === 0;
    }

    public clear(): void {
        this.entries = [];
    }

    public getKeys(): K[] {
        return this.entries.map((entry: VWMapEntry<K, V>) => entry.getKey());
    }

    public getValues(): V[] {
        return this.entries.map((entry: VWMapEntry<K, V>) => entry.getValue());
    }

    private getEntry(key: K): VWMapEntry<K, V> {
        return this.entries.find((entry: VWMapEntry<K, V>) => entry.getKey().equals(key));
    }

    public toString(): string {
        let str: string = "";

        for (let entry of this.entries) {
            str += entry.getKey() + " : " + entry.getValue() + "\n";
        }

        return str;
    }

    public equals(other: VWMap<K, V>): boolean {
        if (this.size() !== other.size()) {
            return false;
        }

        for (let entry of this.entries) {
            if (!other.containsKey(entry.getKey()) || other.get(entry.getKey()) !== entry.getValue()) {
                return false;
            }
        }

        return true;
    }

    public clone(): VWMap<K, V> {
        const clone: VWMap<K, V> = new VWMap();

        for (let entry of this.entries) {
            clone.put(entry.getKey(), entry.getValue());
        }

        return clone;
    }

    public static fromMap<K extends Equalisable, V>(map: Map<K , V>): VWMap<K, V> {
        const vwMap: VWMap<K, V> = new VWMap();

        for (let [key, value] of map) {
            vwMap.put(key, value);
        }

        return vwMap;
    }

    public toMap(): Map<K, V> {
        const map: Map<K, V> = new Map();

        for (let entry of this.entries) {
            map.set(entry.getKey(), entry.getValue());
        }

        return map;
    }

    public static fromObject<K extends Equalisable, V>(obj: {[key: string]: V}): VWMap<K, V> {
        const vwMap: VWMap<K, V> = new VWMap();

        for (let key in obj) {
            vwMap.put(key as unknown as K, obj[key]);
        }

        return vwMap;
    }

    public [Symbol.iterator](): Iterator<[K, V]> {
        let index = 0;
        let entries = this.entries;

        return {
            next: () => {
                if (index < entries.length) {
                    const entry = entries[index];
                    index++;
                    return { value: [entry.getKey(), entry.getValue()], done: false };
                }
                else {
                    return { value: undefined, done: true };
                }
            }
        }
    }

    public forEach(callback: (value: V, key: K, map: VWMap<K, V>) => void): void {
        for (let entry of this.entries) {
            callback(entry.getValue(), entry.getKey(), this);
        }
    }
}
