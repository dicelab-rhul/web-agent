import { VWColour } from "../common/VWColour";
import { VWOrientation } from "../common/VWOrientation";
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
        if (this.locationAppearance === null || this.locationAppearance === undefined) {
            throw new Error("Cannot get the image src for a cell for which no location appearance is available.");
        }
        else if (this.locationAppearance.hasActor()) {
            return this.getCellImageSrcIfActorIsPresent();
        }
        else if (this.locationAppearance.hasDirt()) {
            return this.getCellImageSrcIfDirtIsPresent();
        }
        else {
            return "envs/vacuumworld-ts/res/images/locations/empty.png";
        }        
    }

    private getCellImageSrcIfActorIsPresent(): string {
        const actorOrientation: VWOrientation = this.locationAppearance.getActorAppearance().orElseThrow().getOrientation();
        const actorColour: VWColour = this.locationAppearance.getActorAppearance().orElseThrow().getColour();
        const orientation: string = actorOrientation.toString().toLowerCase();
        const colour: string = actorColour.toString().toLowerCase();

        return `envs/vacuumworld-ts/res/images/locations/actor/${colour}_${orientation}.png`;
    }

    private getCellImageSrcIfDirtIsPresent(): string {
        const dirtColour: VWColour = this.locationAppearance.getDirtAppearance().orElseThrow().getColour();
        const colour: string = dirtColour.toString().toLowerCase();

        return `envs/vacuumworld-ts/res/images/locations/dirt/${colour}_dirt.png`;
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
