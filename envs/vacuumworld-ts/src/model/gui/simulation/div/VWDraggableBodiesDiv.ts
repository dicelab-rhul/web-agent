import { VWExistenceChecker } from "../../../utils/VWExistenceChecker";
import { VWDiv } from "../../common/VWDiv";
import { VWDraggableDiv } from "./VWDraggableDiv";

export class VWDraggableBodiesDiv implements VWDiv {
    private div: HTMLDivElement; // Will have ID "draggable_bodies_div";
    private draggableBodies: VWDraggableDiv[]; // GreenA, orangeA, whiteA, user, greenD, orangeD.
    private packed: boolean;
    private gridSize: number; // So that the draggable bodies div can be displayed without overflowing.

    public constructor(gridSize?: number) {
        this.div = document.createElement("div");
        this.div.id = "draggable_bodies_div";
        this.div.hidden = true;

        this.createDraggableBodies();

        this.gridSize = gridSize;
        this.packed = false;
    }

    private createDraggableBodies(): void {
        this.draggableBodies = [];

        const draggableBodiesActorImgNames: string[] = ["green_north", "orange_north", "white_north", "user_north"]
        const draggableBodiesDirtImgNames: string[] = ["green_dirt", "orange_dirt"];
        const draggableBodiesImgSuffix: string = ".png";
        const draggableBodiesImgPrefix: string = "/envs/vacuumworld-ts/res/images/locations/";
        const actor: string = "actor/";
        const dirt: string = "dirt/";
        const allImagesPaths: string[] = VWDraggableBodiesDiv.createAllImagesPaths(draggableBodiesActorImgNames, draggableBodiesDirtImgNames, draggableBodiesImgSuffix, draggableBodiesImgPrefix, actor, dirt);

        allImagesPaths.forEach((imagePath: string) => this.draggableBodies.push(new VWDraggableDiv(imagePath)));
    }

    private static createAllImagesPaths(draggableBodiesActorImgNames: string[], draggableBodiesDirtImgNames: string[], draggableBodiesImgSuffix: string, draggableBodiesImgPrefix: string, actor: string, dirt: string): string[] {
        const allImagesPaths: string[] = [];

        draggableBodiesActorImgNames.forEach((draggableBodiesActorImgName: string) => {
            allImagesPaths.push(draggableBodiesImgPrefix + actor + draggableBodiesActorImgName + draggableBodiesImgSuffix);
        });

        draggableBodiesDirtImgNames.forEach((draggableBodiesDirtImgName: string) => {
            allImagesPaths.push(draggableBodiesImgPrefix + dirt + draggableBodiesDirtImgName + draggableBodiesImgSuffix);
        });

        return allImagesPaths;
    }

    public updateGridSize(gridSize: number): void {
        this.gridSize = VWExistenceChecker.validateExistence(gridSize, "The grid size is null or undefined.");
    }

    public pack(): void {
        if (this.packed) {
            console.log("The draggable bodies div is already packed.");
        }
        else if (!VWExistenceChecker.exists(this.div)) {
            throw new Error("Cannot pack the draggable bodies div: it is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot pack: the draggable bodies div is not hidden (it must be before packing it).");
        }
        else if (!VWExistenceChecker.exists(this.gridSize)) {
            throw new Error("Cannot pack the draggable bodies div: the grid size is null or undefined.");
        }
        else if (!VWExistenceChecker.allExist(this.draggableBodies)) {
            throw new Error("Cannot pack the draggable bodies div: the draggable bodies array is null or undefined, or contains null or undefined elements.");
        }
        else {
            this.draggableBodies.forEach((draggableBody: VWDraggableDiv) => {
                draggableBody.pack();

                // TODO: use the grid size to determine how to append the draggable bodies to the div.
                this.div.appendChild(draggableBody.getDiv());
            });

            this.packed = true;
        }
    }

    public unpack(): void {
        if (!this.packed) {
            console.log("The draggable bodies div is already unpacked.");
        }
        else if (!VWExistenceChecker.exists(this.div)) {
            throw new Error("Cannot unpack the draggable bodies div: it is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot unpack: the draggable bodies div is not hidden (it must be before packing it).");
        }
        else if (!VWExistenceChecker.exists(this.gridSize)) {
            throw new Error("Cannot unpack the draggable bodies div: the grid size is null or undefined.");
        }
        else if (!VWExistenceChecker.allExist(this.draggableBodies)) {
            throw new Error("Cannot unpack the draggable bodies div: the draggable bodies array is null or undefined, or contains null or undefined elements.");
        }
        else {
            this.draggableBodies.forEach((draggableBody: VWDraggableDiv) => {
                // TODO: use the grid size to determine how to remove the draggable bodies from the div.
                this.div.removeChild(draggableBody.getDiv());

                draggableBody.unpack();
            });

            this.packed = true;
        }
    }

    public show(): void {
        if (!VWExistenceChecker.exists(this.div)) {
            throw new Error("Cannot show: the draggable bodies div is null or undefined.");
        }
        else if (!this.div.hidden) {
            console.log("The draggable bodies div is already shown.");
        }
        else if (!this.packed) {
            throw new Error("Cannot show: the draggable bodies div is not packed.");
        }
        else {
            this.draggableBodies.forEach((draggableBody: VWDraggableDiv) => draggableBody.show());

            this.div.hidden = false;
        }
    }

    public hide(): void {
        if (!VWExistenceChecker.exists(this.div)) {
            throw new Error("Cannot hide: the draggable bodies div is null or undefined.");
        }
        else if (this.div.hidden) {
            console.log("The draggable bodies div is already shown.");
        }
        else if (!this.packed) {
            throw new Error("Cannot hide: the draggable bodies div is not packed.");
        }
        else {
            this.draggableBodies.forEach((draggableBody: VWDraggableDiv) => draggableBody.hide());

            this.div.hidden = false;
        }
    }

    public getDiv(): HTMLDivElement {
        // It does not matter if it is packed or not.
        return this.div;
    }
}
