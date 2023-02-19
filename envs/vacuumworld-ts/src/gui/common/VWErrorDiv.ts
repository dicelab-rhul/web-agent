import globalGUIConfig from "../../../../../static/json/gui.json";

const errorDivData = globalGUIConfig.gui.errorDivData;

export class VWErrorDiv {
    private constructor() {}

    public static displayError(error: string): void {
        document.getElementById(errorDivData.id).textContent = error;
        document.getElementById(errorDivData.id).removeAttribute("hidden");
        document.getElementById(errorDivData.id).classList.remove("hidden");
        document.getElementById(errorDivData.id).addEventListener("click", () => VWErrorDiv.hideError());
    }

    public static hideError(): void {
        document.getElementById(errorDivData.id).textContent = "";
        document.getElementById(errorDivData.id).hidden = true;
        document.getElementById(errorDivData.id).classList.add("hidden");
    }
}
