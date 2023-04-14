import { VWPlatformDiv } from "./platform/div/VWPlatformDiv";
import { VWExistenceChecker } from "../model/utils/VWExistenceChecker";

import envConfig from "../model/config.json";
import guiConfig from "./common/gui.json";
import globalGUIConfig from "../../../../static/json/gui.json";
import envData from "../../../../static/json/envs.json";

const envName: string = envConfig.envName;
const title: string = guiConfig.title;
const containerDivData = globalGUIConfig.gui.containerDivData;
const rightContainerDivData = containerDivData.children.rightContainerDivData;
const errorDivData = globalGUIConfig.gui.errorDivData;

export class VacuumWorld {
    public static SERVERLESS_MODE: boolean = false;
    private constructor() {}

    public static run(): void {
        const envPath: string = Object.entries(envData).find((entry) => entry[0] === envName)[1];

        if (VWExistenceChecker.allArgumentsExist(envPath)) {
            document.title = title;

            VacuumWorld.setMode();

            let platformDiv: VWPlatformDiv = new VWPlatformDiv(VacuumWorld.SERVERLESS_MODE ? `/${envPath}/res/images/start_menu.png`: `/static/${envPath}/res/images/start_menu.png`);

            platformDiv.pack();

            document.getElementById(rightContainerDivData.id).appendChild(platformDiv.getDiv());

            platformDiv.show();
        }
        else {
            document.title = errorDivData.title;

            document.getElementById(containerDivData.id).classList.remove(...containerDivData.classesVisible);
            document.getElementById(containerDivData.id).classList.add(...containerDivData.classesHidden);

            let paragraph: HTMLParagraphElement = document.createElement("p");

            paragraph.textContent = "Could not find the selected environment.";

            document.getElementById(errorDivData.id).appendChild(paragraph);

            document.getElementById(errorDivData.id).hidden = false;
        }
    }

    private static setMode(): void {
        VacuumWorld.SERVERLESS_MODE = document.getElementById("serverless_flag") !== null && document.getElementById("serverless_flag").getAttribute("serverless") === "true";
    }
}
