import { VWExistenceChecker } from "../../../utils/VWExistenceChecker";
import { VWDiv } from "../../common/VWDiv";
import { VWOptionsDialog } from "../dialogs/VWOptionsDialog";

export class VWOptionsDialogDiv implements VWDiv {
    private div: HTMLDivElement; // Will have ID "options_dialog_div";
    private optionsDialog: VWOptionsDialog;
    private okButtonCallback: () => void;
    private cancelButtonCallback: () => void;
    private stateToLoadInputCallback: () => void;
    private teleoraInputCallback: () => void;
    private packed: boolean;

    public constructor(okButtonCallback: () => void, cancelButtonCallback: () => void, stateToLoadInputCallback: () => void, teleoraInputCallback: () => void) {
        this.div = document.createElement("div");
        this.div.id = "options_dialog_div";
        this.div.hidden = true;
        this.okButtonCallback = okButtonCallback;
        this.cancelButtonCallback = cancelButtonCallback;
        this.stateToLoadInputCallback = stateToLoadInputCallback;
        this.teleoraInputCallback = teleoraInputCallback;
        this.optionsDialog = new VWOptionsDialog(this.okButtonCallback, this.cancelButtonCallback, this.stateToLoadInputCallback, this.teleoraInputCallback);
        this.packed = false;
    }

    public pack(): void {
        if (this.packed) {
            console.log("The options dialog div is already packed.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot pack: the options dialog div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot pack: the options dialog div is not hidden (it must be before packing it).");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.optionsDialog)) {
            throw new Error("Cannot pack: the options dialog is null or undefined.");
        }
        else {
            this.optionsDialog.pack();
            this.div.appendChild(this.optionsDialog.getDialog());

            this.packed = true;
        }
    }

    public unpack(): void {
        if (!this.packed) {
            console.log("The options dialog div is already unpacked.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot unpack: the options dialog div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot unpack: the options dialog div is not hidden (it must be before unpacking it).");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.optionsDialog)) {
            throw new Error("Cannot unpack: the options dialog is null or undefined.");
        }
        else {
            this.div.removeChild(this.optionsDialog.getDialog());
            this.optionsDialog.unpack();

            this.packed = false;
        }
    }

    public show(): void {
        if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot show: the options dialog div is null or undefined.");
        }
        else if (!this.div.hidden) {
            console.log("The options dialog div is already shown.");
        }
        else if (!this.packed) {
            throw new Error("Cannot show: the options dialog div is not packed.");
        }
        else if (!this.optionsDialog.getDialog().isConnected) {
            throw new Error("Cannot show: the options dialog is not connected.");
        }
        else {
            this.optionsDialog.getDialog().showModal();
            this.div.hidden = false;
        }
    }

    public hide(): void {
        if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot hide: the options dialog div is null or undefined.");
        }
        else if (this.div.hidden) {
            console.log("The options dialog div is already hidden.");
        }
        else if (!this.packed) {
            throw new Error("Cannot hide: the options dialog div is not packed.");
        }
        else {
            this.div.hidden = true;
        }
    }

    public getDiv(): HTMLDivElement {
        return VWExistenceChecker.validateExistence(this.div, "Cannot get the options dialog div: the div is null or undefined.");
    }

    public isPacked(): boolean {
        return this.packed;
    }

    public isHidden(): boolean {
        return this.getDiv().hidden;
    }

    public showTooltips(): void {
        if (this.packed) {
            this.optionsDialog.showTooltips();
        }
    }

    public hideTooltips(): void {
        if (this.packed) {
            this.optionsDialog.hideTooltips();
        }
    }
}
