export class VWHTMLUtils {
    private constructor() {}

    public static createDivWithLabel(divID: string, labelFor: string, labelText: string): HTMLDivElement {
        let div: HTMLDivElement = document.createElement("div");

        div.id = divID;

        let label: HTMLLabelElement = VWHTMLUtils.createLabel(labelFor, labelText);

        div.appendChild(label);

        return div;
    }

    public static createLabel(labelFor: string, labelText: string): HTMLLabelElement {
        let label: HTMLLabelElement = document.createElement("label");

        label.htmlFor = labelFor;
        label.innerText = labelText;

        return label;
    }

    public static createCheckbox(checkboxID: string, checked?: boolean): HTMLInputElement {
        let checkbox: HTMLInputElement = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.id = checkboxID;
        checkbox.checked = checked !== null && checked !== undefined ? checked : false;

        return checkbox;
    }

    public static createFileInput(fileInputID: string, accept?: string): HTMLInputElement {
        let fileInput: HTMLInputElement = document.createElement("input");

        fileInput.type = "file";
        fileInput.id = fileInputID;
        fileInput.accept = accept !== null && accept !== undefined ? accept : "";

        return fileInput;
    }

    public static createNumberInputsDivs(numberInputsTexts: string[], numberInputsIDsDivSuffix: string, numberInputsIDsSuffix: string): HTMLDivElement[] {
        let numberInputsDivs: HTMLDivElement[] = [];

        numberInputsTexts.forEach((numberInputText: string) => {
            const numberInputIDString: string = numberInputText.toLowerCase() + numberInputsIDsSuffix;
            const numberInputDivIDString: string = numberInputText.toLowerCase() + numberInputsIDsDivSuffix;
            let numberInput: HTMLInputElement = VWHTMLUtils.createNumberInput(numberInputIDString);
            let numberInputDiv: HTMLDivElement = VWHTMLUtils.createDivWithLabel(numberInputDivIDString, numberInputIDString, numberInputText);

            numberInputDiv.appendChild(numberInput);

            numberInputsDivs.push(numberInputDiv);
        });

        return numberInputsDivs;
    }

    public static createNumberInput(numberInputID: string, min?: number, max?: number, step?: number, value?: number): HTMLInputElement {
        let numberInput: HTMLInputElement = document.createElement("input");

        numberInput.type = "number";
        numberInput.id = numberInputID;
        numberInput.min = min !== null && min !== undefined ? min.toString() : "";
        numberInput.max = max !== null && max !== undefined ? max.toString() : "";
        numberInput.step = step !== null && step !== undefined ? step.toString() : "";
        numberInput.value = value !== null && value !== undefined ? value.toString() : "";

        return numberInput;
    }

    public static createOptionElement(optionID: string, optionValue: string, optionText: string): HTMLOptionElement {
        let option: HTMLOptionElement = document.createElement("option");

        option.id = optionID;
        option.value = optionValue;
        option.textContent = optionText;

        return option;
    }

    public static createSelectElement(selectID: string, optionsValues: string[], option_id_prefix?: string): HTMLSelectElement {
        let select: HTMLSelectElement = document.createElement("select");

        select.id = selectID;

        optionsValues.forEach((optionValue: string) => {
            const optionID: string = option_id_prefix !== null && option_id_prefix !== undefined ? option_id_prefix + optionValue : optionValue;

            let option: HTMLOptionElement = VWHTMLUtils.createOptionElement(optionID, optionValue, optionValue);

            select.appendChild(option);
        });

        return select;
    }
}
