import globalGUIConfig from "../../../../static/json/gui.json";
import guiConfig from "./gui.json";

const rightContainerDivData = globalGUIConfig.gui.containerDivData.children.rightContainerDivData;
const exampleDivData = guiConfig.gui.exampleDivData;

export class HelloWorld {
    private constructor() {}

    public static main(): void {
        let example_div: HTMLDivElement = document.createElement("div");

        example_div.id = exampleDivData.id;
        example_div.textContent = exampleDivData.textContent;

        document.getElementById(rightContainerDivData.id).appendChild(example_div);
    }
}
