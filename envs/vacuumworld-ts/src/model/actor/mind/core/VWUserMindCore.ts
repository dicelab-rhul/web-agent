import { VWAction } from "../../../actions/VWAction";
import { VWDropDirtAction } from "../../../actions/VWDropDirtAction";
import { VWMoveAction } from "../../../actions/VWMoveAction";
import { VWTurnAction } from "../../../actions/VWTurnAction";
import { VWColour } from "../../../common/VWColour";
import { VWDirection } from "../../../common/VWDirection";
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

        this.setMindCoreFilePath(__filename);
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
        // No need to revise anything.
    }

    public decide(): VWAction[] {
        if (this.difficultyLevel === VWUserDifficulty.BASIC) {
            return this.decideBasic();
        }
        else if (this.difficultyLevel === VWUserDifficulty.ADVANCED) {
            return this.decideAdvanced();
        }
        else {
            throw new Error("Unknown difficulty level.");
        }
    }

    private decideBasic(): VWAction[] {
        if (this.getLatestObservation().isWallImmediatelyAhead()) {
            return this.decideIfWallAheadAndBasic();
        }
        else if (this.getLatestObservation().getCenter().orElseThrow().hasDirt()) {
            return this.decideIfOnDirtAndBasic();
        }
        else {
            return this.actRandomly(0.2, 0.2, 0.45, 0.075, 0.075);
        }
    }

    private decideIfWallAheadAndBasic(): VWAction[] {
        if (this.getLatestObservation().isWallImmediatelyToTheLeft()) {
            return [new VWTurnAction(this.getOwnID(), VWDirection.RIGHT)];
        }
        else if (this.getLatestObservation().isWallImmediatelyToTheRight()) {
            return [new VWTurnAction(this.getOwnID(), VWDirection.LEFT)];
        }
        else {
            return this.turnRandomly();
        }
    }

    private decideIfOnDirtAndBasic(): VWAction[] {
        if (this.getLatestObservation().isWallImmediatelyToTheLeft()) {
            return this.moveOrTurnRandomly(0.6, 0.0, 0.4);
        }
        else if (this.getLatestObservation().isWallImmediatelyToTheRight()) {
            return this.moveOrTurnRandomly(0.6, 0.4, 0.0);
        }
        else {
            return this.moveOrTurnRandomly(0.5, 0.25, 0.25);
        }
    }

    private decideAdvanced(): VWAction[] {
        if (this.getLatestObservation().isWallImmediatelyAhead()) {
            return this.decideIfWallAheadAndAdvanced();
        }
        else if (this.isActorImmediatelyAhead()) {
            return this.decideIfActorAheadAndAdvanced();
        }
        else if (this.isActorImmediatelyToTheLeft() && this.isActorImmediatelyToTheRight()) {
            return this.dropOrMoveRandomly(0.1, 0.1, 0.8);
        }
        else if (this.isActorImmediatelyToTheLeft() && !this.getLatestObservation().isWallImmediatelyToTheRight()) {
            return this.moveOrTurnRandomly(0.5, 0.0, 0.5);
        }
        else if (this.isActorImmediatelyToTheRight() && !this.getLatestObservation().isWallImmediatelyToTheLeft()) {
            return this.moveOrTurnRandomly(0.5, 0.5, 0.0);
        }
        else if (this.getLatestObservation().isWallImmediatelyToTheLeft()) {
            return this.decideIfWallToTheLeftAndAdvanced();
        }
        else if (this.getLatestObservation().isWallImmediatelyToTheRight()) {
            return this.decideIfWallToTheRightAndAdvanced();
        }
        else {
            return this.actRandomly(0.15, 0.15, 0.6, 0.05, 0.05);
        }
    }

    private decideIfWallAheadAndAdvanced(): VWAction[] {
        if (this.getLatestObservation().isWallImmediatelyToTheLeft()) {
            return [new VWTurnAction(this.getOwnID(), VWDirection.RIGHT)];
        }
        else if (this.getLatestObservation().isWallImmediatelyToTheRight()) {
            return [new VWTurnAction(this.getOwnID(), VWDirection.LEFT)];
        }
        else if (this.isActorImmediatelyToTheLeft() && this.isActorImmediatelyToTheRight()) {
            return this.turnRandomly();
        }
        else if (this.isActorImmediatelyToTheLeft()) {
            return [new VWTurnAction(this.getOwnID(), VWDirection.RIGHT)];
        }
        else if (this.isActorImmediatelyToTheRight()) {
            return [new VWTurnAction(this.getOwnID(), VWDirection.LEFT)];
        }
        else if (this.getLatestObservation().getCenter().orElseThrow().hasDirt()) {
            return this.turnRandomly();
        }
        else {
            return this.actRandomly(0.075, 0.075, 0.6, 0.0, 0.25);
        }
    }

    private decideIfWallToTheLeftAndAdvanced(): VWAction[] {
        if (this.getLatestObservation().getCenter().orElseThrow().hasDirt()) {
            return this.moveOrTurnRandomly(0.9, 0.0, 0.1);
        }
        else {
            return this.actRandomly(0.075, 0.075, 0.6, 0.0, 0.25);
        }
    }

    private decideIfWallToTheRightAndAdvanced(): VWAction[] {
        if (this.getLatestObservation().getCenter().orElseThrow().hasDirt()) {
            return this.moveOrTurnRandomly(0.9, 0.1, 0.0);
        }
        else {
            return this.actRandomly(0.075, 0.075, 0.6, 0.25, 0.0);
        }
    }

    private decideIfActorAheadAndAdvanced(): VWAction[] {
        if (this.getLatestObservation().isWallImmediatelyToTheLeft()) {
            return [new VWTurnAction(this.getOwnID(), VWDirection.RIGHT)];
        }
        else if (this.getLatestObservation().isWallImmediatelyToTheRight()) {
            return [new VWTurnAction(this.getOwnID(), VWDirection.LEFT)];
        }
        else if (this.isActorImmediatelyToTheLeft() && this.isActorImmediatelyToTheRight()) {
            return this.dropRandomDirt();
        }
        else if (this.isActorImmediatelyToTheLeft()) {
            return [new VWTurnAction(this.getOwnID(), VWDirection.RIGHT)];
        }
        else if (this.isActorImmediatelyToTheRight()) {
            return [new VWTurnAction(this.getOwnID(), VWDirection.LEFT)];
        }
        else if (this.getLatestObservation().getCenter().orElseThrow().hasDirt()) {
            return this.turnRandomly();
        }
        else {
            return this.actRandomly(0.25, 0.25, 0.0, 0.25, 0.25);
        }
    }

    private isActorImmediatelyAhead(): boolean {
        return !this.getLatestObservation().isWallImmediatelyAhead() && this.getLatestObservation().getCenter().orElseThrow().hasActor();
    }

    private isActorImmediatelyToTheLeft(): boolean {
        return !this.getLatestObservation().isWallImmediatelyToTheLeft() && this.getLatestObservation().getLeft().orElseThrow().hasActor();
    }

    private isActorImmediatelyToTheRight(): boolean {
        return !this.getLatestObservation().isWallImmediatelyToTheRight() && this.getLatestObservation().getRight().orElseThrow().hasActor();
    }

    private actRandomly(dropGreenWeight: number, dropOrangeWeight: number, moveWeight: number, turnLeftWeight: number, turnRightWeight: number): VWAction[] {
        VWUserMindCore.validateWeights([dropGreenWeight, dropOrangeWeight, moveWeight, turnLeftWeight, turnRightWeight]);

        const randomValue = Math.random();
        const cumulativeSum = (sum => (value: number) => sum += value)(0);
        const cumulativeWeights = [dropGreenWeight, dropOrangeWeight, moveWeight, turnLeftWeight, turnRightWeight].map(cumulativeSum);

        if (randomValue < cumulativeWeights[0]) {
            return [new VWDropDirtAction(this.getOwnID(), VWColour.GREEN)];
        }
        else if (randomValue < cumulativeWeights[1]) {
            return [new VWDropDirtAction(this.getOwnID(), VWColour.ORANGE)];
        }
        else if (randomValue < cumulativeWeights[2]) {
            return [new VWMoveAction(this.getOwnID())];
        }
        else if (randomValue < cumulativeWeights[3]) {
            return [new VWTurnAction(this.getOwnID(), VWDirection.LEFT)];
        }
        else if (randomValue < cumulativeWeights[4]) {
            return [new VWTurnAction(this.getOwnID(), VWDirection.RIGHT)];
        }
        else {
            throw new Error("This should never happen.");
        }
    }

    private static validateWeights(weights: number[]): void {
        if (weights === null || weights === undefined) {
            throw new Error("Weights cannot be null or undefined.");
        }
        else if (weights.some(weight => weight === null || weight === undefined)) {
            throw new Error("Weights cannot contain null or undefined values.");
        }
        else if (weights.some(weight => weight < 0.0)) {
            throw new Error("Weights cannot be negative.");
        }
        else if (weights.some(weight => weight > 1.0)) {
            throw new Error("Weights cannot be greater than 1.0.");
        }
        else {
            VWUserMindCore.validateWeightsSum(weights.reduce((partialSum, elm) => partialSum + elm, 0));
        }
    }

    private static validateWeightsSum(weightsSum: number): void {
        if (weightsSum < 1.0) {
            throw new Error("Weights cannot sum to less than 1.0.");
        }
        else if (weightsSum > 1.0) {
            throw new Error("Weights cannot sum to more than 1.0.");
        }
    }

    private turnRandomly(): VWAction[] {
        return this.actRandomly(0.0, 0.0, 0.0, 0.5, 0.5);
    }

    private moveOrTurnRandomly(moveWeight: number, turnLeftWeight: number, turnRightWeight: number): VWAction[] {
        return this.actRandomly(0.0, 0.0, moveWeight, turnLeftWeight, turnRightWeight);
    }

    private dropOrMoveRandomly(dropGreenWeight: number, dropOrangeWeight: number, moveWeight: number): VWAction[] {
        return this.actRandomly(dropGreenWeight, dropOrangeWeight, moveWeight, 0.0, 0.0);
    }

    private dropRandomDirt(): VWAction[] {
        return this.actRandomly(0.5, 0.5, 0.0, 0.0, 0.0);
    }

    public newCore(): VWUserMindCore {
        return new VWUserMindCore(this.difficultyLevel);
    }
}
