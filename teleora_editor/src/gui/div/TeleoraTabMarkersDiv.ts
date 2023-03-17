import teleoraGUIData from "../gui.json";

const teleoraTabMarkersDivData = teleoraGUIData.teleoraDivData.children.teleoraTabMarkersDivData;

// TODO: Add a way to change the tabs names.
export class TeleoraTabMarkersDiv {
    private div: HTMLDivElement;
    private tabCount: number;
    private clickCallback: (num: number) => void;
    private newTabCallback: () => void;
    private closeTabCallback: (num: number) => void;

    public constructor(existingTabs: HTMLDivElement[], clickCallback: (num: number) => void, newTabCallback: () => void, closeTabCallback: (num: number) => void) {
        this.tabCount = 0;

        this.clickCallback = clickCallback;
        this.newTabCallback = newTabCallback;
        this.closeTabCallback = closeTabCallback;

        this.div = document.createElement("div");

        this.div.id = teleoraTabMarkersDivData.id;
        this.div.classList.add(...teleoraTabMarkersDivData.classes);

        this.addNewTabMarker();

        this.displayTabMarkers(existingTabs);
    }

    public displayTabMarkers(existingTabs: HTMLDivElement[]): number {
        for (const _ of existingTabs) {
            this.addTabMarker();
        }

        this.highlightTabMarker(0);

        return existingTabs.length;
    }

    public addTabMarker(): void {
        const tabMarker: HTMLDivElement = document.createElement("div");

        tabMarker.classList.add(...teleoraTabMarkersDivData.children.teleoraTabMarkerData.classes);

        tabMarker.textContent = String(this.tabCount);

        const tabNum: number = this.tabCount;

        tabMarker.addEventListener("click", () => this.clickCallback(tabNum));
        tabMarker.addEventListener("dblclick", () => this.closeTabCallback(tabNum));

        this.tabCount++;

        this.div.insertBefore(tabMarker, this.div.lastChild);
    }

    public addNewTabMarker(): void {
        const tabMarker: HTMLDivElement = document.createElement("div");

        tabMarker.classList.add(...teleoraTabMarkersDivData.children.teleoraTabMarkerData.classes);

        tabMarker.textContent = "+";

        tabMarker.addEventListener("click", () => this.newTabCallback());

        this.div.appendChild(tabMarker);
    }

    public highlightTabMarker(num: number): void {
        const tabList: HTMLCollectionOf<HTMLDivElement> = this.div.children as HTMLCollectionOf<HTMLDivElement>;

        for (const element of tabList) {
            if (element.textContent !== "+") {
                element.classList.remove(...teleoraTabMarkersDivData.children.teleoraTabMarkerData.classesDisplayed);
            }
        }

        tabList[num].classList.add(...teleoraTabMarkersDivData.children.teleoraTabMarkerData.classesDisplayed);
    }

    public getDiv(): HTMLDivElement {
        return this.div;
    }
}
