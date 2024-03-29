import { VWExistenceChecker } from "../../../model/utils/VWExistenceChecker";

export class VWGridResizeButton {
    private button: HTMLButtonElement;
    private title: string;

    public constructor(buttonID: string, text: string, title: string, showTooltip: boolean, clickCallback: () => void) {
        this.button = document.createElement("button");

        this.button.id = VWExistenceChecker.validateExistence(buttonID, "The button ID cannot be null or undefined.");
        this.button.textContent = VWExistenceChecker.validateExistence(text, "The button text cannot be null or undefined."); // This is automatically escaped by the browser.

        this.button.addEventListener("click", () => {
            VWExistenceChecker.validateExistence(clickCallback, "The click callback cannot be null or undefined.")();
        });

        this.title = VWExistenceChecker.validateExistence(title, "The button tooltip text cannot be null or undefined.");

        this.showTooltipIfRequired(showTooltip);
    }

    private showTooltipIfRequired(showTooltip: boolean): void {
        if (showTooltip) {
            this.showTooltip();
        }
    }

    public showTooltip(): void {
        this.button.title = this.title;
    }

    public hideTooltip(): void {
        this.button.title = "";
    }

    public getButton(): HTMLButtonElement {
        return this.button;
    }
}
