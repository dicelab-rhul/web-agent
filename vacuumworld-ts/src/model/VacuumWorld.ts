export class VacuumWorld {
    // TODO: Implement.

    public run(): void {
        console.log("RUN.");

        let paragraph = document.createElement("p");
        paragraph.textContent = "Hello World!";

        if (document.getElementById("initial_view_div") === null || document.getElementById("initial_view_div") === undefined) {
            throw new Error("No such element.");
        }
        else {
            document.getElementById("initial_view_div")!.appendChild(paragraph);
            document.getElementById("initial_view_div")!.removeAttribute("hidden");
        }
    }
}
