import { VWPlatformDiv } from "../gui/platform/div/VWPlatformDiv";
import { VWExistenceChecker } from "./utils/VWExistenceChecker";
import envData from "../../../../static/json/envs.json"

export class VacuumWorld {
    private constructor() {}

    public static run(): void {
        VacuumWorld.setTitle("VacuumWorld");

        let platformDiv: VWPlatformDiv = new VWPlatformDiv(`/static/${envData["vacuumworld-ts"]}/res/images/start_menu.png`);

        platformDiv.pack();

        document.getElementById("right_container_div").appendChild(platformDiv.getDiv());

        platformDiv.show();
    }

    private static setTitle(title: string): void {
        if (VWExistenceChecker.allArgumentsExist(title) && title !== "") {
            document.title = title;
        }
    }
}
