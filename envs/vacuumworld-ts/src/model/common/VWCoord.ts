import { VWExistenceChecker } from "../utils/VWExistenceChecker";
import { Equalisable } from "./Equalisable";
import { VWOrientation } from "./VWOrientation";

export type VWCoordJSON = {
    x: string;
    y: string;
};

export class VWCoord implements Equalisable {
    private x: bigint;
    private y: bigint;

    public constructor(x: bigint, y: bigint) {
        this.x = VWExistenceChecker.validateExistence(x, "The x coordinate cannot be null or undefined.");
        this.y = VWExistenceChecker.validateExistence(y, "The y coordinate cannot be null or undefined.");
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
        if (!VWExistenceChecker.exists(orientation)) {
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

    public getLeftCoord(orientation: VWOrientation): VWCoord {
        if (!VWExistenceChecker.exists(orientation)) {
            throw new Error("The orientation cannot be null or undefined.");
        }
        else if (orientation === VWOrientation.NORTH) {
            return new VWCoord(this.x - 1n, this.y);
        }
        else if (orientation === VWOrientation.EAST) {
            return new VWCoord(this.x, this.y - 1n);
        }
        else if (orientation === VWOrientation.SOUTH) {
            return new VWCoord(this.x + 1n, this.y);
        }
        else if (orientation === VWOrientation.WEST) {
            return new VWCoord(this.x, this.y + 1n);
        }
        else {
            throw new Error("The orientation is invalid.");
        }
    }

    public getRightCoord(orientation: VWOrientation): VWCoord {
        if (!VWExistenceChecker.exists(orientation)) {
            throw new Error("The orientation cannot be null or undefined.");
        }
        else if (orientation === VWOrientation.NORTH) {
            return new VWCoord(this.x + 1n, this.y);
        }
        else if (orientation === VWOrientation.EAST) {
            return new VWCoord(this.x, this.y + 1n);
        }
        else if (orientation === VWOrientation.SOUTH) {
            return new VWCoord(this.x - 1n, this.y);
        }
        else if (orientation === VWOrientation.WEST) {
            return new VWCoord(this.x, this.y - 1n);
        }
        else {
            throw new Error("The orientation is invalid.");
        }
    }

    public getForwardLeftCoord(orientation: VWOrientation): VWCoord {
        if (!VWExistenceChecker.exists(orientation)) {
            throw new Error("The orientation cannot be null or undefined.");
        }
        else if (orientation === VWOrientation.NORTH) {
            return new VWCoord(this.x - 1n, this.y - 1n);
        }
        else if (orientation === VWOrientation.EAST) {
            return new VWCoord(this.x + 1n, this.y - 1n);
        }
        else if (orientation === VWOrientation.SOUTH) {
            return new VWCoord(this.x + 1n, this.y + 1n);
        }
        else if (orientation === VWOrientation.WEST) {
            return new VWCoord(this.x - 1n, this.y + 1n);
        }
        else {
            throw new Error("The orientation is invalid.");
        }
    }

    public getForwardRightCoord(orientation: VWOrientation): VWCoord {
        if (!VWExistenceChecker.exists(orientation)) {
            throw new Error("The orientation cannot be null or undefined.");
        }
        else if (orientation === VWOrientation.NORTH) {
            return new VWCoord(this.x + 1n, this.y - 1n);
        }
        else if (orientation === VWOrientation.EAST) {
            return new VWCoord(this.x + 1n, this.y + 1n);
        }
        else if (orientation === VWOrientation.SOUTH) {
            return new VWCoord(this.x - 1n, this.y + 1n);
        }
        else if (orientation === VWOrientation.WEST) {
            return new VWCoord(this.x - 1n, this.y - 1n);
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

    public toJsonObject(): VWCoordJSON {
        return {
            x: this.x.toString(),
            y: this.y.toString()
        };
    }

    public static fromJsonObject(data: VWCoordJSON): VWCoord {
        if (!VWExistenceChecker.exists(data)) {
            throw new Error("The JSON representation cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.exists(data.x)) {
            throw new Error("The x coordinate cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.exists(data.y)) {
            throw new Error("The y coordinate cannot be null or undefined.");
        }
        else {
            return new VWCoord(BigInt(data.x), BigInt(data.y));
        }
    }

    public toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    public equals(other: any): boolean {
        if (!VWExistenceChecker.exists(other)) {
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
        if (!VWExistenceChecker.exists(coordString)) {
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
