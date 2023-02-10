import { VWExistenceChecker } from "../../../model/utils/VWExistenceChecker";
import { VWHTMLUtils } from "../../common/VWHTMLUtils";
import { VWPackable } from "../../common/VWPackable";
import { VWInitialViewButton } from "../buttons/VWInitialViewButton";

import guiConfig from "../../common/gui.json";
import vwActions from "../../../model/actions/vwactions.json";

const { optionsDialogData } = guiConfig.platformDivData.children.optionsDialogDivData.children;

export class VWOptionsDialog implements VWPackable {
    private dialog: HTMLDialogElement; // Will have ID "options_dialog";
    private speedSelectorDiv: HTMLDivElement; // Will have ID "speed_selector_div";
    private autoplaySelectorDiv: HTMLDivElement; // Will have ID "autoplay_checkbox_div";
    private stateToLoadSelectorDiv: HTMLDivElement; // Will have ID "state_to_load_input_div";
    private stateToLoadInputCallback: () => void;
    private tooltipsSelectorDiv: HTMLDivElement; // Will have ID "tooltips_checkbox_div";
    private maxNumberOfCyclesSelectorDiv: HTMLDivElement; // Will have ID "max_number_of_cycles_input_div";
    private effortsSelectorDiv: HTMLDivElement; // Will have ID "efforts_inputs_div";
    private teleoraSelectorDiv: HTMLDivElement; // Will have ID "teleora_input_div";
    private teleoraInputCallback: () => void;
    private okButton: VWInitialViewButton; // Will have ID "options_dialog_ok_button";
    private okButtonCallback: () => void;
    private cancelButton: VWInitialViewButton; // Will have ID "options_dialog_cancel_button";
    private cancelButtonCallback: () => void;
    private packed: boolean;

    public constructor(okButtonCallback: () => void, cancelButtonCallback: () => void, stateToLoadInputCallback: () => void, teleoraInputCallback: () => void) {
        this.dialog = document.createElement("dialog");
        this.dialog.id = optionsDialogData.id;
        this.okButtonCallback = okButtonCallback;
        this.cancelButtonCallback = cancelButtonCallback;
        this.stateToLoadInputCallback = stateToLoadInputCallback;
        this.teleoraInputCallback = teleoraInputCallback;

        this.constructOptionsDialog();

        this.packed = false;
    }

    private constructSpeedSelectorDiv(): void {
        const speedSelectorDivData = optionsDialogData.children.speedSelectorDivData;
        const speedSelectorLabelData = speedSelectorDivData.children.speedSelectorLabelData;
        const speedSelectorData = speedSelectorDivData.children.speedSelectorData;

        this.speedSelectorDiv = VWHTMLUtils.createDivWithLabel(speedSelectorDivData.id, speedSelectorData.id, speedSelectorLabelData.text, speedSelectorDivData.classes, speedSelectorLabelData.classes);

        let speedSelector: HTMLSelectElement = VWHTMLUtils.createSelectElement(speedSelectorData.id, this.generateSpeedValues(), speedSelectorData.children.speedSelectorOptionData.id_prefix, speedSelectorData.classes);

        this.speedSelectorDiv.appendChild(speedSelector);
    }

    private generateSpeedValues(): string[] {
        let values: string[] = [];

        for (let i = 0; i < 10; i++) {
            const val: number = i / 10;

            values.push(val.toString());
        }

        values.push("0.999");

        return values;
    }

    private constructAutoplayCheckboxDiv(): void {
        const autoplayCheckboxDivData = optionsDialogData.children.autoplayCheckboxDivData;
        const autoplayCheckboxLabelData = autoplayCheckboxDivData.children.autoplayCheckboxLabelData;
        const autoplayCheckboxData = autoplayCheckboxDivData.children.autoplayCheckboxData;

        this.autoplaySelectorDiv = VWHTMLUtils.createDivWithLabel(autoplayCheckboxDivData.id, autoplayCheckboxData.id, autoplayCheckboxLabelData.text, autoplayCheckboxDivData.classes, autoplayCheckboxLabelData.classes);

        let autoplayCheckbox: HTMLInputElement = VWHTMLUtils.createCheckbox(autoplayCheckboxData.id, autoplayCheckboxData.tickedByDefault, autoplayCheckboxData.classes);

        this.autoplaySelectorDiv.appendChild(autoplayCheckbox);
    }

