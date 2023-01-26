window.addEventListener("DOMContentLoaded", function() {
    createContainerDiv();
    loadStyle("/static/css/index.css"); // This is the main style of the page.
    loadChoiceDiv();
    createAndHideSimulationControlsDiv();
    createErrorDiv();
});

function getResourcesPaths(envPath) {
    return {
        favicon: `${envPath}/res/images/favicon.ico`,
        envStyle: `${envPath}/dist/style.css`,
        envScript: `${envPath}/dist/main.js`
    };
}

function loadFavicon(faviconPath) {
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
        let favicon = document.createElement("link");

        favicon.href = faviconPath;
        favicon.rel = "icon";
        favicon.type = "image/x-icon";

        document.head.appendChild(favicon);
    }
}

function createContainerDiv() {
    if (document.getElementById("container_div") === null) {
        let containerDiv = document.createElement("div");

        containerDiv.id = "container_div";

        document.body.appendChild(containerDiv);
    }
    else {
        throw new Error("The container div already exists.");
    }
}

function createErrorDiv() {
    if (document.getElementById("error_div") === null) {
        let errorDiv = document.createElement("div");

        errorDiv.id = "error_div";
        errorDiv.classList.add("center-aligned");
        errorDiv.hidden = true;

        document.body.appendChild(errorDiv);
    }
    else {
        throw new Error("The error div already exists.");
    }
}

function loadStyle(stylePath) {
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
        let mainStyle = document.createElement("link");

        mainStyle.href = stylePath;
        mainStyle.rel = "stylesheet";
        mainStyle.type = "text/css";

        document.head.appendChild(mainStyle);
    }
}

function loadScript(scriptPath, defer) {
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
        let script = document.createElement("script");

        script.src = scriptPath;
        script.type = "text/javascript";
        script.async = false;
        script.defer = defer === undefined || defer == null ? false : defer;

        document.body.appendChild(script);
    }
}

function loadChoiceDiv() {
    let choiceDiv = document.createElement("div");

    choiceDiv.id = "choice_div";
    choiceDiv.classList.add("center-aligned");

    document.body.appendChild(choiceDiv);

    loadChoices();
}

function loadChoices() {
    const paths = getChoicesPaths();

    paths.forEach((path) => addEntryToChoiceDiv(path));
}

// TODO: This function should be replaced by a function that gets the choices paths from the fs. (How?)
function getChoicesPaths() {
    return [
        "/envs/vacuumworld-ts",
        "/envs/example-env-ts"
    ];
}

function addEntryToChoiceDiv(choicePath) {
    if (choicePath === null || choicePath === undefined) {
        throw new Error("The choice path is null or undefined.");
    }
    else if (typeof choicePath !== "string") {
        throw new Error("The choice path is not a string.");
    }
    else if (choicePath.length === 0) {
        throw new Error("The choice path is empty.");
    }

    const imgPath = choicePath + "/res/images/choice.png";

    let choiceDiv = document.getElementById("choice_div");
    let choice = document.createElement("img");

    choice.src = imgPath;
    choice.classList.add("choice");

    choiceDiv.appendChild(choice);

    choice.addEventListener("click", () => {
        document.querySelectorAll(".choice").forEach((choice) => choiceDiv.removeChild(choice));

        choiceDiv.hidden = true;

        loadEnvironmentDiv(choicePath);
    });
}

function loadEnvironmentDiv(choicePath) {
    const resourcesPaths = getResourcesPaths(choicePath);

    loadFavicon(resourcesPaths.favicon);
    loadStyle(resourcesPaths.envStyle); // This is the main style of the environment.
    loadScript(resourcesPaths.envScript); // This is the main script of the environment
}

function createAndHideSimulationControlsDiv() {
    let simulationControlsDiv = document.createElement("div");

    simulationControlsDiv.id = "external_simulation_controls_div";
    simulationControlsDiv.classList.add("center-aligned");
    simulationControlsDiv.hidden = true;

    createSimulationControls().forEach((control) => simulationControlsDiv.appendChild(control));

    document.body.appendChild(simulationControlsDiv);
}

function createSimulationControls() {
    let controls = [];

    controls.push(createSimulationControlButton("external_run_button", "Run", ["external_simulation_control_button"], () => console.log("This will run the simulation.")));
    controls.push(createSimulationControlButton("external_pause_button", "Pause", ["external_simulation_control_button"], () => console.log("This will pause the simulation.")));
    controls.push(createSimulationControlButton("external_resume_button", "Resume", ["external_simulation_control_button"], () => console.log("This will resume a paused simulation.")));
    controls.push(createSimulationControlButton("external_stop_button", "Stop", ["external_simulation_control_button"], () => console.log("This will stop the simulation.")));
    controls.push(createSimulationControlButton("external_reset_button", "Reset", ["external_simulation_control_button"], () => console.log("This will reset the simulation.")));
    controls.push(createSimulationControlButton("external_speed_button", "Speed Up", ["external_simulation_control_button"], () => console.log("This will increase the simulation speed.")));
    controls.push(createSimulationControlButton("external_save_button", "Save", ["external_simulation_control_button"], () => console.log("This will save the simulation state.")));
    controls.push(createSimulationControlButton("external_load_button", "Load", ["external_simulation_control_button"], () => console.log("This will load a new state for the simulation.")));
    controls.push(createSimulationControlButton("external_guide_button", "Guide", ["external_simulation_control_button"], () => console.log("This will open the relevant guide.")));

    return controls;
}

function createSimulationControlButton(buttonID, buttonText, buttonClasses, buttonDefaultClickFunction) {
    let button = document.createElement("button");

    button.id = buttonID;
    button.innerText = buttonText;
    button.classList.add(...buttonClasses);
    button.hidden = true;

    button.addEventListener("click", buttonDefaultClickFunction);

    return button;
}
