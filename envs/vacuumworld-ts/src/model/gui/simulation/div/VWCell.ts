import { VWColour } from "../../../common/VWColour";
import { VWDirection } from "../../../common/VWDirection";
import { VWOrientation } from "../../../common/VWOrientation";
import { VWLocationAppearance } from "../../../environment/VWLocationAppearance";
import { VWExistenceChecker } from "../../../utils/VWExistenceChecker";

export class VWCell {
    private cell: HTMLDivElement;
    private locationAppearance: VWLocationAppearance;
    private displayedImage: HTMLImageElement;
    private dropCallback: (imageSrc: string, locationAppearance: VWLocationAppearance) => VWLocationAppearance;
    private rotateCallback: (direction: VWDirection, locationAppearance: VWLocationAppearance) => VWLocationAppearance;
    private doubleClickCallback: (locationAppearance: VWLocationAppearance) => VWLocationAppearance;
    private packed: boolean;

    public constructor(locApp: VWLocationAppearance) {
        this.locationAppearance = VWCell.validateLocationAppearance(locApp);

        this.createLocationImage();

        this.cell = document.createElement("div");
        this.cell.classList.add("cell");
        this.cell.id = `cell-${locApp.getCoord().getX()}-${locApp.getCoord().getY()}`;

        this.packed = false;
    }

    public addCallbacks(drop: (imgSrc: string, locApp: VWLocationAppearance) => VWLocationAppearance, rotate: (dir: VWDirection, locApp: VWLocationAppearance) => VWLocationAppearance, dClick: (locApp: VWLocationAppearance) => VWLocationAppearance) {
        this.dropCallback = drop;
        this.rotateCallback = rotate;
        this.doubleClickCallback = dClick;

        this.addListeners();
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
        this.displayedImage.classList.add("location-image", "dropzone");
    }

    // Public because it is called when the simulation is stopped to re-add the listeners.
    public addListeners(): void {
        this.addDropListeners();
        this.addClickListener();
        this.addDoubleClickListener();
        this.addRotateListener();
    }

    private addDropListeners(): void {
        this.displayedImage.addEventListener("dragover", (event: DragEvent) => event.preventDefault());

        this.displayedImage.addEventListener("dragenter", (event: DragEvent) => {
            if (event.dataTransfer.getData("source") === "draggable-image" && (<HTMLElement>event.target).classList.contains("dropzone")) {
                (<HTMLElement>event.target).classList.add("dragover");

                for (const element of document.getElementsByClassName("selected")) {
                    element.classList.remove("selected");
                }
            }
        });

        this.displayedImage.addEventListener("dragleave", (event: DragEvent) => {
            if ((<HTMLElement>event.target).classList.contains("dropzone")) {
                (<HTMLElement>event.target).classList.remove("dragover");
            }
        });

        this.displayedImage.addEventListener("drop", (event: DragEvent) => {
            event.preventDefault();

            if ((<HTMLElement>event.target).classList.contains("dropzone")) {
                (<HTMLElement>event.target).classList.remove("dragover");

                const draggedImg: HTMLImageElement = document.getElementsByClassName("dragging")[0] as HTMLImageElement;

                if (VWExistenceChecker.exists(draggedImg)) {
                    this.locationAppearance = this.dropCallback(draggedImg.src, this.locationAppearance);

                    (<HTMLImageElement>event.target).src = this.getCellImageSrc();

                    console.log("Dropped.");
                }
            }
        });
    }

    private addClickListener(): void {
        this.displayedImage.addEventListener("click", (event: MouseEvent) => {
            if ((<HTMLImageElement>event.target).classList.contains("dropzone")) {
                const toHighlight: boolean = !this.displayedImage.classList.contains("selected");

                for (const element of document.getElementsByClassName("selected")) {
                    element.classList.remove("selected");
                }

                if (toHighlight) {
                    this.displayedImage.classList.add("selected");
                }
            }
        });
    }

    private addDoubleClickListener(): void {
        this.displayedImage.addEventListener("dblclick", (event: MouseEvent) => {
            if ((<HTMLImageElement>event.target).classList.contains("dropzone")) {
                this.locationAppearance = this.doubleClickCallback(this.locationAppearance);

                (<HTMLImageElement>event.target).src = this.getCellImageSrc();

                console.log("Removed.");
            }
        });
    }

    private addRotateListener(): void {
        document.addEventListener("keydown", this.rotate.bind(this));
    }

    private rotate(event: KeyboardEvent): void {
        if (VWExistenceChecker.exists(this.displayedImage) && this.displayedImage.classList.contains("selected") && this.locationAppearance.hasActor()) {
            if (event.code === "ArrowRight") {
                this.locationAppearance = this.rotateCallback(VWDirection.RIGHT, this.locationAppearance);

                this.displayedImage.src = this.getCellImageSrc();

                console.log("Rotated the actor clockwise.");
            }
            else if (event.code === "ArrowLeft") {
                this.locationAppearance = this.rotateCallback(VWDirection.LEFT, this.locationAppearance);

                this.displayedImage.src = this.getCellImageSrc();

                console.log("Rotated the actor counter-clockwise.");
            }
        }
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
