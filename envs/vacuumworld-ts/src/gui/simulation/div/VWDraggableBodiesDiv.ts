import { VWExistenceChecker } from "../../../model/utils/VWExistenceChecker";
import { VWDiv } from "../../common/VWDiv";
import { VWDraggableDiv } from "./VWDraggableDiv";
import envData from "../../../../../../static/json/envs.json";

import guiConfig from "../../common/gui.json";

const { draggableBodiesDivData } = guiConfig.platformDivData.children.gridDivData.children;
const { leftDraggableBodiesDivData, rightDraggableBodiesDivData } = draggableBodiesDivData.children;

export class VWDraggableBodiesDiv implements VWDiv {
    private div: HTMLDivElement; // Will have ID "draggable_bodies_div";
    private leftDiv: HTMLDivElement; // Will have ID "draggable_bodies_left_div";
    private rightDiv: HTMLDivElement; // Will have ID "draggable_bodies_right_div";
    private draggableBodies: VWDraggableDiv[]; // GreenA, orangeA, whiteA, user, greenD, orangeD.
    private packed: boolean;
    private gridSize: number; // So that the draggable bodies div can be displayed without overflowing.

    public constructor(gridSize?: number) {
        this.div = document.createElement("div");
        this.div.id = draggableBodiesDivData.id;
        this.div.hidden = true;

        this.leftDiv = document.createElement("div");
        this.leftDiv.id = leftDraggableBodiesDivData.id;
        this.div.hidden = true;

        this.rightDiv = document.createElement("div");
        this.rightDiv.id = rightDraggableBodiesDivData.id;
        this.div.hidden = true;

        this.div.classList.add("hidden");

        this.createDraggableBodies();

        this.gridSize = gridSize;
        this.packed = false;
    }

    private createDraggableBodies(): void {
        this.draggableBodies = [];

        const debug: boolean = document.getElementById("debug") !== null && document.getElementById("debug").getAttribute("debug") === "true";
        const draggableBodiesActorImgNames: string[] = ["green_north", "orange_north", "white_north", "user_north"];
        const draggableBodiesDirtImgNames: string[] = ["green_dirt", "orange_dirt"];
        const draggableBodiesImgSuffix: string = ".png";
        const draggableBodiesImgPrefix: string = debug ? `/${envData["vacuumworld-ts"]}/res/images/locations/`: `/static/${envData["vacuumworld-ts"]}/res/images/locations/`;
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
        else if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot pack the draggable bodies div: it is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot pack: the draggable bodies div is not hidden (it must be before packing it).");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.gridSize)) {
            throw new Error("Cannot pack the draggable bodies div: the grid size is null or undefined.");
        }
        else if (!VWExistenceChecker.allValuesExist(this.draggableBodies)) {
            throw new Error("Cannot pack the draggable bodies div: the draggable bodies array is null or undefined, or contains null or undefined elements.");
        }
        else {
            this.packDependingOnGridSize();

            this.packed = true;
        }
    }

    private packDependingOnGridSize(): void {
        if (this.gridSize < this.draggableBodies.length) {
            this.packTwoColumns();
        }
        else {
            this.packOneColumn();
        }
    }

    private packTwoColumns(): void {
        const draggableBodiesLength: number = this.draggableBodies.length;

        for (let i: number = 0; i < this.gridSize; i++) {
            this.draggableBodies[i].pack();

            this.leftDiv.appendChild(this.draggableBodies[i].getDiv());
        }

        for (let i: number = this.gridSize; i < draggableBodiesLength; i++) {
            this.draggableBodies[i].pack();

            this.rightDiv.appendChild(this.draggableBodies[i].getDiv());
        }

        this.div.appendChild(this.leftDiv);
        this.div.appendChild(this.rightDiv);
    }

    private packOneColumn(): void {
        this.draggableBodies.forEach((draggableBody: VWDraggableDiv) => {
            draggableBody.pack();

            this.leftDiv.appendChild(draggableBody.getDiv());

            this.div.appendChild(this.leftDiv);
            // We ignore the right div.
        });
    }

    public unpack(): void {
        if (!this.packed) {
            console.log("The draggable bodies div is already unpacked.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot unpack the draggable bodies div: it is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot unpack: the draggable bodies div is not hidden (it must be before packing it).");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.gridSize)) {
            throw new Error("Cannot unpack the draggable bodies div: the grid size is null or undefined.");
        }
        else if (!VWExistenceChecker.allValuesExist(this.draggableBodies)) {
            throw new Error("Cannot unpack the draggable bodies div: the draggable bodies array is null or undefined, or contains null or undefined elements.");
        }
        else {
            this.unpackDependingOnGridSize();

            this.packed = true;
        }
    }

    private unpackDependingOnGridSize(): void {
        if (this.gridSize < this.draggableBodies.length) {
            this.unpackTwoColumns();
        }
        else {
            this.unpackOneColumn();
        }
    }

    private unpackTwoColumns(): void {
        const draggableBodiesLength: number = this.draggableBodies.length;
        const draggableBodiesHalfLength: number = Math.floor(draggableBodiesLength / 2);

        for (let i: number = 0; i < draggableBodiesHalfLength; i++) {
            this.leftDiv.removeChild(this.draggableBodies[i].getDiv());

            this.draggableBodies[i].unpack();
        }

        for (let i: number = draggableBodiesHalfLength; i < draggableBodiesLength; i++) {
            this.leftDiv.removeChild(this.draggableBodies[i].getDiv());

            this.draggableBodies[i].unpack();
        }

        this.div.removeChild(this.leftDiv);
        this.div.removeChild(this.rightDiv);
    }

    private unpackOneColumn(): void {
        this.draggableBodies.forEach((draggableBody: VWDraggableDiv) => {
            this.leftDiv.removeChild(draggableBody.getDiv());

            draggableBody.unpack();
        });

        this.div.removeChild(this.leftDiv);
    }

    public show(): void {
        if (!VWExistenceChecker.allArgumentsExist(this.div)) {
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

            this.leftDiv.hidden = false;
            this.rightDiv.hidden = false;
            this.div.hidden = false;

            this.div.classList.remove("hidden");
            this.div.classList.add("draggable_bodies_div_visible");
        }
    }

    public hide(): void {
        if (!VWExistenceChecker.allArgumentsExist(this.div)) {
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

            this.div.hidden = true;
            this.leftDiv.hidden = true;
            this.rightDiv.hidden = true;

            this.div.classList.add("hidden");
            this.div.classList.remove("draggable_bodies_div_visible");
        }
    }

    public getDiv(): HTMLDivElement {
        // It does not matter if it is packed or not.
        return this.div;
    }

    public isPacked(): boolean {
        return this.packed;
    }

    public isHidden(): boolean {
        return VWExistenceChecker.allArgumentsExist(this.div) && this.div.hidden; // this.div can be null or undefined, unlike other class-wrapped divs.
    }
}
