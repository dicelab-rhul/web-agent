import { VWOrientation } from "../common/VWOrientation";

export class VWOrientationUtils {
    private constructor() {}

    public static getLeft(orientation: VWOrientation): VWOrientation {
        switch (orientation) {
            case VWOrientation.NORTH:
                return VWOrientation.WEST;
            case VWOrientation.SOUTH:
                return VWOrientation.EAST;
            case VWOrientation.EAST:
                return VWOrientation.NORTH;
            case VWOrientation.WEST:
                return VWOrientation.SOUTH;
            default:
                throw new Error("Invalid orientation.");
        }
    }

    public static getRight(orientation: VWOrientation): VWOrientation {
        switch (orientation) {
            case VWOrientation.NORTH:
                return VWOrientation.EAST;
            case VWOrientation.SOUTH:
                return VWOrientation.WEST;
            case VWOrientation.EAST:
                return VWOrientation.SOUTH;
            case VWOrientation.WEST:
                return VWOrientation.NORTH;
            default:
                throw new Error("Invalid orientation.");
        }
    }

    public static getOpposite(orientation: VWOrientation): VWOrientation {
        switch (orientation) {
            case VWOrientation.NORTH:
                return VWOrientation.SOUTH;
            case VWOrientation.SOUTH:
                return VWOrientation.NORTH;
            case VWOrientation.EAST:
                return VWOrientation.WEST;
            case VWOrientation.WEST:
                return VWOrientation.EAST;
            default:
                throw new Error("Invalid orientation.");
        }
    }
}
