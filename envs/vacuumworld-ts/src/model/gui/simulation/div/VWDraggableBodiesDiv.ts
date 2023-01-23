import { VWDiv } from "../../common/VWDiv";

export class VWDraggableBodiesDiv implements VWDiv {
    private div: HTMLDivElement; // Will have ID "draggable_bodies_div";
    private packed: boolean;

    public constructor() {
        this.div = document.createElement("div");
        this.div.id = "draggable_bodies_div";
        this.div.hidden = true;
        this.packed = false;
    }

    public pack(): void {
        // TODO: implement this method.
    }

    public unpack(): void {
        // TODO: implement this method.
    }

    public show(): void {
        // TODO: implement this method.
    }

    public hide(): void {
        // TODO: implement this method.
    }

    public getDiv(): HTMLDivElement {
        if (this.div === null || this.div === undefined) {
            throw new Error("Cannot get the draggable bodies div: it is null or undefined.");
        }
        else {
            return this.div;
        }
    }
}
