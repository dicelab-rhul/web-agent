import { VWExistenceChecker } from "../../../model/utils/VWExistenceChecker";
import { VWDiv } from "../../common/VWDiv";

import guiConfig from "../../common/gui.json";

const { draggableBodyDivData } = guiConfig.platformDivData.children.gridDivData.children.draggableBodiesDivData.grandChildren;
const { draggableImagesData } = draggableBodyDivData.children;

export class VWDraggableDiv implements VWDiv {
    private div: HTMLDivElement;
    private displayedImage: HTMLImageElement;
    private packed: boolean;

    public constructor(imageSrc: string) {
        this.div = document.createElement("div");
        this.div.classList.add(...draggableBodyDivData.classes);
        this.div.hidden = true;

        this.addDragEventsListeners();

        this.displayedImage = document.createElement("img");
        this.displayedImage.src = imageSrc;
        this.displayedImage.classList.add(...draggableImagesData.classes);
        this.packed = false;
    }

    private addDragEventsListeners(): void {
        this.div.addEventListener("dragstart", (event: DragEvent) => {
            (<HTMLElement>event.target).classList.add("dragging");

            event.dataTransfer.setData("source", draggableImagesData.classes[0]);
        });

        this.div.addEventListener("dragend", (event: DragEvent) => {
            (<HTMLElement>event.target).classList.remove("dragging");
        });
    }

    public pack(): void {
        if (this.packed) {
            console.log("The draggable body is already packed.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot pack: the draggable body's div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot pack: the draggable body's div is not hidden (it must be before packing it).");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.displayedImage)) {
            throw new Error("Cannot pack: the draggable body's div is null or undefined.");
        }
        else {
            this.div.appendChild(this.displayedImage);
            this.packed = true;
        }
    }

    public unpack(): void {
        if (!this.packed) {
            console.log("The draggable body's div is already unpacked.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot unpack: the draggable body's div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot unpack: the draggable body's div is not hidden (it must be before packing it).");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.displayedImage)) {
            throw new Error("Cannot unpack: the draggable body's image is null or undefined.");
        }
        else {
            this.div.removeChild(this.displayedImage);
            this.packed = false;
        }
    }

    public show(): void {
        if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot show: the draggable body's div is null or undefined.");
        }
        else if (!this.div.hidden) {
            console.log("The draggable body's div is already shown.");
        }
        else if (!this.packed) {
            throw new Error("Cannot show: the draggable body's div is not packed.");
        }
        else {
            this.div.hidden = false;
        }
    }

    public hide(): void {
        if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot hide: the draggable body's div is null or undefined.");
        }
        else if (this.div.hidden) {
            console.log("The draggable body's div is already shown.");
        }
        else if (!this.packed) {
            throw new Error("Cannot hide: the draggable body's div is not packed.");
        }
        else {
            this.div.hidden = false;
        }
    }

    public getDiv(): HTMLDivElement {
        return VWExistenceChecker.validateExistence(this.div, "Cannot get the draggable body's div: it is null or undefined.");
    }

    public isPacked(): boolean {
        return this.packed;
    }

    public isHidden(): boolean {
        return this.getDiv().hidden;
    }
}
