import { VWExistenceChecker } from "../../model/utils/VWExistenceChecker";

export class VWHTMLUtils {
    private constructor() {}

    public static createDivWithLabel(divID: string, labelFor: string, labelText: string, classes?: string[], classesForLabel?: string[]): HTMLDivElement {
        let div: HTMLDivElement = document.createElement("div");

        div.id = divID;

        if (VWExistenceChecker.allValuesExist(classes)) {
            div.classList.add(...classes);
        }

        let label: HTMLLabelElement = VWHTMLUtils.createLabel(labelFor, labelText, classesForLabel);

        div.appendChild(label);

        return div;
    }

    public static createLabel(labelFor: string, labelText: string, classes?: string[]): HTMLLabelElement {
        let label: HTMLLabelElement = document.createElement("label");

        label.htmlFor = labelFor;
        label.textContent = labelText; // This is automatically escaped by the browser.

        if (VWExistenceChecker.allValuesExist(classes)) {
            label.classList.add(...classes);
        }

        return label;
    }

    public static createCheckbox(checkboxID: string, checked?: boolean, classes?: string[]): HTMLInputElement {
        let checkbox: HTMLInputElement = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.id = checkboxID;
        checkbox.checked = VWExistenceChecker.allArgumentsExist(checked) ? checked : false;

        if (VWExistenceChecker.allValuesExist(classes)) {
            checkbox.classList.add(...classes);
        }

        return checkbox;
    }

    public static createFileInput(fileInputID: string, accept?: string, classes?: string[]): HTMLInputElement {
        let fileInput: HTMLInputElement = document.createElement("input");

        fileInput.type = "file";
        fileInput.id = fileInputID;
        fileInput.accept = VWExistenceChecker.allArgumentsExist(accept) ? accept : "";

        if (VWExistenceChecker.allValuesExist(classes)) {
            fileInput.classList.add(...classes);
        }

        return fileInput;
    }

    public static createNumberInputsDivs(numberInputsTexts: string[], numberInputsIDsDivSuffix: string, numberInputsIDsSuffix: string, classesForAllDivs?: string[], classesForAllLabels?: string[]): HTMLDivElement[] {
        let numberInputsDivs: HTMLDivElement[] = [];

        numberInputsTexts.forEach((numberInputText: string) => {
            const numberInputIDString: string = numberInputText.toLowerCase() + numberInputsIDsSuffix;
            const numberInputDivIDString: string = numberInputText.toLowerCase() + numberInputsIDsDivSuffix;
            let numberInput: HTMLInputElement = VWHTMLUtils.createNumberInput(numberInputIDString);
            let numberInputDiv: HTMLDivElement = VWHTMLUtils.createDivWithLabel(numberInputDivIDString, numberInputIDString, numberInputText, classesForAllDivs, classesForAllLabels);

            numberInputDiv.appendChild(numberInput);

            numberInputsDivs.push(numberInputDiv);
        });

        return numberInputsDivs;
    }

    public static createNumberInput(numberInputID: string, classes?: string[], min?: number, max?: number, step?: number, value?: number): HTMLInputElement {
        let numberInput: HTMLInputElement = document.createElement("input");

        numberInput.type = "number";
        numberInput.id = numberInputID;
        numberInput.min = VWExistenceChecker.allArgumentsExist(min) ? min.toString() : "";
        numberInput.max = VWExistenceChecker.allArgumentsExist(max) ? max.toString() : "";
        numberInput.step = VWExistenceChecker.allArgumentsExist(step) ? step.toString() : "";
        numberInput.value = VWExistenceChecker.allArgumentsExist(value) ? value.toString() : "";

        if (VWExistenceChecker.allValuesExist(classes)) {
            numberInput.classList.add(...classes);
        }

        return numberInput;
    }

    public static createOptionElement(optionID: string, optionValue: string, optionText: string, classes?: string[]): HTMLOptionElement {
        let option: HTMLOptionElement = document.createElement("option");

        option.id = optionID;
        option.value = optionValue;
        option.textContent = optionText; // This is automatically escaped by the browser.

        if (VWExistenceChecker.allValuesExist(classes)) {
            option.classList.add(...classes);
        }

        return option;
    }

    public static createSelectElement(selectID: string, optionsValues: string[], option_id_prefix?: string, classes?: string[]): HTMLSelectElement {
        let select: HTMLSelectElement = document.createElement("select");

        select.id = selectID;

        if (VWExistenceChecker.allValuesExist(classes)) {
            select.classList.add(...classes);
        }

        optionsValues.forEach((optionValue: string) => {
            const optionID: string = VWExistenceChecker.allArgumentsExist(option_id_prefix) ? option_id_prefix + optionValue : optionValue;

            let option: HTMLOptionElement = VWHTMLUtils.createOptionElement(optionID, optionValue, optionValue);

            select.appendChild(option);
        });

        return select;
    }
}
