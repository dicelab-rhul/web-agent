import { VWInitialViewButton } from "../buttons/VWInitialViewButton";
import { VWDiv } from "../../common/VWDiv";
import { VWExistenceChecker } from "../../../model/utils/VWExistenceChecker";

import guiConfig from "../../common/gui.json";

const { initialViewButtonsDivData } = guiConfig.platformDivData.children;
const { startBtn, optionsBtn, guideBtn } = initialViewButtonsDivData.children;

export class VWInitialViewButtonsDiv implements VWDiv {
    private div: HTMLDivElement; // Will have ID "initial_view_buttons_div";
    private startButton: VWInitialViewButton; // Will have ID "start_button";
    private optionsButton: VWInitialViewButton; // Will have ID "options_button";
    private guideButton: VWInitialViewButton; // Will have ID "guide_button";
    private packed: boolean;

    public constructor(startCallback: () => void, optionsCallback: () => void, guideCallback: () => void) {
        if (!VWExistenceChecker.allArgumentsExist(startCallback)) {
            throw new Error("The start callback cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(optionsCallback)) {
            throw new Error("The options callback cannot be null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(guideCallback)) {
            throw new Error("The guide callback cannot be null or undefined.");
        }
        else {
            this.div = document.createElement("div");
            this.div.id = initialViewButtonsDivData.id;
            this.div.hidden = true;

            this.startButton = new VWInitialViewButton(startBtn.text, startBtn.id, startBtn.title, startCallback.bind(this), startBtn.classes);
            this.optionsButton = new VWInitialViewButton(optionsBtn.text, optionsBtn.id, optionsBtn.title, optionsCallback.bind(this), optionsBtn.classes);
            this.guideButton = new VWInitialViewButton(guideBtn.text, guideBtn.id, guideBtn.title, guideCallback.bind(this), guideBtn.classes);

            this.packed = false;
        }
    }

    public pack(): void {
        if (this.packed) {
            console.log("The initial view buttons div is already packed.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot pack: the initial view buttons div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot pack: the initial view buttons div is not hidden (it must be before packing it).");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.startButton)) {
            throw new Error("Cannot pack: the start button is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.guideButton)) {
            throw new Error("Cannot pack: the guide button is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.optionsButton)) {
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
        else if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot unpack: the initial view buttons div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot unpack: the initial view buttons div is not hidden (it must be before unpacking it).");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.startButton)) {
            throw new Error("Cannot unpack: the start button is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.guideButton)) {
            throw new Error("Cannot unpack: the guide button is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.optionsButton)) {
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
        if (!VWExistenceChecker.allArgumentsExist(this.div)) {
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
        if (!VWExistenceChecker.allArgumentsExist(this.div)) {
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

    public showTooltips(): void {
        this.startButton.showTooltip();
        this.optionsButton.showTooltip();
        this.guideButton.showTooltip();
    }

    public hideTooltips(): void {
        this.startButton.hideTooltip();
        this.optionsButton.hideTooltip();
        this.guideButton.hideTooltip();
    }
}
