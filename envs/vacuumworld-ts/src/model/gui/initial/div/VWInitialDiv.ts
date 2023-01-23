import { VWDiv } from "../../common/VWDiv";

export class VWInitialViewDiv implements VWDiv {
    private div: HTMLDivElement; // Will have ID "initial_view_div";
    private img: HTMLImageElement; // Will have ID "initial_view_img";
    private packed: boolean;

    public constructor(initialViewImgPath: string) {
        if (initialViewImgPath === null || initialViewImgPath === undefined) {
            throw new Error("The path of the initial view image cannot be null or undefined.");
        }
        else {
            this.div = document.createElement("div");
            this.div.id = "initial_view_div";
            this.div.hidden = true;
            this.img = document.createElement("img");
            this.img.id = "initial_view_img";
            this.img.src = initialViewImgPath;
            this.packed = false;
        }
    }

    public pack(): void {
        if (this.packed) {
            console.log("The initial view div is already packed.");
        }
        else if (this.div === null || this.div === undefined) {
            throw new Error("Cannot pack: the div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot pack: the initial view div is not hidden (it must be before packing it).");
        }
        else if (this.img === null || this.img === undefined) {
            throw new Error("Cannot pack: the image is null or undefined.");
        }
        else {
            this.div.appendChild(this.img);
            this.packed = true;
        }
    }

    public unpack(): void {
        if (!this.packed) {
            console.log("The initial view div is already unpacked.");
        }
        else if (this.div === null || this.div === undefined) {
            throw new Error("Cannot unpack: the div is null or undefined.");
        }
        else if (!this.div.hidden) {
            throw new Error("Cannot unpack: the initial view div is not hidden (it must be before unpacking it).");
        }
        else if (this.img === null || this.img === undefined) {
            throw new Error("Cannot unpack: the image is null or undefined.");
        }
        else {
            this.div.removeChild(this.img);
            this.packed = false;
        }
    }

    public show(): void {
        if (this.div === null || this.div === undefined) {
            throw new Error("Cannot show: the div is null or undefined.");
        }
        else if (!this.div.hidden) {
            console.log("The initial view div is already shown.");
        }
        else if (!this.packed) {
            throw new Error("Cannot show: the initial view div is not packed.");
        }
        else {
            this.div.hidden = false;
        }
    }

    public hide(): void {
        if (this.div === null || this.div === undefined) {
            throw new Error("Cannot hide: the div is null or undefined.");
        }
        else if (this.div.hidden) {
            console.log("The initial view div is already hidden.");
        }
        else if (!this.packed) {
            throw new Error("Cannot hide: the initial view div is not packed.");
        }
        else {
            this.div.hidden = true;
        }
    }

    public getDiv(): HTMLDivElement {
        if (this.div === null || this.div === undefined) {
            throw new Error("Cannot get the initial view div: the div is null or undefined.");
        }
        else {
            return this.div;
        }
    }
}
