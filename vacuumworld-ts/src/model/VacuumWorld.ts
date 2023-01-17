// TODO: Finish the implementation.
export class VacuumWorld {
    private speed: number;

    public run(): void {
        document.getElementById("initial_view_div").appendChild(this.loadStartMenu())
        document.getElementById("initial_view_div").removeAttribute("hidden");
        document.getElementById("initial_view_buttons_div").appendChild(this.createButton("Start", "start_button", ["initial_buttons"], this.startSimulation));
        document.getElementById("initial_view_buttons_div").appendChild(this.createButton("Options", "options_button", ["initial_buttons"], this.setOptions));
        document.getElementById("initial_view_buttons_div").appendChild(this.createButton("Guide", "guide_button", ["initial_buttons"], this.openWiki));
        document.getElementById("initial_view_buttons_div").removeAttribute("hidden");
    }

    private loadStartMenu(): HTMLDivElement {
        let img = document.createElement("img");

        img.src = "images/start_menu.png";
        img.alt = "Start menu";

        return img;
    }
    private createButton(text: string, id: string, classes: string[], callback: () => void): HTMLButtonElement {
        let button = document.createElement("button");

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

    private setOptions(): void {
        console.log("Set options."); // TODO: Implement this (in partiular the integration with Teleora).
    }
}
