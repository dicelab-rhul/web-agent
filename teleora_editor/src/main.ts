import { TeleoraDiv } from "./gui/div/TeleoraDiv";

import globalGUIConfig from "../../static/json/gui.json";

const leftContainerDivData = globalGUIConfig.gui.containerDivData.children.leftContainerDivData;

const teleoraDiv: TeleoraDiv = new TeleoraDiv();

document.getElementById(leftContainerDivData.id).appendChild(teleoraDiv.getDiv());
