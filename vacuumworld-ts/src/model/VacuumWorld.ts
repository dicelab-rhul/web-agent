import { VWActionEffort } from "./actions/VWActionEffort";

export class VacuumWorld {
    private speed: number;
    private autoplay: boolean;
    private stateToLoad: File;
    private tooltipsActive: boolean;
    private maxNumberOfCycles: number;
    private efforts: Map<string, bigint>;
    private teleora: File;

    public constructor() {
        this.setDefaultOptions();
    }

    private setDefaultOptions(): void {
        this.speed = 0.0; // Normal speed.
        this.autoplay = false; // Autoplay is disabled by default.
        this.stateToLoad = undefined; // No state to load.
        this.tooltipsActive = true; // Tooltips are active by default.
        this.maxNumberOfCycles = undefined; // No limit.
        this.efforts = new Map<string, bigint>(); // Will be filled with the default efforts.
        this.teleora = undefined; // No Teleora file.
    }

    public run(): void {
        document.getElementById("initial_view_div").appendChild(this.loadStartMenu())
        document.getElementById("initial_view_div").removeAttribute("hidden");
        document.getElementById("initial_view_buttons_div").appendChild(this.createButton("Start", "start_button", ["initial_buttons"], this.startSimulation.bind(this)));
        document.getElementById("initial_view_buttons_div").appendChild(this.createButton("Options", "options_button", ["initial_buttons"], this.setOptions.bind(this)));
        document.getElementById("initial_view_buttons_div").appendChild(this.createButton("Guide", "guide_button", ["initial_buttons"], this.openWiki.bind(this)));
        document.getElementById("initial_view_buttons_div").removeAttribute("hidden");
    }

    private loadStartMenu(): HTMLDivElement {
        let img: HTMLImageElement = document.createElement("img");

        img.src = "images/start_menu.png";
        img.alt = "Start menu";

        return img;
    }
    private createButton(text: string, id: string, classes: string[], callback: () => void): HTMLButtonElement {
        let button: HTMLButtonElement = document.createElement("button");

        button.textContent = text;
        button.id = id;

        classes.forEach((className: string) => button.classList.add(className));

        button.addEventListener("click", callback);

        return button;
    }

    private startSimulation(): void {
        console.log("Start simulation."); // TODO: Implement this.
    }

    private openWiki(): void {
        window.open("https://github.com/dicelab-rhul/web-agent/") // TODO: Create a Wiki page on GitHub, and adjust the URL accordingly.
    }

    private generateSpeedValues(): number[] {
        let values: number[] = [];

        for (let i = 0; i < 1000; i++) {
            values.push(i / 1000);
        }

        return values;
    }

    private setOptions(): void {
        this.createSpeedSelector();
        this.createAutoplayCheckbox();
        this.createStateToLoadUploadInput();
        this.createTooltipsCheckbox();
        this.createMaxNumberOfCyclesInput();
        this.createEffortsSelector();
        this.createTeleoraUploadInput();

        let optionsDialog: HTMLDialogElement = <HTMLDialogElement>document.getElementById("options_dialog");

        document.getElementById("options_dialog_ok_button").addEventListener("click", () => this.saveOptionsAndCloseDialog(optionsDialog));
        document.getElementById("options_dialog_cancel_button").addEventListener("click", () => this.discardOptionsAndCloseDialog(optionsDialog));

        optionsDialog.showModal();

        document.getElementById("options_dialog_div").removeAttribute("hidden");
    }

    private createSpeedSelector(): void {
        this.generateSpeedValues().forEach((speed: number) => {
            let option: HTMLOptionElement = document.createElement("option");

            option.id = "speed_value_" + speed.toString();
            option.value = speed.toString();
            option.textContent = speed.toString();

            document.getElementById("speed_values").appendChild(option);
        });
    }

    private createAutoplayCheckbox(): void {
        let autoplayCheckbox: HTMLInputElement = document.createElement("input");

        autoplayCheckbox.type = "checkbox";
        autoplayCheckbox.id = "autoplay_checkbox";
        autoplayCheckbox.checked = false;

        document.getElementById("autoplay_selector_div").appendChild(autoplayCheckbox);
    }

    private createStateToLoadUploadInput(): void {
        let stateToLoadUploadInput: HTMLInputElement = document.createElement("input");

        stateToLoadUploadInput.type = "file";
        stateToLoadUploadInput.accept = ".json";
        stateToLoadUploadInput.id = "state_to_load_upload_input";

        document.getElementById("state_to_load_selector_div").appendChild(stateToLoadUploadInput);
    }

    private createTooltipsCheckbox(): void {
        let tooltipsCheckbox: HTMLInputElement = document.createElement("input");

        tooltipsCheckbox.type = "checkbox";
        tooltipsCheckbox.id = "tooltips_checkbox";
        tooltipsCheckbox.checked = true;

        document.getElementById("tooltips_selector_div").appendChild(tooltipsCheckbox);
    }

    private createMaxNumberOfCyclesInput(): void {
        let maxNumberOfCyclesInput: HTMLInputElement = document.createElement("input");

        maxNumberOfCyclesInput.type = "number";
        maxNumberOfCyclesInput.id = "max_number_of_cycles_input";

        document.getElementById("max_number_of_cycles_selector_div").appendChild(maxNumberOfCyclesInput);
    }

