import { VWDiv } from "../../common/VWDiv";

export class VWInternalSimulationControlsDiv implements VWDiv {
    private div: HTMLDivElement; // Will have ID "simulation_controls_div";
    private packed: boolean;

    public constructor() {
        this.div = document.createElement("div");
        this.div.id = "simulation_controls_div";
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
            throw new Error("Cannot get the simulation controls div: it is null or undefined.");
        }
        else {
            return this.div;
        }
    }
}
