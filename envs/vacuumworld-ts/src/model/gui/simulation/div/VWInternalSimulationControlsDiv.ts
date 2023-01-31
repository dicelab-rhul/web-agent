import { VWUserDifficulty } from "../../../common/VWUserDifficulty";
import { VWExistenceChecker } from "../../../utils/VWExistenceChecker";
import { VWDiv } from "../../common/VWDiv";
import { VWUserDifficultyToggleButton } from "../buttons/VWUserDifficultyToggleButton";

export class VWInternalSimulationControlsDiv implements VWDiv {
    private div: HTMLDivElement; // Will have ID "internal_simulation_controls_div";
    private userDifficultyToggleButton: VWUserDifficultyToggleButton;
    private gridSize: number;
    private packed: boolean;

    public constructor(userDifficulty: VWUserDifficulty, userDifficultyToggleButtonClickCallback: () => void) {
        this.div = document.createElement("div");
        this.div.id = "internal_simulation_controls_div";
        this.div.hidden = true;

        this.userDifficultyToggleButton = new VWUserDifficultyToggleButton(userDifficulty, userDifficultyToggleButtonClickCallback);

        this.packed = false;
    }

    public setGridSize(gridSize: number): void {
        this.gridSize = VWExistenceChecker.validateExistence(gridSize, "The grid size cannot be null or undefined.");
    }

    public pack(): void {
        // TODO: include the slider.
        if (this.packed) {
            console.log("The internal simulation controls div is already packed.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot pack: the internal simulation controls div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot pack: the internal simulation controls div is not hidden (it must be before packing it).");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.userDifficultyToggleButton)) {
            throw new Error("Cannot pack: the user difficulty toggle button is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.gridSize)) {
            throw new Error("Cannot pack: the grid size is null or undefined.");
        }
        else {
            this.div.appendChild(this.userDifficultyToggleButton.getButton());

            this.packed = true;
        }
    }

    public unpack(): void {
        // TODO: include the slider.
        if (!this.packed) {
            console.log("The internal simulation controls div is already unpacked.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot unpack: the internal simulation controls div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot unpack: the internal simulation controls div is not hidden (it must be before unpacking it).");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.userDifficultyToggleButton)) {
            throw new Error("Cannot unpack: the user difficulty toggle button is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.gridSize)) {
            throw new Error("Cannot unpack: the grid size is null or undefined.");
        }
        else {
            this.div.removeChild(this.userDifficultyToggleButton.getButton());

            this.packed = false;
        }
    }

    public show(): void {
        // TODO: include the slider.
        if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot show: the internal simulation controls div is null or undefined.");
        }
        else if (!this.div.hidden) {
            console.log("The internal simulation controls div is already shown.");
        }
        else if (!this.packed) {
            throw new Error("Cannot show: the internal simulation controls div is not packed.");
        }
        else {
            this.div.hidden = false;
        }
    }

    public hide(): void {
        // TODO: include the slider.
        if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot hide: the internal simulation controls div is null or undefined.");
        }
        else if (this.div.hidden) {
            console.log("The internal simulation controls div is already hidden.");
        }
        else if (!this.packed) {
            throw new Error("Cannot hide: the internal simulation controls div is not packed.");
        }
        else {
            this.div.hidden = true;
        }
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
