import { VWExistenceChecker } from "../../../utils/VWExistenceChecker";
import { VWDiv } from "../../common/VWDiv";

export class VWInternalSimulationControlsDiv implements VWDiv {
    private div: HTMLDivElement; // Will have ID "simulation_controls_div";
    private packed: boolean;

    public constructor() {
        this.div = document.createElement("div");
        this.div.id = "simulation_controls_div"; // TODO: change this ID to "internal_simulation_controls_div", and propagate.;
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
        return VWExistenceChecker.validateExistence(this.div, "Cannot get the internal simulation controls div: the div is null or undefined.");
    }

    public isPacked(): boolean {
        return this.packed;
    }

    public isHidden(): boolean {
        return this.getDiv().hidden;
    }
}
