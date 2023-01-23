import { VWBroadcastAction } from "../../../actions/VWBroadcastAction";
import { VWCleanAction } from "../../../actions/VWCleanAction";
import { VWDropDirtAction } from "../../../actions/VWDropDirtAction";
import { VWIdleAction } from "../../../actions/VWIdleAction";
import { VWMoveAction } from "../../../actions/VWMoveAction";
import { VWSpeakAction } from "../../../actions/VWSpeakAction";
import { VWTurnAction } from "../../../actions/VWTurnAction";
import { VWEnvironment } from "../../../environment/VWEnvironment";
import { VWExistenceChecker } from "../../../utils/VWExistenceChecker";
import { VWErrorDiv } from "../../common/VWErrorDiv";
import { VWDiv } from "../../common/VWDiv";
import { VWOptions } from "../../common/VWOptions";
import { VWInitialViewDiv } from "../../initial/div/VWInitialDiv";
import { VWInitialViewButtonsDiv } from "../../initial/div/VWInitialViewButtonsDiv";
import { VWOptionsDialogDiv } from "../../initial/div/VWOptionsDialogDiv";
import { VWDraggableBodiesDiv } from "../../simulation/div/VWDraggableBodiesDiv";
import { VWGridDiv } from "../../simulation/div/VWGridDiv";
import { VWSimulationControlsDiv } from "../../simulation/div/VWSimulationControlsDiv";
import { VWSimulation } from "../../simulation/div/VWSimulation";

export class VWPlatformDiv implements VWDiv {
    private div: HTMLDivElement; // Will have ID "platform_div";
    private initialViewDiv: VWInitialViewDiv; // Shown by default;
    private initialViewButtonsDiv: VWInitialViewButtonsDiv; // Shown by default;
    private optionsDialogDiv: VWOptionsDialogDiv; // Hidden by default;
    private gridDiv: VWGridDiv; // Hidden by default;
    private draggableBodiesDiv: VWDraggableBodiesDiv; // Hidden by default;
    private simulationControlsDiv: VWSimulationControlsDiv; // Hidden by default;
    private options: VWOptions;
    private packed: boolean;

    public constructor(initialViewImgPath: string) {
        if (initialViewImgPath === null || initialViewImgPath === undefined) {
            throw new Error("The path of the initial view image cannot be null or undefined.");
        }
        else {
            this.div = document.createElement("div");
            this.div.id = "platform_div";
            this.div.classList.add("center-aligned");
            this.div.hidden = true;
            this.initialViewDiv = new VWInitialViewDiv(initialViewImgPath);
            this.initialViewButtonsDiv = new VWInitialViewButtonsDiv(this.start.bind(this), this.showOptionsDialog.bind(this), this.guide);
            this.optionsDialogDiv = new VWOptionsDialogDiv(this.saveNewOptions.bind(this), this.discardNewOptions.bind(this), this.loadState.bind(this), this.loadTeleora.bind(this));
            this.gridDiv = new VWGridDiv();
            this.draggableBodiesDiv = new VWDraggableBodiesDiv();
            this.simulationControlsDiv = new VWSimulationControlsDiv();
            this.options = new VWOptions();
            this.packed = false;
        }
    }

    private showOptionsDialog(): void {
        if (this.optionsDialogDiv === null || this.optionsDialogDiv === undefined) {
            throw new Error("Cannot show the options dialog div: it is null or undefined.");
        }
        else {
            this.optionsDialogDiv.pack();
            this.optionsDialogDiv.show();
        }
    }

    private loadState(): void {
        const file = (<HTMLInputElement>document.getElementById("state_to_load_upload_input")).files[0];
        const reader = new FileReader();
        
        reader.onload = (e) => {
            this.options.setStateToLoad(JSON.parse(<string>e.target.result));
        }

        reader.readAsText(file);
    }

    private loadTeleora(): void {
        const file = (<HTMLInputElement>document.getElementById("teleora_upload_input")).files[0];
        const reader = new FileReader();
        
        reader.onload = (e) => {
            this.options.setTeleora(<string>e.target.result); // TODO: parse teleora file.
        }

        reader.readAsText(file);
    }

