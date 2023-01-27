import { VWExistenceChecker } from "../../../utils/VWExistenceChecker";
import { VWHTMLUtils } from "../../common/VWHTMLUtils";
import { VWPackable } from "../../common/VWPackable";
import { VWInitialViewButton } from "../buttons/VWInitialViewButton";

export class VWOptionsDialog implements VWPackable {
    private dialog: HTMLDialogElement; // Will have ID "options_dialog";
    private speedSelectorDiv: HTMLDivElement; // Will have ID "speed_selector_div";
    private autoplaySelectorDiv: HTMLDivElement; // Will have ID "autoplay_selector_div";
    private stateToLoadSelectorDiv: HTMLDivElement; // Will have ID "state_to_load_selector_div";
    private stateToLoadInputCallback: () => void;
    private tooltipsSelectorDiv: HTMLDivElement; // Will have ID "tooltips_selector_div";
    private maxNumberOfCyclesSelectorDiv: HTMLDivElement; // Will have ID "max_number_of_cycles_selector_div";
    private effortsSelectorDiv: HTMLDivElement; // Will have ID "efforts_selector_div";
    private teleoraSelectorDiv: HTMLDivElement; // Will have ID "teleora_selector_div";
    private teleoraInputCallback: () => void;
    private okButton: VWInitialViewButton; // Will have ID "options_dialog_ok_button";
    private okButtonCallback: () => void;
    private cancelButton: VWInitialViewButton; // Will have ID "options_dialog_cancel_button";
    private cancelButtonCallback: () => void;
    private packed: boolean;

    public constructor(okButtonCallback: () => void, cancelButtonCallback: () => void, stateToLoadInputCallback: () => void, teleoraInputCallback: () => void) {
        this.dialog = document.createElement("dialog");
        this.dialog.id = "options_dialog";
        this.okButtonCallback = okButtonCallback;
        this.cancelButtonCallback = cancelButtonCallback;
        this.stateToLoadInputCallback = stateToLoadInputCallback;
        this.teleoraInputCallback = teleoraInputCallback;

        this.constructOptionsDialog();

        this.packed = false;
    }

    private constructSpeedSelectorDiv(): void {
        this.speedSelectorDiv = VWHTMLUtils.createDivWithLabel("speed_selector_div", "speed_selector", "Speed:");

        let speedSelector: HTMLSelectElement = VWHTMLUtils.createSelectElement("speed_values", this.generateSpeedValues(), "speed_value_");

        this.speedSelectorDiv.appendChild(speedSelector);
    }

    private generateSpeedValues(): string[] {
        let values: string[] = [];

        for (let i = 0; i < 1000; i++) {
            const val: number = i / 1000;

            values.push(val.toString());
        }

        return values;
    }

    private constructAutoplayCheckboxDiv(): void {
        this.autoplaySelectorDiv = VWHTMLUtils.createDivWithLabel("autoplay_checkbox_div", "autoplay_checkbox", "Autoplay:");

        let autoplayCheckbox: HTMLInputElement = VWHTMLUtils.createCheckbox("autoplay_checkbox");

        this.autoplaySelectorDiv.appendChild(autoplayCheckbox);
    }

    private constructStateToLoadSelectorDiv(): void {
        this.stateToLoadSelectorDiv = VWHTMLUtils.createDivWithLabel("state_to_load_input_div", "state_to_load_upload_input", "State:");

        let stateToLoadUploadInput: HTMLInputElement = VWHTMLUtils.createFileInput("state_to_load_upload_input", ".json");

        stateToLoadUploadInput.addEventListener("change", this.stateToLoadInputCallback);

        this.stateToLoadSelectorDiv.appendChild(stateToLoadUploadInput);
    }

    private constructTooltipsCheckboxDiv(): void {
        this.tooltipsSelectorDiv = VWHTMLUtils.createDivWithLabel("tooltips_checkbox_div", "tooltips_checkbox", "Tooltips:");

        let tooltipsCheckbox: HTMLInputElement = VWHTMLUtils.createCheckbox("tooltips_checkbox");

        this.tooltipsSelectorDiv.appendChild(tooltipsCheckbox);
    }

    private constructMaxNumberOfCyclesSelectorDiv(): void {
        this.maxNumberOfCyclesSelectorDiv = VWHTMLUtils.createDivWithLabel("max_number_of_cycles_input_div", "max_number_of_cycles_input", "Cycles:");

        let maxNumberOfCyclesSelector: HTMLInputElement = VWHTMLUtils.createNumberInput("max_number_of_cycles_input");

        this.maxNumberOfCyclesSelectorDiv.appendChild(maxNumberOfCyclesSelector);
    }

    private constructEffortsSelectorDiv(): void {
        this.effortsSelectorDiv = VWHTMLUtils.createDivWithLabel("efforts_inputs_div", "efforts_selector", "Efforts:");

        const numberInputsIDsDivSuffix: string = "_effort_div";
        const numberInputsIDsSuffix: string = "_effort_input";
        let numberInputsIDsDivs: HTMLDivElement[] = VWHTMLUtils.createNumberInputsDivs(VWOptionsDialog.getActionNames(), numberInputsIDsDivSuffix, numberInputsIDsSuffix);

        numberInputsIDsDivs.forEach((numberInputsIDsDiv: HTMLDivElement) => this.effortsSelectorDiv.appendChild(numberInputsIDsDiv));
    }

    private static getActionNames(): string[] {
        return [
            "VWIdleAction",
            "VWMoveAction",
            "VWTurnAction",
            "VWCleanAction",
            "VWDropDirtAction",
            "VWSpeakAction",
            "VWBroadcastAction"
        ];
    }

    private constructTeleoraSelectorDiv(): void {
        this.teleoraSelectorDiv = VWHTMLUtils.createDivWithLabel("teleora_input_div", "teleora_selector", "Teleora mind core:");

        let teleoraSelector: HTMLInputElement = VWHTMLUtils.createFileInput("teleora_upload_input", ".tel");

        teleoraSelector.addEventListener("change", this.teleoraInputCallback);

        this.teleoraSelectorDiv.appendChild(teleoraSelector);
    }

    private constructOkButton(): void {
        this.okButton = new VWInitialViewButton("OK", "options_dialog_ok_button", this.okButtonCallback.bind(this));
    }

    private constructCancelButton(): void {
        this.cancelButton = new VWInitialViewButton("Cancel", "options_dialog_cancel_button", this.cancelButtonCallback.bind(this));
    }

    public pack(): void {
        if (this.packed) {
            console.log("The options dialog is already packed.");
        }
        else if (!VWExistenceChecker.exists(this.dialog)) {
            throw new Error("Cannot pack the options dialog: the dialog is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.speedSelectorDiv)) {
            throw new Error("Cannot pack the options dialog: the speed selector div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.autoplaySelectorDiv)) {
            throw new Error("Cannot pack the options dialog: the autoplay selector div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.stateToLoadSelectorDiv)) {
            throw new Error("Cannot pack the options dialog: the state to load selector div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.tooltipsSelectorDiv)) {
            throw new Error("Cannot pack the options dialog: the tooltips selector div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.maxNumberOfCyclesSelectorDiv)) {
            throw new Error("Cannot pack the options dialog: the max number of cycles selector div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.effortsSelectorDiv)) {
            throw new Error("Cannot pack the options dialog: the efforts selector div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.teleoraSelectorDiv)) {
            throw new Error("Cannot pack the options dialog: the teleora selector div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.okButton)) {
            throw new Error("Cannot pack the options dialog: the ok button is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.cancelButton)) {
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
        // TODO: implement this method.
        this.dialog.close();
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
}
