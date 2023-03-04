export class TeleoraButton {
    private button: HTMLButtonElement;

    public constructor(id: string, text: string, title: string, classes: string[], callback: () => void) {
        this.button = document.createElement("button");

        this.button.id = id;
        this.button.textContent = text;
        this.button.title = title;

        this.button.classList.add(...classes);

        this.button.addEventListener("click", callback);
    }

    public getButton(): HTMLButtonElement {
        return this.button;
    }
}