    // TODO: Implement this method properly.
    // Pass the options to the simulation.
    // Pass the appropiate config to the simulation.
    private start(): void {
        try {
            console.log("Start simulation.");

            this.setActionEfforts();

            const config: object = {
                "initial_environment_dim": 3,
                "min_environment_dim": 3,
                "max_environment_dim": 13
            };

            let environment: VWEnvironment = VWEnvironment.fromJsonObject(this.options.getStateToLoad(), config);

            // TODO: change this.
            let simulation: VWSimulation = new VWSimulation(environment, this.options, config, () => {
                this.div.replaceChild(simulation.getGridDiv().getDiv(), this.gridDiv.getDiv());
                this.gridDiv = simulation.getGridDiv();
            });

            this.initialViewDiv.hide();
            this.initialViewButtonsDiv.hide();
            this.initialViewDiv.unpack();
            this.initialViewButtonsDiv.unpack();

            simulation.cycleSimulation();
        }
        catch (e) {
            VWErrorDiv.displayError(e);
        }
    }

    private setActionEfforts(): void {
        VWIdleAction.overrideDefaultEffort(this.options.getEfforts().get("VWIdleAction"));
        VWMoveAction.overrideDefaultEffort(this.options.getEfforts().get("VWMoveAction"));
        VWTurnAction.overrideDefaultEffort(this.options.getEfforts().get("VWTurnAction"));
        VWCleanAction.overrideDefaultEffort(this.options.getEfforts().get("VWCleanAction"));
        VWDropDirtAction.overrideDefaultEffort(this.options.getEfforts().get("VWDropDirtAction"));
        VWSpeakAction.overrideDefaultEffort(this.options.getEfforts().get("VWSpeakAction"));
        VWBroadcastAction.overrideDefaultEffort(this.options.getEfforts().get("VWBroadcastAction"));
    }

    private saveNewOptions(): void {
        if (this.optionsDialogDiv === null || this.optionsDialogDiv === undefined) {
            throw new Error("Cannot hide the options dialog div: it is null or undefined.");
        }
        else {
            this.saveOptions();
            this.closeAndDestroyOptionsDialog();
            this.printOptions("Options saved:");
        }
    }

    private saveOptions(): void {
        this.parseSimulationSpeed();
        this.parseAutoplayFlag();
        this.parseTooltipsFlag();
        this.parseMaxNumberOfCycles();
        this.parseEfforts();
    }

    private parseSimulationSpeed(): void {
        const speed: number = parseFloat((<HTMLInputElement>document.getElementById("speed_values")).value);

        if (!isNaN(speed)) {
            this.options.setSpeed(speed);
        }
        else {
            this.options.setSpeed(0.0);
        }
    }

    private parseAutoplayFlag(): void {
        const autoplay: boolean = (<HTMLInputElement>document.getElementById("autoplay_checkbox")).checked;

        if (autoplay) {
            this.options.activateAutoplay();
        }
        else {
            this.options.deactivateAutoplay();
        }
    }

    private parseTooltipsFlag(): void {
        const tooltips: boolean = (<HTMLInputElement>document.getElementById("tooltips_checkbox")).checked;

        if (tooltips) {
            this.options.activateTooltips();
        }
        else {
            this.options.deactivateTooltips();
        }
    }

    private parseMaxNumberOfCycles(): void {
        const value = (<HTMLInputElement>document.getElementById("max_number_of_cycles_input")).value;

        if (value === "" || value === null || value === undefined) {
            this.options.setMaxNumberOfCycles(undefined); // No limit.
        }
        else {
            this.options.setMaxNumberOfCycles(parseInt(value));
        }
    }

