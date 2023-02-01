import { VWPlatformDiv } from "../gui/platform/div/VWPlatformDiv";
import { VWExistenceChecker } from "./utils/VWExistenceChecker";

export class VacuumWorld {
    private constructor() {}

    public static run(): void {
        VacuumWorld.setTitle("VacuumWorld");

        let platformDiv: VWPlatformDiv = new VWPlatformDiv("/envs/vacuumworld-ts/res/images/start_menu.png");

        platformDiv.pack();

        document.getElementById("container_div").appendChild(platformDiv.getDiv());

        platformDiv.show();
    }

    private static setTitle(title: string): void {
        if (VWExistenceChecker.allArgumentsExist(title) && title !== "") {
            document.title = title;
        }
    }
}
