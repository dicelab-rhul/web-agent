import { VWExistenceChecker } from "../../../model/utils/VWExistenceChecker";

export class VWInitialViewButton {
    private callback: () => void;
    private button: HTMLButtonElement;
    private tooltip: string;

    public constructor(text: string, id: string, title: string, callback: () => void, classes?: string[]) {
        if (!VWExistenceChecker.allArgumentsExist(text)) {
            throw new Error("The text of the button cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(id)) {
            throw new Error("The id of the button cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(title)) {
            throw new Error("The title of the button cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(callback)) {
            throw new Error("The callback of the button cannot be null or undefined.");
        }
        else {
            this.callback = callback;

            this.button = document.createElement("button");
            this.button.id = id;
            this.button.textContent = text;

            this.button.addEventListener("click", this.callback);

            this.tooltip = title;

            this.addClasses(classes);
            this.showTooltip(); // The tooltip is shown by default.
        }
    }

    private addClasses(classes: string[]): void {
        if (VWExistenceChecker.allValuesExist(classes)) {
            this.button.classList.add(...classes);
        }
    }

    public getButton(): HTMLButtonElement {
        return this.button;
    }

    public showTooltip() {
        this.button.title = this.tooltip;
    }

    public hideTooltip() {
        this.button.title = "";
    }
}
