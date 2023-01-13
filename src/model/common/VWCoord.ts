export class VWCoord {
    private x: bigint;
    private y: bigint;

    public constructor(x: bigint, y: bigint) {
        this.x = this.validateX(x);
        this.y = this.validateY(y);
    }

    private validateX(x: bigint): bigint {
        if (x === null || x === undefined) {
            throw new Error("The x coordinate cannot be null or undefined.");
        }

        return x;
    }

    private validateY(y: bigint): bigint {
        if (y === null || y === undefined) {
            throw new Error("The y coordinate cannot be null or undefined.");
        }

        return y;
    }

    public getX(): bigint {
        return this.x;
    }

    public getY(): bigint {
        return this.y;
    }

    public clone(): VWCoord {
        return new VWCoord(this.x, this.y);
    }

    public sum(other: VWCoord): VWCoord {
        return new VWCoord(this.x + other.x, this.y + other.y);
    }

    public increment(increment: bigint): VWCoord {
        return new VWCoord(this.x + increment, this.y + increment);
    }

    public sub(other: VWCoord): VWCoord {
        return new VWCoord(this.x - other.x, this.y - other.y);
    }

    public decrement(decrement: bigint): VWCoord {
        return new VWCoord(this.x - decrement, this.y - decrement);
    }

    public toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    public equals(other: object): boolean {
        if (other === null || other === undefined) {
            return false;
        }
        else if (this === other) {
            return true;
        }
        else if (!(other instanceof VWCoord)) {
            return false;
        }
        else {
            return this.x === other.x && this.y === other.y;
        }
    }
}
