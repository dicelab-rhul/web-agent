import { VWUserDifficulty } from "../../../common/VWUserDifficulty";
import { VWExistenceChecker } from "../../../utils/VWExistenceChecker";

export class VWUserDifficultyToggleButton {
    private button: HTMLButtonElement;
    private basicText: string;
    private advancedText: string;

    public constructor(difficulty: VWUserDifficulty, clickCallback: () => void) {
        this.basicText = "Difficulty up";
        this.advancedText = "Difficulty down";

        this.button = document.createElement("button");

        this.button.id = "user_difficulty_toggle_button";

        VWExistenceChecker.validateExistence(difficulty, "The user difficulty cannot be null or undefined.");

        this.button.classList.add(difficulty === VWUserDifficulty.BASIC ? "basic" : "advanced");
        this.button.innerText = difficulty === VWUserDifficulty.BASIC ? this.basicText : this.advancedText;

        this.button.addEventListener("click", () => {
            VWExistenceChecker.validateExistence(clickCallback, "The click callback cannot be null or undefined.")();

            this.toggleDifficulty();
        });
    }

    public toggleDifficulty(): void {
        if (this.button.classList.contains("basic")) {
            this.button.classList.remove("basic");
            this.button.classList.add("advanced");

            this.button.innerText = this.advancedText;
        }
        else {
            this.button.classList.remove("advanced");
            this.button.classList.add("basic");

            this.button.innerText = this.basicText;
        }
    }

    public showTooltip(): void {
        this.button.title = "Toggle the user difficulty.";
    }

    public hideTooltip(): void {
        this.button.title = "";
    }

    public getButton(): HTMLButtonElement {
        return this.button;
    }
}