    private constructStateToLoadSelectorDiv(): void {
        const stateToLoadInputDivData = optionsDialogData.children.stateToLoadInputDivData;
        const stateToLoadInputLabelData = stateToLoadInputDivData.children.stateToLoadInputLabelData;
        const stateToLoadInputData = stateToLoadInputDivData.children.stateToLoadInputData;

        this.stateToLoadSelectorDiv = VWHTMLUtils.createDivWithLabel(stateToLoadInputDivData.id, stateToLoadInputData.id, stateToLoadInputLabelData.text, stateToLoadInputDivData.classes, stateToLoadInputLabelData.classes);

        let stateToLoadUploadInput: HTMLInputElement = VWHTMLUtils.createFileInput(stateToLoadInputData.id, stateToLoadInputData.accept, stateToLoadInputData.classes);

        stateToLoadUploadInput.addEventListener("change", this.stateToLoadInputCallback);

        this.stateToLoadSelectorDiv.appendChild(stateToLoadUploadInput);
    }

    private constructTooltipsCheckboxDiv(): void {
        const tooltipsCheckboxDivData = optionsDialogData.children.tooltipsCheckboxDivData;
        const tooltipsCheckboxLabelData = tooltipsCheckboxDivData.children.tooltipsCheckboxLabelData;
        const tooltipsCheckboxData = tooltipsCheckboxDivData.children.tooltipsCheckboxData;

        this.tooltipsSelectorDiv = VWHTMLUtils.createDivWithLabel(tooltipsCheckboxDivData.id, tooltipsCheckboxData.id, tooltipsCheckboxLabelData.text, tooltipsCheckboxDivData.classes, tooltipsCheckboxLabelData.classes);

        let tooltipsCheckbox: HTMLInputElement = VWHTMLUtils.createCheckbox(tooltipsCheckboxData.id, tooltipsCheckboxData.tickedByDefault, tooltipsCheckboxData.classes);

        this.tooltipsSelectorDiv.appendChild(tooltipsCheckbox);
    }

    private constructMaxNumberOfCyclesSelectorDiv(): void {
        const maxNumberOfCyclesInputDivData = optionsDialogData.children.maxNumberOfCyclesInputDivData;
        const maxNumberOfCyclesInputLabelData = maxNumberOfCyclesInputDivData.children.maxNumberOfCyclesInputLabelData;
        const maxNumberOfCyclesInputData = maxNumberOfCyclesInputDivData.children.maxNumberOfCyclesInputData;

        this.maxNumberOfCyclesSelectorDiv = VWHTMLUtils.createDivWithLabel(maxNumberOfCyclesInputDivData.id, maxNumberOfCyclesInputData.id, maxNumberOfCyclesInputLabelData.text, maxNumberOfCyclesInputDivData.classes, maxNumberOfCyclesInputLabelData.classes);

        let maxNumberOfCyclesSelector: HTMLInputElement = VWHTMLUtils.createNumberInput(maxNumberOfCyclesInputData.id, maxNumberOfCyclesInputData.classes);

        this.maxNumberOfCyclesSelectorDiv.appendChild(maxNumberOfCyclesSelector);
    }

    private constructEffortsSelectorDiv(): void {
        const effortsInputDivData = optionsDialogData.children.effortsInputDivData;
        const effortsInputLabelData = effortsInputDivData.children.effortsInputLabelData;
        const effortInputsDivData = effortsInputDivData.children.effortInputsDivData;
        const effortInputData = effortInputsDivData.children.effortInputData;
        const effortInputLabelData = effortInputsDivData.children.effortInputLabelData;
        const numberInputsIDsDivSuffix: string = effortInputsDivData.id_suffix;
        const numberInputsIDsSuffix: string = effortInputData.id_suffix;

        this.effortsSelectorDiv = VWHTMLUtils.createDivWithLabel(effortsInputDivData.id, effortsInputLabelData.for, effortsInputLabelData.text, effortsInputDivData.classes, effortsInputLabelData.classes);

        let numberInputsIDsDivs: HTMLDivElement[] = VWHTMLUtils.createNumberInputsDivs(vwActions, numberInputsIDsDivSuffix, numberInputsIDsSuffix, effortsInputDivData.classes, effortInputLabelData.classes);

        numberInputsIDsDivs.forEach((numberInputsIDsDiv: HTMLDivElement) => this.effortsSelectorDiv.appendChild(numberInputsIDsDiv));
    }

