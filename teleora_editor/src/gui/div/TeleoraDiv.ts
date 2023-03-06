import { TeleoraEditorDiv } from "./TeleoraEditorDiv";
import { TeleoraButtonsDiv } from "./TeleoraButtonsDiv";
import { TeleoraTabMarkersDiv } from "./TeleoraTabsDiv";

import teleoraGUIData from "../gui.json";

const { teleoraDivData } = teleoraGUIData;
const teleoraTabMarkersDivData = teleoraGUIData.teleoraDivData.children.teleoraTabMarkersDivData;
const tabsLimit: number = teleoraDivData.tabsLimit;

export class TeleoraDiv {
    private div: HTMLDivElement;
    private editorDivList: HTMLDivElement[]; // The tabs that are not currently displayed.
    private tabMarkersDiv: TeleoraTabMarkersDiv;
    private buttonsDiv: TeleoraButtonsDiv;

    public constructor() {
        this.div = document.createElement("div");

        this.div.id = teleoraDivData.id;

        this.editorDivList = [];

        const editorDiv: TeleoraEditorDiv = new TeleoraEditorDiv();

        this.editorDivList.push(editorDiv.getDiv());

        this.buttonsDiv = new TeleoraButtonsDiv(this.use.bind(this), this.save.bind(this), this.load.bind(this), this.clear.bind(this));

        this.div.appendChild(editorDiv.getDiv());

        this.tabMarkersDiv = new TeleoraTabMarkersDiv(this.editorDivList, this.displayTab.bind(this), this.addTab.bind(this), this.removeTab.bind(this));

        this.div.appendChild(this.tabMarkersDiv.getDiv());
        this.div.appendChild(this.buttonsDiv.getDiv());
    }

    public getDiv(): HTMLDivElement {
        return this.div;
    }

    public use(): void {
        // This will be replaced by a custom listener in the loaded environment.
        console.log("This will save the code.");
    }

    public save(): void {
        const lines: string[] = Array.from(this.editorDivList[0].getElementsByClassName("cm-line")).map((line: HTMLDivElement) => line.textContent);
        const blob: Blob = new Blob([lines.join("\n")], {type:"application/teleora"});
        const url: string = URL.createObjectURL(blob);
        const link: HTMLAnchorElement = document.createElement("a");

        link.setAttribute("href", url);
        link.setAttribute("download", "mind_core.tel");

        link.click();
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

        this.addTab();

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
        const currentTabIndex: number = Number(document.getElementsByClassName(teleoraTabMarkersDivData.children.teleoraTabMarkerData.classesDisplayed[0])[0].textContent);

        this.editorDivList[currentTabIndex] = new TeleoraEditorDiv().getDiv();

        this.displayTab(currentTabIndex);
    }

    public addTab(): void {
        if (this.editorDivList.length < tabsLimit) {
            // Create a new tab.
            const editorDiv: TeleoraEditorDiv = new TeleoraEditorDiv();

            // Add the tab to the list.
            this.editorDivList.push(editorDiv.getDiv());

            // Create a new tab marker.
            this.tabMarkersDiv.addTabMarker();

            // Highlight the new tab marker.
            this.tabMarkersDiv.highlightTabMarker(this.editorDivList.length - 1);

            // Display the new tab.
            this.div.replaceChild(editorDiv.getDiv(), this.div.firstChild);
        }
        else {
            console.log("You have reached the tab limit.");
        }
    }

    public displayTab(num: number): void {
        // Change the displayed tab.
        this.div.replaceChild(this.editorDivList[num], this.div.firstChild);

        // Hightlight the tab marker.
        this.tabMarkersDiv.highlightTabMarker(num);
    }

    public removeTab(num: number): void {
        if (this.editorDivList.length > 1) {
            this.editorDivList.splice(num, 1);
        }
        else {
            this.editorDivList[0] = new TeleoraEditorDiv().getDiv();
        }

        const newMarkersDiv: TeleoraTabMarkersDiv = new TeleoraTabMarkersDiv(this.editorDivList, this.displayTab.bind(this), this.addTab.bind(this), this.removeTab.bind(this))

        this.div.replaceChild(newMarkersDiv.getDiv(), this.tabMarkersDiv.getDiv());

        this.tabMarkersDiv = newMarkersDiv;

        this.displayTab(Math.min(num, this.editorDivList.length - 1));
    }
}
