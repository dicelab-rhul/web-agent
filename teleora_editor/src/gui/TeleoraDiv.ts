import { TeleoraEditorDiv } from "./TeleoraEditorDiv";

export class TeleoraDiv {
    private div: HTMLDivElement;
    private editorDiv: TeleoraEditorDiv;
    private saveButtonDiv: HTMLDivElement;
    private saveButton: HTMLButtonElement;

    constructor() {
        this.div = document.createElement("div");

        this.div.id = "teleora_div";

        this.editorDiv = new TeleoraEditorDiv();

        this.saveButtonDiv = document.createElement("div");
        this.saveButtonDiv.id = "teleora_save_button_div";

        this.saveButton = document.createElement("button");
        this.saveButton.textContent = "Save";
        this.saveButton.id = "teleora_save_button";

        this.saveButtonDiv.appendChild(this.saveButton);

        this.div.appendChild(this.editorDiv.getDiv());
        this.div.appendChild(this.saveButtonDiv);
    }

    public getDiv(): HTMLDivElement {
        return this.div;
    }
}
