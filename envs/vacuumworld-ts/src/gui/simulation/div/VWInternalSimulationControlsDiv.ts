import { VWCoord } from "../../../model/common/VWCoord";
import { VWUserDifficulty } from "../../../model/common/VWUserDifficulty";
import { VWExistenceChecker } from "../../../model/utils/VWExistenceChecker";
import { VWDiv } from "../../common/VWDiv";
import { VWGridResizeButton } from "../buttons/VWGridResizeButton";
import { VWUserDifficultyToggleButton } from "../buttons/VWUserDifficultyToggleButton";

import guiConfig from "../../common/gui.json";

const { internalSimulationControlsDivData } = guiConfig.platformDivData.children;
const { enlargeGridButtonData, shrinkGridButtonData, selectedCellInfoSpanData } = internalSimulationControlsDivData.children;

export class VWInternalSimulationControlsDiv implements VWDiv {
    private div: HTMLDivElement; // Will have ID "internal_simulation_controls_div";
    private userDifficultyToggleButton: VWUserDifficultyToggleButton;
    private enlargeGridButton: VWGridResizeButton;
    private shrinkGridButton: VWGridResizeButton;
    private selectedCellInfoSpan: HTMLSpanElement; // Will have ID "selected_cell_info_div";
    private gridSize: number;
    private packed: boolean;

    public constructor(userDifficulty: VWUserDifficulty, showTooltips: boolean, userDiffCallback: () => void, sizeUpCallback: () => void, sizeDownCallback: () => void) {
        this.div = document.createElement("div");
        this.div.id = internalSimulationControlsDivData.id;
        this.div.hidden = true;

        this.userDifficultyToggleButton = new VWUserDifficultyToggleButton(userDifficulty, showTooltips, userDiffCallback);
        this.enlargeGridButton = new VWGridResizeButton(enlargeGridButtonData.id, enlargeGridButtonData.text, enlargeGridButtonData.title, showTooltips, sizeUpCallback);
        this.shrinkGridButton = new VWGridResizeButton(shrinkGridButtonData.id, shrinkGridButtonData.text, shrinkGridButtonData.title, showTooltips, sizeDownCallback);

        this.selectedCellInfoSpan = document.createElement("span");
        this.selectedCellInfoSpan.id = selectedCellInfoSpanData.id;
        this.selectedCellInfoSpan.hidden = true;

        this.packed = false;
    }

    public setGridSize(gridSize: number): void {
        this.gridSize = VWExistenceChecker.validateExistence(gridSize, "The grid size cannot be null or undefined.");
    }

    public showSelectedCellInfo(coord: VWCoord): void {
        let coordString: string = coord.toString();

        this.selectedCellInfoSpan.textContent = `Selected: ${coordString}`; // This is automatically escaped by the browser.
        this.selectedCellInfoSpan.hidden = false;
    }

    public resetSelectedCellInfo(): void {
        this.selectedCellInfoSpan.textContent = "Selected: (-, -)"; // This is automatically escaped by the browser.
    }

    public pack(): void {
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
        else if (!VWExistenceChecker.allArgumentsExist(this.enlargeGridButton)) {
            throw new Error("Cannot pack: the enlarge grid button is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.shrinkGridButton)) {
            throw new Error("Cannot pack: the shrink grid button is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.selectedCellInfoSpan)) {
            throw new Error("Cannot pack: the selected cell info div is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.gridSize)) {
            throw new Error("Cannot pack: the grid size is null or undefined.");
        }
        else {
            this.div.appendChild(this.userDifficultyToggleButton.getButton());
            this.div.appendChild(this.enlargeGridButton.getButton());
            this.div.appendChild(this.shrinkGridButton.getButton());
            this.div.appendChild(this.selectedCellInfoSpan);

            this.packed = true;
        }
    }

    public unpack(): void {
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
        else if (!VWExistenceChecker.allArgumentsExist(this.enlargeGridButton)) {
            throw new Error("Cannot unpack: the enlarge grid button is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.shrinkGridButton)) {
            throw new Error("Cannot unpack: the shrink grid button is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.selectedCellInfoSpan)) {
            throw new Error("Cannot unpack: the selected cell info div is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.gridSize)) {
            throw new Error("Cannot unpack: the grid size is null or undefined.");
        }
        else {
            this.div.removeChild(this.userDifficultyToggleButton.getButton());
            this.div.removeChild(this.enlargeGridButton.getButton());
            this.div.removeChild(this.shrinkGridButton.getButton());

            this.packed = false;
        }
    }

    public show(): void {
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