    private createEffortsSelector(): void {
        const actions: string[] = [
            "VWIdleAction",
            "VWMoveAction",
            "VWTurnAction",
            "VWCleanAction",
            "VWDropDirtAction",
            "VWSpeakAction",
            "VWBroadcastAction"
        ];

        actions.forEach((action: string) => this.createEffortSelector(action));
    }

    private createEffortSelector(action: string): void {
        let actionEffortDiv: HTMLDivElement = document.createElement("div");

        actionEffortDiv.id = action.toLowerCase() + "_effort_div";

        let actionEffortLabel: HTMLLabelElement = document.createElement("label");

        actionEffortLabel.textContent = action;

        let actionEffortInput: HTMLInputElement = document.createElement("input");

        actionEffortInput.type = "number";
        actionEffortInput.id = action.toLowerCase() + "_effort_input";

        actionEffortDiv.appendChild(actionEffortLabel);
        actionEffortDiv.appendChild(actionEffortInput);

        document.getElementById("efforts_selector_div").appendChild(actionEffortDiv);
    }

    private createTeleoraUploadInput(): void {
        let teleoraUploadInput: HTMLInputElement = document.createElement("input");

        teleoraUploadInput.type = "file";
        teleoraUploadInput.accept = ".tel";
        teleoraUploadInput.id = "teleora_upload_input";

        document.getElementById("teleora_selector_div").appendChild(teleoraUploadInput);
    }

    private saveOptionsAndCloseDialog(optionsDialog: HTMLDialogElement): void {
        this.saveOptions();
        this.resetOptionsDialog();

        optionsDialog.close();

        console.log("Options saved:");
        console.log("Speed: " + this.speed);
        console.log("Autoplay active: " + this.autoplay);
        console.log("Saved state to load: " + this.stateToLoad);
        console.log("Tooltips active: " + this.tooltipsActive);
        console.log("Max number of cycles: " + this.maxNumberOfCycles);
        console.log("Efforts:");
        console.log("- VWIdleAction: " + this.efforts.get("VWIdleAction"));
        console.log("- VWMoveAction: " + this.efforts.get("VWMoveAction"));
        console.log("- VWTurnAction: " + this.efforts.get("VWTurnAction"));
        console.log("- VWCleanAction: " + this.efforts.get("VWCleanAction"));
        console.log("- VWDropDirtAction: " + this.efforts.get("VWDropDirtAction"));
        console.log("- VWSpeakAction: " + this.efforts.get("VWSpeakAction"));
        console.log("- VWBroadcastAction: " + this.efforts.get("VWBroadcastAction"));
        console.log("Teleora file to load: " + this.teleora);
    }

    private discardOptionsAndCloseDialog(optionsDialog: HTMLDialogElement): void {
        this.resetOptionsDialog();

        optionsDialog.close();
    }

    private resetOptionsDialog(): void {
        document.getElementById("speed_values").innerHTML = ""; // TODO: this parser-generated DOM modification should be avoided.
        document.getElementById("autoplay_selector_div").removeChild(document.getElementById("autoplay_checkbox"));
        document.getElementById("state_to_load_selector_div").removeChild(document.getElementById("state_to_load_upload_input"));
        document.getElementById("tooltips_selector_div").removeChild(document.getElementById("tooltips_checkbox"));
        document.getElementById("max_number_of_cycles_selector_div").removeChild(document.getElementById("max_number_of_cycles_input"));
        document.getElementById("efforts_selector_div").innerHTML = ""; // TODO: this parser-generated DOM modification should be avoided.
        document.getElementById("teleora_selector_div").removeChild(document.getElementById("teleora_upload_input"));
    }

    private saveOptions(): void {
        this.speed = parseFloat((<HTMLInputElement>document.getElementById("speed_values")).value);
        this.autoplay = (<HTMLInputElement>document.getElementById("autoplay_checkbox")).checked;
        this.stateToLoad = (<HTMLInputElement>document.getElementById("state_to_load_upload_input")).files[0];
        this.tooltipsActive = (<HTMLInputElement>document.getElementById("tooltips_checkbox")).checked;
        this.maxNumberOfCycles = parseInt((<HTMLInputElement>document.getElementById("max_number_of_cycles_input")).value); // TODO: check if this is a number.
        this.efforts = this.loadEfforts();
        this.teleora = (<HTMLInputElement>document.getElementById("teleora_upload_input")).files[0];
    }

    private loadEfforts(): Map<string, bigint> {
        const actions: string[] = [
            "VWIdleAction",
            "VWMoveAction",
            "VWTurnAction",
            "VWCleanAction",
            "VWDropDirtAction",
            "VWSpeakAction",
            "VWBroadcastAction"
        ];

        let efforts: Map<string, bigint> = new Map();

        for (const action of actions) {
            const value = (<HTMLInputElement>document.getElementById(action.toLowerCase() + "_effort_input")).value;

            if (value === "" || value === null || value === undefined) {
                efforts.set(action, VWActionEffort.getEffort(action));
            }
            else {
                efforts.set(action, BigInt(parseInt(value)));
            }
        }

        return efforts;
    }
}