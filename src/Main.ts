import envsData from "../static/json/envs.json";
import globalGUIConfig from "../static/json/gui.json";
import teleoraData from "../static/json/teleora.json";
import { DOMPurifyPolicy } from "./TTPolicies";

const { containerDivData, choiceDivData, errorDivData, externalSimulationControlsDivData } = globalGUIConfig.gui;
const { leftContainerDivData, rightContainerDivData } = containerDivData.children;
const externalButtonsData = externalSimulationControlsDivData.children;

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
    private static NONCE: string = undefined;
    private constructor() {}

    public static main(): void {
        Main.setNonce();
        Main.setTitle();
        Main.loadCharset();
        Main.createContainerDiv();
        Main.loadStyle("/static/css/index.css"); // This is the main style of the page.
        Main.loadChoiceDiv();
        Main.createAndHideSimulationControlsDiv();
        Main.createErrorDiv();
    }

    public static setNonce(): void {
        if (document.getElementById("index_script").nonce !== null && document.getElementById("index_script").nonce !== undefined) {
            Main.NONCE = document.getElementById("index_script").nonce;
        }
    }

    public static setTitle(): void {
        document.title = "Web-Agent";
    }

    private static loadCharset(): void {
        let charset: HTMLMetaElement = document.createElement("meta");

        charset.setAttribute("charset", "utf-8");

        document.head.appendChild(charset);
    }

    private static getResourcesPaths(envPath: string): ResourcePaths {
        return {
            favicon: `/static/${envPath}/res/images/favicon.ico`,
            envStyle: `/static/${envPath}/dist/css/style.css`,
            envScript: `/static/${envPath}/dist/js/main.js`
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
        if (document.getElementById(containerDivData.id) === null) {
            let containerDiv: HTMLDivElement = document.createElement("div");

            containerDiv.id = containerDivData.id;

            containerDiv.classList.add(...containerDivData.classesVisible);

            document.body.appendChild(containerDiv);
        }
        else {
            throw new Error("The container div already exists.");
        }
    }

    private static createErrorDiv(): void {
        if (document.getElementById(errorDivData.id) === null) {
            let errorDiv: HTMLDivElement = document.createElement("div");

            errorDiv.id = errorDivData.id;
            errorDiv.classList.add(...errorDivData.classes);
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

            mainStyle.href = DOMPurifyPolicy.createScriptURL(stylePath) as TrustedScriptURL&string; // Why not :)
            mainStyle.rel = "stylesheet";
            mainStyle.type = "text/css";

            document.head.appendChild(Main.propagateNonceToElement(mainStyle));
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

            script.src = DOMPurifyPolicy.createScriptURL(scriptPath) as TrustedScriptURL&string;
            script.type = "text/javascript";
            script.async = false;
            script.defer = defer === undefined || defer === null ? false : defer;

            document.body.appendChild(Main.propagateNonceToElement(script));
        }
    }

    private static propagateNonceToElement(element: HTMLElement): HTMLElement {
        if (element !== null && element !== undefined && Main.NONCE !== null && Main.NONCE !== undefined) {
            element.setAttribute("nonce", Main.NONCE);
        }

        return element;
    }

    private static loadChoiceDiv(): void {
        let choiceDiv: HTMLDivElement = document.createElement("div");

        choiceDiv.id = choiceDivData.id;
        choiceDiv.classList.add(...choiceDivData.classes);

        document.body.appendChild(choiceDiv);

        Object.values(envsData).forEach((envPath) => Main.addEntryToChoiceDiv(envPath));
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

        const imgPath: string = `/static/${choicePath}/res/images/choice.png`;

        let choiceDiv: HTMLDivElement = document.getElementById(choiceDivData.id) as HTMLDivElement;
        let choice: HTMLImageElement = document.createElement("img");

        choice.src = imgPath;
        choice.classList.add(...choiceDivData.children.choicesImagesData.classes);

        choiceDiv.appendChild(choice);

        choice.addEventListener("click", () => {
            document.querySelectorAll(`.${choiceDivData.children.choicesImagesData.classes[0]}`).forEach((choice) => choiceDiv.removeChild(choice));

            choiceDiv.hidden = true;

            Main.loadSubContainerDiv(leftContainerDivData.id, leftContainerDivData.classes);
            Main.loadSubContainerDiv(rightContainerDivData.id, rightContainerDivData.classes);
            Main.loadEnvironmentDiv(choicePath);
            Main.loadTeleoraDiv();
            Main.disableFurtherScriptsLoading();
        });
    }

    private static loadSubContainerDiv(id: string, classes: string[]): void {
        let subContainerDiv: HTMLDivElement = document.createElement("div");

        subContainerDiv.id = id;
        subContainerDiv.classList.add(...classes);

        document.getElementById(containerDivData.id).appendChild(subContainerDiv);
    }

    private static loadEnvironmentDiv(choicePath: string): void {
        const resourcesPaths: ResourcePaths = Main.getResourcesPaths(choicePath);

        Main.loadFavicon(resourcesPaths.favicon);
        Main.loadStyle(resourcesPaths.envStyle); // This is the main style of the environment.
        Main.loadScript(resourcesPaths.envScript); // This is the main script of the environment.
    }

    private static createAndHideSimulationControlsDiv(): void {
        let simulationControlsDiv: HTMLDivElement = document.createElement("div");

        simulationControlsDiv.id = externalSimulationControlsDivData.id;
        simulationControlsDiv.classList.add(...externalSimulationControlsDivData.classes);
        simulationControlsDiv.hidden = true;

        Main.createSimulationControls().forEach((control: HTMLButtonElement) => simulationControlsDiv.appendChild(control));

        document.body.appendChild(simulationControlsDiv);
    }

    private static createSimulationControls(): HTMLButtonElement[] {
        let controls: HTMLButtonElement[] = [];

        for (let btnData of Object.values(externalButtonsData)) {
            if (btnData.id === externalButtonsData.toggleTeleoraEditorBtn.id) {
                controls.push(Main.createSimulationControlButton(btnData.id, btnData.text, btnData.classes, Main.toggleTeleoraEditor));
            }
            else {
                controls.push(Main.createSimulationControlButton(btnData.id, btnData.text, btnData.classes, () => console.log(btnData.defaultLogMessage)));
            }
        }

        return controls;
    }

    private static toggleTeleoraEditor(): void {
        if (document.getElementById(leftContainerDivData.id).classList.contains("hidden")) {
            document.getElementById(leftContainerDivData.id).classList.remove("hidden");
            document.getElementById(leftContainerDivData.id).classList.add(...leftContainerDivData.classes);
            document.getElementById(rightContainerDivData.id).classList.remove(rightContainerDivData.classAlone);
            document.getElementById(rightContainerDivData.id).classList.add(rightContainerDivData.classNotAlone);
        }
        else {
            document.getElementById(leftContainerDivData.id).classList.remove(...leftContainerDivData.classes);
            document.getElementById(leftContainerDivData.id).classList.add("hidden");
            document.getElementById(rightContainerDivData.id).classList.remove(rightContainerDivData.classNotAlone);
            document.getElementById(rightContainerDivData.id).classList.add(rightContainerDivData.classAlone);
        }
    }

    private static createSimulationControlButton(buttonID: string, buttonText: string, buttonClasses: string[], buttonDefaultClickFunction: () => void): HTMLButtonElement {
        let button: HTMLButtonElement = document.createElement("button");

        button.id = buttonID;
        button.textContent = buttonText;
        button.classList.add(...buttonClasses);
        button.hidden = true;

        button.addEventListener("click", buttonDefaultClickFunction);

        return button;
    }

    private static getTeleoraResourcesPaths(): TeleoraResourcePaths {
        return {
            teleoraScript: `/static/${teleoraData.editor}/dist/js/main.js`,
            teleoraStyle: `/static/${teleoraData.editor}/dist/css/style.css`,
        }
    }

    private static loadTeleoraDiv(): void {
        const resourcesPaths: TeleoraResourcePaths = Main.getTeleoraResourcesPaths();

        Main.loadStyle(resourcesPaths.teleoraStyle); // This is the main Teleora style.
        Main.loadScript(resourcesPaths.teleoraScript); // This is the main Teleora script.
    }

    private static disableFurtherScriptsLoading(): void {
        let metaTag = document.createElement("meta");

        metaTag.setAttribute("http-equiv", "Content-Security-Policy");
        metaTag.setAttribute("content", "script-src 'none';");

        document.head.appendChild(metaTag);
    }
}