    private constructTeleoraSelectorDiv(): void {
        const teleoraInputDivData = optionsDialogData.children.teleoraInputDivData;
        const teleoraInputLabelData = teleoraInputDivData.children.teleoraInputLabelData;
        const teleoraInputData = teleoraInputDivData.children.teleoraInputData;

        this.teleoraSelectorDiv = VWHTMLUtils.createDivWithLabel(teleoraInputDivData.id, teleoraInputData.id, teleoraInputLabelData.text, teleoraInputDivData.classes, teleoraInputLabelData.classes);

        let teleoraSelector: HTMLInputElement = VWHTMLUtils.createFileInput(teleoraInputData.id, teleoraInputData.accept, teleoraInputData.classes);

        teleoraSelector.addEventListener("change", this.teleoraInputCallback);

        this.teleoraSelectorDiv.appendChild(teleoraSelector);
    }

    private constructOkButton(): void {
        const optionsOKBtn = optionsDialogData.children.optionsOKBtn;

        this.okButton = new VWInitialViewButton(optionsOKBtn.text, optionsOKBtn.id, optionsOKBtn.title, this.okButtonCallback.bind(this), optionsOKBtn.classes);
    }

    private constructCancelButton(): void {
        const optionsCancelBtn = optionsDialogData.children.optionsCancelBtn;

        this.cancelButton = new VWInitialViewButton(optionsCancelBtn.text, optionsCancelBtn.id, optionsCancelBtn.title, this.cancelButtonCallback.bind(this), optionsCancelBtn.classes);
    }

    public pack(): void {
        if (this.packed) {
            console.log("The options dialog is already packed.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.dialog)) {
            throw new Error("Cannot pack the options dialog: the dialog is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.speedSelectorDiv)) {
            throw new Error("Cannot pack the options dialog: the speed selector div is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.autoplaySelectorDiv)) {
            throw new Error("Cannot pack the options dialog: the autoplay selector div is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.stateToLoadSelectorDiv)) {
            throw new Error("Cannot pack the options dialog: the state to load selector div is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.tooltipsSelectorDiv)) {
            throw new Error("Cannot pack the options dialog: the tooltips selector div is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.maxNumberOfCyclesSelectorDiv)) {
            throw new Error("Cannot pack the options dialog: the max number of cycles selector div is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.effortsSelectorDiv)) {
            throw new Error("Cannot pack the options dialog: the efforts selector div is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.teleoraSelectorDiv)) {
            throw new Error("Cannot pack the options dialog: the teleora selector div is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.okButton)) {
            throw new Error("Cannot pack the options dialog: the ok button is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.cancelButton)) {
            throw new Error("Cannot pack the options dialog: the cancel button is null or undefined.");
        }
        else {
            this.dialog.appendChild(this.speedSelectorDiv);
            this.dialog.appendChild(this.autoplaySelectorDiv);
            this.dialog.appendChild(this.stateToLoadSelectorDiv);
            this.dialog.appendChild(this.tooltipsSelectorDiv);
            this.dialog.appendChild(this.maxNumberOfCyclesSelectorDiv);
            this.dialog.appendChild(this.effortsSelectorDiv);
            this.dialog.appendChild(this.teleoraSelectorDiv);
            this.dialog.appendChild(this.okButton.getButton());
            this.dialog.appendChild(this.cancelButton.getButton());

            this.packed = true;
        }
    }

    public unpack(): void {
        if (!this.packed) {
            console.log("The options dialog is already unpacked.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.dialog)) {
            throw new Error("Cannot unpack the options dialog: the dialog is null or undefined.");
        }
        else {
            this.dialog.close();
        }
    }

    private constructOptionsDialog(): void {
        this.constructSpeedSelectorDiv();
        this.constructAutoplayCheckboxDiv();
        this.constructStateToLoadSelectorDiv();
        this.constructTooltipsCheckboxDiv();
        this.constructMaxNumberOfCyclesSelectorDiv();
        this.constructEffortsSelectorDiv();
        this.constructTeleoraSelectorDiv();
        this.constructOkButton();
        this.constructCancelButton();
    }

    public getDialog(): HTMLDialogElement {
        return VWExistenceChecker.validateExistence(this.dialog, "Cannot get the options dialog: the dialog is null or undefined.");
    }

    public isPacked(): boolean {
        return this.packed;
    }

    public isHidden(): boolean {
        return this.getDialog().hidden;
    }

    public showTooltips(): void {
        if (this.packed) {
            this.okButton.showTooltip();
            this.cancelButton.showTooltip();
        }
    }

    public hideTooltips(): void {
        if (this.packed) {
            this.okButton.hideTooltip();
            this.cancelButton.hideTooltip();
        }
    }
}
