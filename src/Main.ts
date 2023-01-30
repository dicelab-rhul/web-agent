type ResourcePaths = {
    favicon: string;
    envStyle: string;
    envScript: string;
}

type TeleoraResourcePaths = {
    teleoraScript: string;
    teleoraStyle: string;
}

export class Main {
    private constructor() {}

    public static main(): void {
        Main.createContainerDiv();
        Main.loadStyle("/static/css/index.css"); // This is the main style of the page.
        Main.loadChoiceDiv();
        Main.createAndHideSimulationControlsDiv();
        Main.createErrorDiv();
    }

    private static getResourcesPaths(envPath: string): ResourcePaths {
        return {
            favicon: `${envPath}/res/images/favicon.ico`,
            envStyle: `${envPath}/dist/css/style.css`,
            envScript: `${envPath}/dist/js/main.js`
        };
    }
    
    private static loadFavicon(faviconPath: string): void {
        if (faviconPath === null || faviconPath === undefined) {
            throw new Error("The favicon path is null or undefined.");
        }
        else if (typeof faviconPath !== "string") {
            throw new Error("The favicon path is not a string.");
        }
        else if (faviconPath.length === 0) {
            throw new Error("The favicon path is empty.");
        }
        else if (faviconPath.indexOf(".ico") === -1) {
            throw new Error("The favicon path does not contain a .ico file.");
        }
        else {
            let favicon: HTMLLinkElement = document.createElement("link");
    
            favicon.href = faviconPath;
            favicon.rel = "icon";
            favicon.type = "image/x-icon";
    
            document.head.appendChild(favicon);
        }
    }
    
    private static createContainerDiv(): void {
        if (document.getElementById("container_div") === null) {
            let containerDiv: HTMLDivElement = document.createElement("div");
    
            containerDiv.id = "container_div";
    
            document.body.appendChild(containerDiv);
        }
        else {
            throw new Error("The container div already exists.");
        }
    }
    
    private static createErrorDiv(): void {
        if (document.getElementById("error_div") === null) {
            let errorDiv: HTMLDivElement = document.createElement("div");
    
            errorDiv.id = "error_div";
            errorDiv.classList.add("center-aligned");
            errorDiv.hidden = true;
    
            document.body.appendChild(errorDiv);
        }
        else {
            throw new Error("The error div already exists.");
        }
    }
    
    private static loadStyle(stylePath: string): void {
        if (stylePath === null || stylePath === undefined) {
            throw new Error("The style path is null or undefined.");
        }
        else if (typeof stylePath !== "string") {
            throw new Error("The style path is not a string.");
        }
        else if (stylePath.length === 0) {
            throw new Error("The style path is empty.");
        }
        else if (stylePath.indexOf(".css") === -1) {
            throw new Error("The style path does not contain a .css file.");
        }
        else {
            let mainStyle: HTMLLinkElement = document.createElement("link");
    
            mainStyle.href = stylePath;
            mainStyle.rel = "stylesheet";
            mainStyle.type = "text/css";
    
            document.head.appendChild(mainStyle);
        }
    }
    
    private static loadScript(scriptPath: string, defer?: boolean): void {
        if (scriptPath === null || scriptPath === undefined) {
            throw new Error("The script path is null or undefined.");
        }
        else if (typeof scriptPath !== "string") {
            throw new Error("The script path is not a string.");
        }
        else if (scriptPath.length === 0) {
            throw new Error("The script path is empty.");
        }
        else if (scriptPath.indexOf(".js") === -1) {
            throw new Error("The script path does not contain a .js file.");
        }
        else {
            let script: HTMLScriptElement = document.createElement("script");
    
            script.src = scriptPath;
            script.type = "text/javascript";
            script.async = false;
            script.defer = defer === undefined || defer === null ? false : defer;
    
            document.body.appendChild(script);
        }
    }
    
    private static loadChoiceDiv(): void {
        let choiceDiv: HTMLDivElement = document.createElement("div");
    
        choiceDiv.id = "choice_div";
        choiceDiv.classList.add("center-aligned");
    
        document.body.appendChild(choiceDiv);
    
        Main.loadChoices();
    }
    
    private static loadChoices(): void {
        const paths: string[] = Main.getChoicesPaths();
    
        paths.forEach((path) => Main.addEntryToChoiceDiv(path));
    }
    
    // TODO: This method should be replaced by a function that gets the choices paths from the fs. (How?)
    private static getChoicesPaths(): string[] {
        return [
            "/envs/vacuumworld-ts",
            "/envs/example-env-ts"
        ];
    }
    
