export class VWErrorDiv {
    private constructor() {}

    public static displayError(error: string): void {
        document.getElementById("error_div").innerText = error;
        document.getElementById("error_div").removeAttribute("hidden");
        document.getElementById("error_div").addEventListener("click", () => VWErrorDiv.hideError());
    }

    public static hideError(): void {
        document.getElementById("error_div").innerText = "";
        document.getElementById("error_div").hidden = true;
    }
}
