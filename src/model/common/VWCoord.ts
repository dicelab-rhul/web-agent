import { VWOrientation } from "./VWOrientation";

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

    public getForwardCoord(orientation: VWOrientation): VWCoord {
        if (orientation === null || orientation === undefined) {
            throw new Error("The orientation cannot be null or undefined.");
        }
        else if (orientation === VWOrientation.NORTH) {
            return new VWCoord(this.x, this.y - 1n);
        }
        else if (orientation === VWOrientation.EAST) {
            return new VWCoord(this.x + 1n, this.y);
        }
        else if (orientation === VWOrientation.SOUTH) {
            return new VWCoord(this.x, this.y + 1n);
        }
        else if (orientation === VWOrientation.WEST) {
            return new VWCoord(this.x - 1n, this.y);
        }
        else {
            throw new Error("The orientation is invalid.");
        }
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

    public static fromString(coordString: string): VWCoord {
        if (coordString === null || coordString === undefined) {
            throw new Error("The coordinate string cannot be null or undefined.");
        }
        else if (coordString.length < 5) {
            throw new Error("The coordinate string is invalid.");
        }
        else {
            const xString: string = coordString.substring(1, coordString.indexOf(","));
            const yString: string = coordString.substring(coordString.indexOf(",") + 2, coordString.length - 1);

            return new VWCoord(BigInt(xString), BigInt(yString));
        }
    }
}
