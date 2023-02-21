import { VWPlatformDiv } from "./platform/div/VWPlatformDiv";

import envConfig from "../model/config.json";
import globalGUIConfig from "../../../../static/json/gui.json";
import envData from "../../../../static/json/envs.json";
import { VWExistenceChecker } from "../model/utils/VWExistenceChecker";

const envName: string = envConfig.envName;
const containerDivData = globalGUIConfig.gui.containerDivData;
const rightContainerDivData = containerDivData.children.rightContainerDivData;
const errorDivData = globalGUIConfig.gui.errorDivData;

export class VacuumWorld {
    private constructor() {}

    public static run(): void {
        const envPath: string = Object.entries(envData).find((entry) => entry[0] === envName)[1];

        if (!VWExistenceChecker.allArgumentsExist(envPath)) {
            document.title = "VacuumWorld";

            let platformDiv: VWPlatformDiv = new VWPlatformDiv(`/static/${envPath}/res/images/start_menu.png`);

            platformDiv.pack();

            document.getElementById(rightContainerDivData.id).appendChild(platformDiv.getDiv());

            platformDiv.show();
        }
        else {
            document.title = "Error";

            document.getElementById(containerDivData.id).classList.remove(...containerDivData.classesVisible);
            document.getElementById(containerDivData.id).classList.add(...containerDivData.classesHidden);

            let paragraph: HTMLParagraphElement = document.createElement("p");

            paragraph.textContent = "Could not find the selected environment." // This is automatically escaped by the browser.

            document.getElementById(errorDivData.id).appendChild(paragraph);

            document.getElementById(errorDivData.id).hidden = false;
        }
    }
}
