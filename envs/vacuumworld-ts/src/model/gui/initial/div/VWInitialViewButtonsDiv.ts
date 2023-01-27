import { VWInitialViewButton } from "../buttons/VWInitialViewButton";
import { VWDiv } from "../../common/VWDiv";
import { VWExistenceChecker } from "../../../utils/VWExistenceChecker";

export class VWInitialViewButtonsDiv implements VWDiv {
    private div: HTMLDivElement; // Will have ID "initial_view_buttons_div";
    private startButton: VWInitialViewButton; // Will have ID "start_button";
    private optionsButton: VWInitialViewButton; // Will have ID "options_button";
    private guideButton: VWInitialViewButton; // Will have ID "guide_button";
    private packed: boolean;

    public constructor(startCallback: () => void, optionsCallback: () => void, guideCallback: () => void) {
        if (!VWExistenceChecker.exists(startCallback)) {
            throw new Error("The start callback cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.exists(optionsCallback)) {
            throw new Error("The options callback cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.exists(guideCallback)) {
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
        else if (!VWExistenceChecker.exists(this.div)) {
            throw new Error("Cannot pack: the initial view buttons div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot pack: the initial view buttons div is not hidden (it must be before packing it).");
        }
        else if (!VWExistenceChecker.exists(this.startButton)) {
            throw new Error("Cannot pack: the start button is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.guideButton)) {
            throw new Error("Cannot pack: the guide button is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.optionsButton)) {
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
        else if (!VWExistenceChecker.exists(this.div)) {
            throw new Error("Cannot unpack: the initial view buttons div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot unpack: the initial view buttons div is not hidden (it must be before unpacking it).");
        }
        else if (!VWExistenceChecker.exists(this.startButton)) {
            throw new Error("Cannot unpack: the start button is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.guideButton)) {
            throw new Error("Cannot unpack: the guide button is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.optionsButton)) {
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
        if (!VWExistenceChecker.exists(this.div)) {
            throw new Error("Cannot show: the initial view buttons div is null or undefined.");
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
        if (!VWExistenceChecker.exists(this.div)) {
            throw new Error("Cannot hide: the initial view buttons div is null or undefined.");
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
        return VWExistenceChecker.validateExistence(this.div, "Cannot get the initial view buttons div: the div is null or undefined.");
    }

    public isPacked(): boolean {
        return this.packed;
    }

    public isHidden(): boolean {
        return this.getDiv().hidden;
    }
}
