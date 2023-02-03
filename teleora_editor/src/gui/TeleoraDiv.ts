import { TeleoraEditorDiv } from "./TeleoraEditorDiv";

import teleoraGUIData from "./gui.json";

const { teleoraDivData } = teleoraGUIData;

export class TeleoraDiv {
    private div: HTMLDivElement;
    private editorDiv: TeleoraEditorDiv;
    private saveButtonDiv: HTMLDivElement;
    private saveButton: HTMLButtonElement;

    constructor() {
        this.div = document.createElement("div");

        this.div.id = teleoraDivData.id;

        this.editorDiv = new TeleoraEditorDiv();

        this.saveButtonDiv = document.createElement("div");
        this.saveButtonDiv.id = teleoraDivData.children.teleoraSaveButtonDivData.id;

        this.saveButton = document.createElement("button");
        this.saveButton.textContent = teleoraDivData.children.teleoraSaveButtonDivData.children.teleoraSaveButtonData.text;
        this.saveButton.id = teleoraDivData.children.teleoraSaveButtonDivData.children.teleoraSaveButtonData.id;

        this.saveButtonDiv.appendChild(this.saveButton);

        this.div.appendChild(this.editorDiv.getDiv());
        this.div.appendChild(this.saveButtonDiv);
    }

    public getDiv(): HTMLDivElement {
        return this.div;
    }
}
