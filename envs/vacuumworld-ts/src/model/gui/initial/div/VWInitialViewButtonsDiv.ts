import { VWInitialViewButton } from "../buttons/VWInitialViewButton";
import { VWDiv } from "../../common/VWDiv";

export class VWInitialViewButtonsDiv implements VWDiv {
    private div: HTMLDivElement; // Will have ID "initial_view_buttons_div";
    private startButton: VWInitialViewButton; // Will have ID "start_button";
    private optionsButton: VWInitialViewButton; // Will have ID "options_button";
    private guideButton: VWInitialViewButton; // Will have ID "guide_button";
    private packed: boolean;

    public constructor(startCallback: () => void, optionsCallback: () => void, guideCallback: () => void) {
        if (startCallback === null || startCallback === undefined) {
            throw new Error("The start callback cannot be null or undefined.");
        }
        else if (optionsCallback === null || optionsCallback === undefined) {
            throw new Error("The options callback cannot be null or undefined.");
        }
        else if (guideCallback === null || guideCallback === undefined) {
            throw new Error("The guide callback cannot be null or undefined.");
        }
        else {
            this.div = document.createElement("div");
            this.div.id = "initial_view_buttons_div";
            this.div.hidden = true;

            this.startButton = new VWInitialViewButton("Start", "start_button", startCallback.bind(this), ["initial_buttons"]);
            this.optionsButton = new VWInitialViewButton("Options", "options_button", optionsCallback.bind(this), ["initial_buttons"]);
            this.guideButton = new VWInitialViewButton("Guide", "guide_button", guideCallback.bind(this), ["initial_buttons"]);

            this.packed = false;
        }
    }

    public pack(): void {
        if (this.packed) {
            console.log("The initial view buttons div is already packed.");
        }
        else if (this.div === null || this.div === undefined) {
            throw new Error("Cannot pack: the div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot pack: the initial view buttons div is not hidden (it must be before packing it).");
        }
        else if (this.startButton === null || this.startButton === undefined) {
            throw new Error("Cannot pack: the start button is null or undefined.");
        }
        else if (this.guideButton === null || this.guideButton === undefined) {
            throw new Error("Cannot pack: the guide button is null or undefined.");
        }
        else if (this.optionsButton === null || this.optionsButton === undefined) {
            throw new Error("Cannot pack: the options button is null or undefined.");
        }
        else {
            this.div.appendChild(this.startButton.getButton());
            this.div.appendChild(this.optionsButton.getButton());
            this.div.appendChild(this.guideButton.getButton());
            this.packed = true;
        }
    }

    public unpack(): void {
        if (!this.packed) {
            console.log("The initial view buttons div is already unpacked.");
        }
        else if (this.div === null || this.div === undefined) {
            throw new Error("Cannot unpack: the div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot unpack: the initial view buttons div is not hidden (it must be before unpacking it).");
        }
        else if (this.startButton === null || this.startButton === undefined) {
            throw new Error("Cannot unpack: the start button is null or undefined.");
        }
        else if (this.guideButton === null || this.guideButton === undefined) {
            throw new Error("Cannot unpack: the guide button is null or undefined.");
        }
        else if (this.optionsButton === null || this.optionsButton === undefined) {
            throw new Error("Cannot unpack: the options button is null or undefined.");
        }
        else {
            this.div.removeChild(this.startButton.getButton());
            this.div.removeChild(this.guideButton.getButton());
            this.div.removeChild(this.optionsButton.getButton());
            this.packed = false;
        }
    }

    public show(): void {
        if (this.div === null || this.div === undefined) {
            throw new Error("Cannot show: the div is null or undefined.");
        }
        else if (!this.div.hidden) {
            console.log("The initial view buttons div is already shown.");
        }
        else if (!this.packed) {
            throw new Error("Cannot show: the initial view buttons div is not packed.");
        }
        else {
            this.div.hidden = false;
        }
    }

    public hide(): void {
        if (this.div === null || this.div === undefined) {
            throw new Error("Cannot hide: the div is null or undefined.");
        }
        else if (this.div.hidden) {
            console.log("The initial view buttons div is already hidden.");
        }
        else if (!this.packed) {
            throw new Error("Cannot hide: the initial buttons view div is not packed.");
        }
        else {
            this.div.hidden = true;
        }
    }

    public getDiv(): HTMLDivElement {
        if (this.div === null || this.div === undefined) {
            throw new Error("Cannot get the div: the div is null or undefined.");
        }
        else {
            return this.div;
        }
    }
}