    private parseEfforts(): void {
        let efforts: Map<string, bigint> = new Map();

        for (const action of VWPlatformDiv.getActionNames()) {
            const value = (<HTMLInputElement>document.getElementById(action.toLowerCase() + "_effort_input")).value;

            if (value === "" || value === null || value === undefined) {
                efforts.set(action, undefined);
            }
            else {
                efforts.set(action, BigInt(parseInt(value)));
            }
        }

        this.options.setEfforts(efforts);
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

    private discardNewOptions(): void {
        if (this.optionsDialogDiv === null || this.optionsDialogDiv === undefined) {
            throw new Error("Cannot hide the options dialog div: it is null or undefined.");
        }
        else {
            this.closeAndDestroyOptionsDialog();
            this.printOptions("Options discarded. The current options are:");
        }
    }

    private closeAndDestroyOptionsDialog(): void {
        this.optionsDialogDiv.hide();
        this.optionsDialogDiv.unpack();
    }

    private printOptions(message: string): void {
        console.log(message);
        console.log("Speed: " + this.options.getSpeed());
        console.log("Autoplay active: " + this.options.isAutoplayActive());
        console.log("Saved state to load: " + this.options.getStateToLoad());
        console.log("Tooltips active: " + this.options.areTooltipsActive());
        console.log("Max number of cycles: " + this.options.getMaxNumberOfCycles());
        console.log("Efforts:");

        VWPlatformDiv.getActionNames().forEach((action: string) => console.log("- " + action + ": " + this.options.getEfforts().get(action)));

        console.log("Teleora file to load: " + this.options.getTeleora());
    }

    private guide(): void {
        window.open("https://github.com/dicelab-rhul/web-agent/") // TODO: Create a Wiki page on GitHub, and adjust the URL accordingly.
    }

    public pack(): void {
        if (this.packed) {
            console.log("The platform view div is already packed.");
        }
        else if (!VWExistenceChecker.exists(this.div)) {
            throw new Error("Cannot pack: the platform div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot pack: the platform view div is not hidden (it must be before packing it).");
        }
        else if (!VWExistenceChecker.exists(this.initialViewDiv)) {
            throw new Error("Cannot pack: the initial view div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.initialViewButtonsDiv)) {
            throw new Error("Cannot pack: the initial view buttons div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.optionsDialogDiv)) {
            throw new Error("Cannot pack: the options dialog div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.gridDiv)) {
            throw new Error("Cannot pack: the grid div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.draggableBodiesDiv)) {
            throw new Error("Cannot pack: the draggable bodies div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.simulationControlsDiv)) {
            throw new Error("Cannot pack: the simulation controls div is null or undefined.");
        }
        else {
            this.initialViewDiv.pack();
            this.initialViewButtonsDiv.pack();
            this.optionsDialogDiv.pack();

            // The other divs are packed at a later stage.

            this.div.appendChild(this.initialViewDiv.getDiv());
            this.div.appendChild(this.initialViewButtonsDiv.getDiv());
            this.div.appendChild(this.optionsDialogDiv.getDiv());
            this.div.appendChild(this.gridDiv.getDiv());
            this.div.appendChild(this.draggableBodiesDiv.getDiv());
            this.div.appendChild(this.simulationControlsDiv.getDiv());

            this.packed = true;
        }
    }

    public unpack(): void {
        if (!this.packed) {
            console.log("The initial view div is already unpacked.");
        }
        else if (!VWExistenceChecker.exists(this.div)) {
            throw new Error("Cannot pack: the platform div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot unpack: the initial view div is not hidden (it must be before unpacking it).");
        }
        else if (!VWExistenceChecker.exists(this.initialViewDiv)) {
            throw new Error("Cannot pack: the initial view div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.initialViewButtonsDiv)) {
            throw new Error("Cannot pack: the initial view buttons div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.optionsDialogDiv)) {
            throw new Error("Cannot pack: the options dialog div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.gridDiv)) {
            throw new Error("Cannot pack: the grid div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.draggableBodiesDiv)) {
            throw new Error("Cannot pack: the draggable bodies div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.simulationControlsDiv)) {
            throw new Error("Cannot pack: the simulation controls div is null or undefined.");
        }
        else {
            this.div.removeChild(this.initialViewDiv.getDiv());
            this.div.removeChild(this.initialViewButtonsDiv.getDiv());
            this.div.removeChild(this.optionsDialogDiv.getDiv());
            this.div.removeChild(this.gridDiv.getDiv());
            this.div.removeChild(this.draggableBodiesDiv.getDiv());
            this.div.removeChild(this.simulationControlsDiv.getDiv());

            this.packed = false;
        }
    }

    public show(): void {
        if (this.div === null || this.div === undefined) {
            throw new Error("Cannot show: the platform div is null or undefined.");
        }
        else if (!this.div.hidden) {
            console.log("The platform div is already shown.");
        }
        else if (!this.packed) {
            throw new Error("Cannot show: the platform div is not packed.");
        }
        else {
            this.initialViewDiv.show();
            this.initialViewButtonsDiv.show();
            this.div.hidden = false;
        }
    }

    public hide(): void {
        if (this.div === null || this.div === undefined) {
            throw new Error("Cannot hide: the platform div is null or undefined.");
        }
        else if (this.div.hidden) {
            console.log("The platform div is already hidden.");
        }
        else if (!this.packed) {
            throw new Error("Cannot hide: the platform div is not packed.");
        }
        else {
            this.initialViewDiv.hide();
            this.initialViewButtonsDiv.hide();
            this.optionsDialogDiv.hide();
            this.gridDiv.hide();
            this.draggableBodiesDiv.hide();
            this.simulationControlsDiv.hide();

            this.div.hidden = true;
        }
    }

    public getDiv(): HTMLDivElement {
        if (this.div === null || this.div === undefined) {
            throw new Error("Cannot get the platform div: it is null or undefined.");
        }
        else {
            return this.div;
        }
    }
}