    private static addEntryToChoiceDiv(choicePath: string): void {
        if (choicePath === null || choicePath === undefined) {
            throw new Error("The choice path is null or undefined.");
        }
        else if (typeof choicePath !== "string") {
            throw new Error("The choice path is not a string.");
        }
        else if (choicePath.length === 0) {
            throw new Error("The choice path is empty.");
        }
    
        const imgPath: string = choicePath + "/res/images/choice.png";
    
        let choiceDiv: HTMLDivElement = document.getElementById("choice_div") as HTMLDivElement;
        let choice: HTMLImageElement = document.createElement("img");
    
        choice.src = imgPath;
        choice.classList.add("choice");
    
        choiceDiv.appendChild(choice);
    
        choice.addEventListener("click", () => {
            document.querySelectorAll(".choice").forEach((choice) => choiceDiv.removeChild(choice));
    
            choiceDiv.hidden = true;
    
            Main.loadEnvironmentDiv(choicePath);
            Main.loadTeleoraDiv();
        });
    }
    
    private static loadEnvironmentDiv(choicePath: string): void {
        const resourcesPaths: ResourcePaths = Main.getResourcesPaths(choicePath);
    
        Main.loadFavicon(resourcesPaths.favicon);
        Main.loadStyle(resourcesPaths.envStyle); // This is the main style of the environment.
        Main.loadScript(resourcesPaths.envScript); // This is the main script of the environment.
    }
    
    private static createAndHideSimulationControlsDiv(): void {
        let simulationControlsDiv: HTMLDivElement = document.createElement("div");
    
        simulationControlsDiv.id = "external_simulation_controls_div";
        simulationControlsDiv.classList.add("center-aligned");
        simulationControlsDiv.hidden = true;
    
        Main.createSimulationControls().forEach((control: HTMLButtonElement) => simulationControlsDiv.appendChild(control));
    
        document.body.appendChild(simulationControlsDiv);
    }
    
    private static createSimulationControls(): HTMLButtonElement[] {
        let controls: HTMLButtonElement[] = [];
    
        controls.push(Main.createSimulationControlButton("external_run_button", "Run", ["external_simulation_control_button"], () => console.log("This will run the simulation.")));
        controls.push(Main.createSimulationControlButton("external_pause_button", "Pause", ["external_simulation_control_button"], () => console.log("This will pause the simulation.")));
        controls.push(Main.createSimulationControlButton("external_resume_button", "Resume", ["external_simulation_control_button"], () => console.log("This will resume a paused simulation.")));
        controls.push(Main.createSimulationControlButton("external_stop_button", "Stop", ["external_simulation_control_button"], () => console.log("This will stop the simulation.")));
        controls.push(Main.createSimulationControlButton("external_reset_button", "Reset", ["external_simulation_control_button"], () => console.log("This will reset the simulation.")));
        controls.push(Main.createSimulationControlButton("external_speed_button", "Speed Up", ["external_simulation_control_button"], () => console.log("This will increase the simulation speed.")));
        controls.push(Main.createSimulationControlButton("external_save_button", "Save", ["external_simulation_control_button"], () => console.log("This will save the simulation state.")));
        controls.push(Main.createSimulationControlButton("external_load_button", "Load", ["external_simulation_control_button"], () => console.log("This will load a new state for the simulation.")));
        controls.push(Main.createSimulationControlButton("external_guide_button", "Guide", ["external_simulation_control_button"], () => console.log("This will open the relevant guide.")));
    
        return controls;
    }
    
    private static createSimulationControlButton(buttonID: string, buttonText: string, buttonClasses: string[], buttonDefaultClickFunction: () => void): HTMLButtonElement {
        let button: HTMLButtonElement = document.createElement("button");
    
        button.id = buttonID;
        button.innerText = buttonText;
        button.classList.add(...buttonClasses);
        button.hidden = true;
    
        button.addEventListener("click", buttonDefaultClickFunction);
    
        return button;
    }

    private static getTeleoraResourcesPaths(): TeleoraResourcePaths {
        return {
            teleoraScript: "/teleora_editor/dist/js/main.js",
            teleoraStyle: "/teleora_editor/dist/css/style.css"
        }
    }

    private static loadTeleoraDiv(): void {
        const resourcesPaths: TeleoraResourcePaths = Main.getTeleoraResourcesPaths();

        Main.loadStyle(resourcesPaths.teleoraStyle); // This is the main Teleora style.
        Main.loadScript(resourcesPaths.teleoraScript); // This is the main Teleora script.
    }
}
