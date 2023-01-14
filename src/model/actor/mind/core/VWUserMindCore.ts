import { VWAction } from "../../../actions/VWAction";
import { VWUserDifficulty } from "../../../common/VWUserDifficulty";
import { VWAbstractMindCore } from "./VWAbstractMindCore";

export class VWUserMindCore extends VWAbstractMindCore {
    private difficultyLevel: VWUserDifficulty;

    public constructor(difficultyLevel?: VWUserDifficulty) {
        super();

        if (difficultyLevel === null || difficultyLevel === undefined) {
            this.difficultyLevel = VWUserDifficulty.BASIC;
        }
        else {
            this.difficultyLevel = difficultyLevel;
        }
    }

    public getDifficultyLevel(): VWUserDifficulty {
        return this.difficultyLevel;
    }

    public switchDifficultyLevel(): void {
        if (this.difficultyLevel === VWUserDifficulty.BASIC) {
            this.difficultyLevel = VWUserDifficulty.ADVANCED;
        }
        else {
            this.difficultyLevel = VWUserDifficulty.BASIC;
        }
    }

    public revise(): void {
        // TODO: Implement.
    }

    public decide(): VWAction[] {
        return []; // TODO: Implement.
    }
}
