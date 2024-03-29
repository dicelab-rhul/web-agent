import { VWUserDifficulty } from "../../../model/common/VWUserDifficulty";
import { VWExistenceChecker } from "../../../model/utils/VWExistenceChecker";

import guiConfig from "../../common/gui.json";

const { userDifficultyToggleButtonData } = guiConfig.platformDivData.children.internalSimulationControlsDivData.children;

export class VWUserDifficultyToggleButton {
    private button: HTMLButtonElement;
    private basicText: string;
    private advancedText: string;

    public constructor(difficulty: VWUserDifficulty, showTooltip: boolean, clickCallback: () => void) {
        this.basicText = userDifficultyToggleButtonData.basicText;
        this.advancedText = userDifficultyToggleButtonData.advancedText;

        this.button = document.createElement("button");

        this.button.id = userDifficultyToggleButtonData.id;

        VWExistenceChecker.validateExistence(difficulty, "The user difficulty cannot be null or undefined.");

        this.button.classList.add(difficulty === VWUserDifficulty.BASIC ? userDifficultyToggleButtonData.classes[0] : userDifficultyToggleButtonData.classes[1]);
        this.button.textContent = difficulty === VWUserDifficulty.BASIC ? this.basicText : this.advancedText; // This is automatically escaped by the browser.

        this.showTooltipIfRequired(showTooltip);

        this.button.addEventListener("click", () => {
            VWExistenceChecker.validateExistence(clickCallback, "The click callback cannot be null or undefined.")();

            this.toggleDifficulty();
        });
    }

    public toggleDifficulty(): void {
        if (this.button.classList.contains(userDifficultyToggleButtonData.classes[0])) {
            this.button.classList.remove(userDifficultyToggleButtonData.classes[0]);
            this.button.classList.add(userDifficultyToggleButtonData.classes[1]);

            this.button.textContent = this.advancedText; // This is automatically escaped by the browser.
        }
        else {
            this.button.classList.remove(userDifficultyToggleButtonData.classes[1]);
            this.button.classList.add(userDifficultyToggleButtonData.classes[0]);

            this.button.textContent = this.basicText; // This is automatically escaped by the browser.
        }
    }

    private showTooltipIfRequired(showTooltip: boolean): void {
        if (showTooltip) {
            this.showTooltip();
        }
    }

    public showTooltip(): void {
        this.button.title = userDifficultyToggleButtonData.title;
    }

    public hideTooltip(): void {
        this.button.title = "";
    }

    public getButton(): HTMLButtonElement {
        return this.button;
    }
}
