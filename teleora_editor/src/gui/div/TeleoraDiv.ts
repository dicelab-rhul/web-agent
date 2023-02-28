import { TeleoraEditorDiv } from "./TeleoraEditorDiv";
import { TeleoraButtonsDiv } from "./TeleoraButtonsDiv";

import teleoraGUIData from "../gui.json";

const { teleoraDivData } = teleoraGUIData;

export class TeleoraDiv {
    private div: HTMLDivElement;
    private hiddenEditorDivList: HTMLDivElement[]; // The tabs that are not currently displayed.
    private buttonsDiv: TeleoraButtonsDiv;

    public constructor() {
        this.div = document.createElement("div");

        this.div.id = teleoraDivData.id;

        this.hiddenEditorDivList = [];

        this.buttonsDiv = new TeleoraButtonsDiv(this.save.bind(this), this.load.bind(this), this.clear.bind(this), this.next.bind(this), this.previous.bind(this), this.newEditor.bind(this), this.close.bind(this));

        this.div.appendChild(new TeleoraEditorDiv().getDiv());
        this.div.appendChild(this.buttonsDiv.getDiv());
    }

    public getDiv(): HTMLDivElement {
        return this.div;
    }

    public newEditor(): void {
        this.hiddenEditorDivList.push(this.div.firstChild as HTMLDivElement);

        this.div.replaceChild(new TeleoraEditorDiv().getDiv(), this.div.firstChild);
    }

    public close(): void {
        this.div.removeChild(this.div.firstChild);

        if (this.hiddenEditorDivList.length === 0) {
            this.div.insertBefore(new TeleoraEditorDiv().getDiv(), this.div.firstChild);
        }
        else {
            this.div.insertBefore(this.hiddenEditorDivList[0], this.div.firstChild); // TODO: Do we want to always display the first editor when we remove an editor?

            this.hiddenEditorDivList.splice(0, 1);
        }
    }

    public save(): void {
        // This will be replaced by a custom listener in the loaded environment.
        console.log("This will save the code.");
    }

    public load(): void {
        let fileInput: HTMLInputElement = document.createElement("input");

        fileInput.type = "file";
        fileInput.accept = teleoraDivData.children.teleoraButtonsDivData.children.teleoraLoadButtonData.accept;

        fileInput.addEventListener("change", (event: Event) => {
            let file: File = (event.target as HTMLInputElement).files[0];

            let fileReader: FileReader = new FileReader();

            // TODO: Validate the file size.
            fileReader.addEventListener("load", (event: Event) => this.loadTeleoraFileToNewEditorTab(event));

            fileReader.readAsText(file);
        });

        fileInput.click();
        fileInput.remove();
    }

    private loadTeleoraFileToNewEditorTab(event: Event): void {
        let fileContents: string = (event.target as FileReader).result as string;

        this.newEditor();

        const lines: string[] = this.validateTeleoraFile(fileContents);
        const cmContent: HTMLDivElement = document.getElementsByClassName("cm-content")[0] as HTMLDivElement;

        cmContent.removeChild(cmContent.firstChild);

        lines.forEach((line: string) => {
            const cmLine: HTMLDivElement = document.createElement("div");

            cmLine.classList.add("cm-line");
            cmLine.textContent = line;

            cmContent.appendChild(cmLine);
        });

        (<HTMLDivElement>cmContent.firstChild).classList.add("cm-activeLine");
    }

    private validateTeleoraFile(fileContents: string): string[] {
        const lines: string[] = fileContents.split("\n");

        // TODO: Validate the file contents.

        return lines;
    }

    public clear(): void {
        this.div.replaceChild(new TeleoraEditorDiv().getDiv(), this.div.firstChild);
    }

    public next(): void {
        if (this.hiddenEditorDivList.length > 0) {
            this.hiddenEditorDivList.push(this.div.firstChild as HTMLDivElement);

            this.div.replaceChild(this.hiddenEditorDivList.shift(), this.div.firstChild);
        }
        else {
            console.log("Cannot switch: there is only one Teleora tab.")
        }
    }

    public previous(): void {
        if (this.hiddenEditorDivList.length > 0) {
            this.hiddenEditorDivList.unshift(this.div.firstChild as HTMLDivElement);

            this.div.replaceChild(this.hiddenEditorDivList.pop(), this.div.firstChild);
        }
        else {
            console.log("Cannot switch: there is only one Teleora tab.")
        }
    }
}
