export class VWDraggable {
    private cell: HTMLDivElement;
    private displayedImage: HTMLImageElement;
    private packed: boolean;

    public constructor(imageSrc: string) {
        this.cell = document.createElement("div");
        this.cell.classList.add("draggable-cell");
        this.displayedImage = document.createElement("img");
        this.displayedImage.src = imageSrc;
        this.displayedImage.classList.add("draggable-image");
        this.packed = false;
    }

    public pack(): void {
        if (!this.packed) {
            this.cell.appendChild(this.displayedImage);
            this.packed = true;
        }
    }

    public unpack(): void {
        if (this.packed) {
            this.cell.removeChild(this.displayedImage);
            this.packed = false;
        }
    }

    public getCell(): HTMLDivElement {
        return this.cell;
    }
}
