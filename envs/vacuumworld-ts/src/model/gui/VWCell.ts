import { VWLocationAppearance } from "../environment/VWLocationAppearance";

export class VWCell {
    private cell: HTMLDivElement;
    private locationAppearance: VWLocationAppearance;
    private displayedImage: HTMLImageElement;
    private packed: boolean;

    public constructor(locationAppearance: VWLocationAppearance) {
        this.locationAppearance = VWCell.validateLocationAppearance(locationAppearance);
        this.createLocationImage();
        this.packed = false;
        this.cell = document.createElement("div");
        this.cell.classList.add("cell");
        this.cell.id = `cell-${locationAppearance.getCoord().getX()}-${locationAppearance.getCoord().getY()}`;
    }

    private static validateLocationAppearance(locationAppearance: VWLocationAppearance): VWLocationAppearance {
        if (locationAppearance === null || locationAppearance === undefined) {
            throw new Error("Cannot create a cell without a location appearance.");
        }
        else {
            return locationAppearance;
        }
    }

    private createLocationImage(): void {
        this.displayedImage = document.createElement("img");
        this.displayedImage.src = this.getCellImageSrc();
        this.displayedImage.classList.add("location-image");
    }

    private getCellImageSrc(): string {
        // TODO: get the image src from the location appearance.
    
        return "envs/vacuumworld-ts/res/images/locations/empty.png";
    }

    public pack(): void {
        if (this.displayedImage === null || this.displayedImage === undefined) {
            throw new Error("Cannot pack a cell that has no image");
        }
        else if (this.locationAppearance === null || this.locationAppearance === undefined) {
            throw new Error("Cannot pack a cell for which no location appearance is available.");
        }
        else if (this.cell === null || this.cell === undefined) {
            throw new Error("Cannot pack a non-existent cell.");
        }
        else if (!this.packed) {
            this.cell.appendChild(this.displayedImage);
            this.packed = true;
        }
    }

    public unpack(): void {
        if (this.packed) {
            this.cell.removeChild(this.displayedImage);
            this.locationAppearance = null;
            this.displayedImage = null;
            this.packed = false;
        }
    }

    public isPacked(): boolean {
        return this.packed;
    }

    public getCell(): HTMLDivElement {
        return this.cell;
    }
}