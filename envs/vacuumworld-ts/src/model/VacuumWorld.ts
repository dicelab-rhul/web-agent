import { VWBroadcastAction } from "./actions/VWBroadcastAction";
import { VWCleanAction } from "./actions/VWCleanAction";
import { VWDropDirtAction } from "./actions/VWDropDirtAction";
import { VWIdleAction } from "./actions/VWIdleAction";
import { VWMoveAction } from "./actions/VWMoveAction";
import { VWSpeakAction } from "./actions/VWSpeakAction";
import { VWTurnAction } from "./actions/VWTurnAction";
import { VWEnvironment, VWEnvironmentJSON } from "./environment/VWEnvironment";
import { VWSimulationGUI } from "./gui/VWSimulationGUI";

export class VacuumWorld {
    private speed: number;
    private autoplay: boolean;
    private stateToLoad: VWEnvironmentJSON;
    private tooltipsActive: boolean;
    private maxNumberOfCycles: number;
    private efforts: Map<string, bigint>;
    private teleora: any; // TODO: Add Teleora type.

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
        this.createSkeletonView();
        document.getElementById("initial_view_div").appendChild(this.loadStartMenu())
        document.getElementById("initial_view_div").removeAttribute("hidden");
        document.getElementById("initial_view_buttons_div").appendChild(this.createButton("Start", "start_button", ["initial_buttons"], this.startSimulation.bind(this)));
        document.getElementById("initial_view_buttons_div").appendChild(this.createButton("Options", "options_button", ["initial_buttons"], this.setOptions.bind(this)));
        document.getElementById("initial_view_buttons_div").appendChild(this.createButton("Guide", "guide_button", ["initial_buttons"], this.openWiki.bind(this)));
        document.getElementById("initial_view_buttons_div").removeAttribute("hidden");
    }

    private createSkeletonView(): void {
        this.setTitle("VacuumWorld");
        this.createPlatformDiv();
    }

    private setTitle(title: string): void {
        if (title !== null && title !== undefined && title !== "") {
            document.title = title;
        }
    }

    private createPlatformDiv(): void {
        let platformDiv: HTMLDivElement = document.createElement("div");

        platformDiv.id = "platform_div";
        platformDiv.classList.add("center-aligned");

        document.getElementById("container_div").appendChild(platformDiv);

        this.createHiddenCenterAlignedDiv("platform_div", "initial_view_div");
        this.createHiddenCenterAlignedDiv("platform_div", "initial_view_buttons_div");
        this.createHiddenCenterAlignedDiv("platform_div", "options_dialog_div");
        this.createHiddenCenterAlignedDiv("platform_div", "grid_div");
        this.createHiddenCenterAlignedDiv("platform_div", "draggable_bodies_div");
        this.createHiddenCenterAlignedDiv("platform_div", "simulation_controls_div");
    }

    private createHiddenCenterAlignedDiv(parentID: string, divID: string): void {
        let div: HTMLDivElement = document.createElement("div");

        div.id = divID;
        div.classList.add("center-aligned");
        div.hidden = true;

        document.getElementById(parentID).appendChild(div);
    }

    private createOptionsDialog(): void {
        let optionsDialog: HTMLDialogElement = document.createElement("dialog");

        optionsDialog.id = "options_dialog";

        document.getElementById("options_dialog_div").appendChild(optionsDialog);

        this.createDivWithLabel("options_dialog", "speed_selector_div", "speed_selector", "Speed");
        this.createDivWithLabel("options_dialog", "autoplay_selector_div", "autoplay_selector", "Autoplay");
        this.createDivWithLabel("options_dialog", "state_to_load_selector_div", "state_to_load_selector", "State");
        this.createDivWithLabel("options_dialog", "tooltips_selector_div", "tooltips_selector", "Tooltips");
        this.createDivWithLabel("options_dialog", "max_number_of_cycles_selector_div", "max_number_of_cycles_selector", "Cycles");
        this.createDivWithLabel("options_dialog", "efforts_selector_div", "efforts_selector", "Efforts");
        this.createDivWithLabel("options_dialog", "teleora_selector_div", "teleora_selector", "Teleora mind core");
        this.createSpeedSelectorSelectElement();
        this.createButtonWithoutCallback("options_dialog", "options_dialog_ok_button", "OK");
        this.createButtonWithoutCallback("options_dialog", "options_dialog_cancel_button", "Cancel");
    }

    private createDivWithLabel(parentID: string, divID: string, labelForID: string, labelText: string): void {
        let div: HTMLDivElement = document.createElement("div");

        div.id = divID;

        document.getElementById(parentID).appendChild(div);

        this.createAndAppendLabel(divID, labelForID, labelText);
    }

    private createAndAppendLabel(parentId: string, for_attribute: string, text: string): void {
        let label: HTMLLabelElement = document.createElement("label");

        label.htmlFor = for_attribute;
        label.innerText = text;

        document.getElementById(parentId).appendChild(label);
    }

    private createSpeedSelectorSelectElement(): void {
        let speedValues: HTMLSelectElement = document.createElement("select");

        speedValues.id = "speed_values";

        document.getElementById("speed_selector_div").appendChild(speedValues);
    }

    private createButtonWithoutCallback(parentID: string, buttonID: string, buttonText: string): void {
        let button: HTMLButtonElement = document.createElement("button");

        button.id = buttonID;
        button.textContent = buttonText;

        document.getElementById(parentID).appendChild(button);
    }

    private loadStartMenu(): HTMLDivElement {
        let img: HTMLImageElement = document.createElement("img");

        img.src = "envs/vacuumworld-ts/res/images/start_menu.png";
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

    // TODO: Implement this method properly.
    private startSimulation(): void {
        console.log("Start simulation.");

        this.setActionEfforts();

        const config: object = {
            "initial_environment_dim": 3,
            "min_environment_dim": 3,
            "max_environment_dim": 13
        };

        let environment: VWEnvironment = VWEnvironment.fromJsonObject(this.stateToLoad, config);
        let gui: VWSimulationGUI = new VWSimulationGUI(environment, config);

        gui.pack();
        gui.show();
        gui.cycleSimulation();
    }

    private openWiki(): void {
        window.open("https://github.com/dicelab-rhul/web-agent/") // TODO: Create a Wiki page on GitHub, and adjust the URL accordingly.
    }

    private setOptions(): void {
        this.createOptionsDialog();
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

    private generateSpeedValues(): number[] {
        let values: number[] = [];

        for (let i = 0; i < 1000; i++) {
            values.push(i / 1000);
        }

        return values;
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

        stateToLoadUploadInput.addEventListener("change", () => {
            const file = stateToLoadUploadInput.files[0];
            const reader = new FileReader();
            
            reader.onload = (e) => {
                this.stateToLoad = JSON.parse(<string>e.target.result);
            }

            reader.readAsText(file);
        });
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
        this.getActionNames().forEach((action: string) => this.createEffortSelector(action));
    }

    private getActionNames(): string[] {
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

        teleoraUploadInput.addEventListener("change", () => {
            const file = teleoraUploadInput.files[0];
            const reader = new FileReader();
            
            reader.onload = (e) => {
                this.teleora = <string>e.target.result; // TODO: parse teleora file.
            }

            reader.readAsText(file);
        });
    }

    private saveOptionsAndCloseDialog(optionsDialog: HTMLDialogElement): void {
        this.saveOptions();

        optionsDialog.close();

        this.resetOptionsDialog();

        console.log("Options saved:");
        console.log("Speed: " + this.speed);
        console.log("Autoplay active: " + this.autoplay);
        console.log("Saved state to load: " + this.stateToLoad);
        console.log("Tooltips active: " + this.tooltipsActive);
        console.log("Max number of cycles: " + this.maxNumberOfCycles);
        console.log("Efforts:");

        this.getActionNames().forEach((action: string) => console.log("- " + action + ": " + this.efforts.get(action)));

        console.log("Teleora file to load: " + this.teleora);
    }

    private discardOptionsAndCloseDialog(optionsDialog: HTMLDialogElement): void {
        optionsDialog.close();

        this.resetOptionsDialog();
    }

    private resetOptionsDialog(): void {
        document.getElementById("options_dialog_div").removeChild(document.getElementById("options_dialog"));
        document.getElementById("options_dialog_div").hidden = true;
    }

    private saveOptions(): void {
        this.speed = parseFloat((<HTMLInputElement>document.getElementById("speed_values")).value);
        this.autoplay = (<HTMLInputElement>document.getElementById("autoplay_checkbox")).checked;
        this.tooltipsActive = (<HTMLInputElement>document.getElementById("tooltips_checkbox")).checked;
        this.maxNumberOfCycles = this.parseMaxNumberOfCycles();
        this.efforts = this.loadEfforts();
        this.teleora = (<HTMLInputElement>document.getElementById("teleora_upload_input")).files[0]; // TODO: change this.
    }

    private parseMaxNumberOfCycles(): number {
        const value = (<HTMLInputElement>document.getElementById("max_number_of_cycles_input")).value;

        if (value === "" || value === null || value === undefined) {
            return undefined; // no limit
        }
        else {
            return parseInt(value);
        }
    }

    private loadEfforts(): Map<string, bigint> {
        let efforts: Map<string, bigint> = new Map();

        for (const action of this.getActionNames()) {
            const value = (<HTMLInputElement>document.getElementById(action.toLowerCase() + "_effort_input")).value;

            if (value === "" || value === null || value === undefined) {
                efforts.set(action, undefined);
            }
            else {
                efforts.set(action, BigInt(parseInt(value)));
            }
        }

        return efforts;
    }

    private setActionEfforts(): void {
        VWIdleAction.overrideDefaultEffort(this.efforts.get("VWIdleAction"));
        VWMoveAction.overrideDefaultEffort(this.efforts.get("VWMoveAction"));
        VWTurnAction.overrideDefaultEffort(this.efforts.get("VWTurnAction"));
        VWCleanAction.overrideDefaultEffort(this.efforts.get("VWCleanAction"));
        VWDropDirtAction.overrideDefaultEffort(this.efforts.get("VWDropDirtAction"));
        VWSpeakAction.overrideDefaultEffort(this.efforts.get("VWSpeakAction"));
        VWBroadcastAction.overrideDefaultEffort(this.efforts.get("VWBroadcastAction"));
    }
}
