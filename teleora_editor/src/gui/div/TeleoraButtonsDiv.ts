import { TeleoraButton } from "../buttons/TeleoraButton";
import teleoraGUIData from "../gui.json";

const teleoraButtonsDivData = teleoraGUIData.teleoraDivData.children.teleoraButtonsDivData;

export class TeleoraButtonsDiv {
    private callbacks: (() => void)[]
    private buttonsDiv: HTMLDivElement;

    public constructor(useCallback: () => void, saveCallback: () => void, loadCallback: () => void, clearCallback: () => void) {
        this.buttonsDiv = document.createElement("div");

        this.buttonsDiv.id = teleoraButtonsDivData.id;

        this.buttonsDiv.classList.add(...teleoraButtonsDivData.classes);

        this.callbacks = [useCallback, saveCallback, loadCallback, clearCallback];

        const buttonsData = Object.values(teleoraButtonsDivData.children);

        if (buttonsData.length !== this.callbacks.length) {
            throw new Error("There is a mismatch between the number of buttons and the number of callbacks.");
        }

        for (let i = 0; i < buttonsData.length; i++) {
            this.buttonsDiv.appendChild(new TeleoraButton(buttonsData[i].id, buttonsData[i].text, buttonsData[i].title, buttonsData[i].classes, this.callbacks[i]).getButton());
        }
    }

    public getDiv(): HTMLDivElement {
        return this.buttonsDiv;
    }
}
