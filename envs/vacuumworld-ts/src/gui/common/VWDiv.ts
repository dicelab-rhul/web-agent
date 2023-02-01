import { VWHideable } from "./VWHideable";
import { VWPackable } from "./VWPackable";

export interface VWDiv extends VWPackable, VWHideable {
    getDiv(): HTMLDivElement;
}
