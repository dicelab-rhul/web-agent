import { VWExistenceChecker } from "../../../utils/VWExistenceChecker";
import { VWDiv } from "../../common/VWDiv";

export class VWDraggableDiv implements VWDiv {
    private div: HTMLDivElement;
    private displayedImage: HTMLImageElement;
    private packed: boolean;

    public constructor(imageSrc: string) {
        this.div = document.createElement("div");
        this.div.classList.add("draggable-body-div");
        this.div.hidden = true;
        this.displayedImage = document.createElement("img");
        this.displayedImage.src = imageSrc;
        this.displayedImage.classList.add("draggable-image");
        this.packed = false;
    }

    public pack(): void {
        if (this.packed) {
            console.log("The draggable body is already packed.");
        }
        else if (!VWExistenceChecker.exists(this.div)) {
            throw new Error("Cannot pack: the draggable body's div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot pack: the draggable body's div is not hidden (it must be before packing it).");
        }
        else if (!VWExistenceChecker.exists(this.displayedImage)) {
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
        else if (!VWExistenceChecker.exists(this.div)) {
            throw new Error("Cannot unpack: the draggable body's div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot unpack: the draggable body's div is not hidden (it must be before packing it).");
        }
        else if (!VWExistenceChecker.exists(this.displayedImage)) {
            throw new Error("Cannot unpack: the draggable body's image is null or undefined.");
        }
        else {
            this.div.removeChild(this.displayedImage);
            this.packed = false;
        }
    }

    public show(): void {
        if (!VWExistenceChecker.exists(this.div)) {
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
        if (!VWExistenceChecker.exists(this.div)) {
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
        if (!VWExistenceChecker.exists(this.div)) {
            throw new Error("Cannot get the draggable body's div: it is null or undefined.");
        }
        else {
            return this.div;
        }
    }
}
