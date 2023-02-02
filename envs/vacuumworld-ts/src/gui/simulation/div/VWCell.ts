import { VWColour } from "../../../model/common/VWColour";
import { VWCoord } from "../../../model/common/VWCoord";
import { VWDirection } from "../../../model/common/VWDirection";
import { VWOrientation } from "../../../model/common/VWOrientation";
import { VWLocationAppearance } from "../../../model/environment/VWLocationAppearance";
import { VWExistenceChecker } from "../../../model/utils/VWExistenceChecker";
import { VWDiv } from "../../common/VWDiv";

export class VWCell implements VWDiv {
    private cell: HTMLDivElement;
    private locationAppearance: VWLocationAppearance;
    private displayedImage: HTMLImageElement;
    private dropCallback: (imageSrc: string, locationAppearance: VWLocationAppearance) => VWLocationAppearance;
    private rotateCallback: (direction: VWDirection, locationAppearance: VWLocationAppearance) => VWLocationAppearance;
    private doubleClickCallback: (locationAppearance: VWLocationAppearance) => VWLocationAppearance;
    private clickCallback: (coord?: VWCoord) => void;
    private packed: boolean;
    private static debug: boolean = false;

    public constructor(locApp: VWLocationAppearance) {
        this.locationAppearance = VWExistenceChecker.validateExistence(locApp, "Cannot create a cell without a location appearance.");

        this.createLocationImage();

        this.cell = document.createElement("div");
        this.cell.classList.add("cell");
        this.cell.id = `cell-${locApp.getCoord().getX()}-${locApp.getCoord().getY()}`;

        this.packed = false;
    }

    public addCallbacks(drop: (imgSrc: string, locApp: VWLocationAppearance) => VWLocationAppearance, rotate: (dir: VWDirection, locApp: VWLocationAppearance) => VWLocationAppearance, dClick: (locApp: VWLocationAppearance) => VWLocationAppearance, click: (c?: VWCoord) => void) {
        this.dropCallback = drop;
        this.rotateCallback = rotate;
        this.doubleClickCallback = dClick;
        this.clickCallback = click;

        this.addListeners();
    }

    private createLocationImage(): void {
        this.displayedImage = document.createElement("img");
        this.displayedImage.src = this.getCellImageSrc();
        this.displayedImage.classList.add("location-image", "dropzone");
    }

    // Public because it is called when the simulation is stopped to re-add the listeners.
    public addListeners(): void {
        this.addDragOverListener();
        this.addDragEnterListener();
        this.addDragLeaveListener();
        this.addDropListener();
        this.addClickListener();
        this.addDoubleClickListener();
        this.addRotateListener();
    }

    private addDragOverListener(): void {
        this.displayedImage.addEventListener("dragover", (event: DragEvent) => {
            event.preventDefault();

            if (event.dataTransfer.getData("source") === "draggable-image" && (<HTMLElement>event.target).classList.contains("dropzone")) {
                this.clickCallback(this.locationAppearance.getCoord());
            }
        });
    }

    private addDragEnterListener(): void {
        this.displayedImage.addEventListener("dragenter", (event: DragEvent) => {
            if (event.dataTransfer.getData("source") === "draggable-image" && (<HTMLElement>event.target).classList.contains("dropzone")) {
                (<HTMLElement>event.target).classList.add("dragover");

                for (const element of document.getElementsByClassName("selected")) {
                    element.classList.remove("selected");
                }

                this.manageSingleClick(event);
            }
        });
    }

    private addDragLeaveListener(): void {
        this.displayedImage.addEventListener("dragleave", (event: DragEvent) => {
            if ((<HTMLElement>event.target).classList.contains("dropzone")) {
                (<HTMLElement>event.target).classList.remove("dragover");

                for (const element of document.getElementsByClassName("selected")) {
                    element.classList.remove("selected");
                }

                this.clickCallback();
            }
        });
    }

    private addDropListener(): void {
        this.displayedImage.addEventListener("drop", (event: DragEvent) => {
            event.preventDefault();

            if ((<HTMLElement>event.target).classList.contains("dropzone")) {
                (<HTMLElement>event.target).classList.remove("dragover");

                const draggedImg: HTMLImageElement = document.getElementsByClassName("dragging")[0] as HTMLImageElement;

                if (VWExistenceChecker.allArgumentsExist(draggedImg)) {
                    this.locationAppearance = this.dropCallback(draggedImg.src, this.locationAppearance);

                    (<HTMLImageElement>event.target).src = this.getCellImageSrc();

                    for (const element of document.getElementsByClassName("selected")) {
                        element.classList.remove("selected");
                    }

                    this.displayedImage.classList.add("selected");

                    this.clickCallback(this.locationAppearance.getCoord());

                    console.log("Dropped.");
                }
            }
        });
    }

    private addClickListener(): void {
        this.displayedImage.addEventListener("click", (event: MouseEvent) => this.manageSingleClick(event));
    }

    private manageSingleClick(event: MouseEvent): void {
        if ((<HTMLImageElement>event.target).classList.contains("dropzone")) {
            const toHighlight: boolean = !this.displayedImage.classList.contains("selected");

            for (const element of document.getElementsByClassName("selected")) {
                element.classList.remove("selected");
            }

            if (toHighlight) {
                this.displayedImage.classList.add("selected");

                this.clickCallback(this.locationAppearance.getCoord());
            }
            else {
                this.clickCallback();
            }
        }
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
        if (VWExistenceChecker.allArgumentsExist(this.displayedImage) && this.displayedImage.classList.contains("selected") && this.locationAppearance.hasActor()) {
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
        if (!VWExistenceChecker.allArgumentsExist(this.locationAppearance)) {
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
        const debugPath: string = VWCell.debug ? "debug/" : "";

        return `envs/vacuumworld-ts/res/images/locations/${debugPath}actor/${colour}_${orientation}.png`;
    }

    private getCellImageSrcIfDirtIsPresent(): string {
        const dirtColour: VWColour = this.locationAppearance.getDirtAppearance().orElseThrow().getColour();
        const colour: string = dirtColour.toString().toLowerCase();

        return `envs/vacuumworld-ts/res/images/locations/dirt/${colour}_dirt.png`;
    }

    public pack(): void {
        if (!VWExistenceChecker.allArgumentsExist(this.displayedImage)) {
            throw new Error("Cannot pack a cell that has no image.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.locationAppearance)) {
            throw new Error("Cannot pack a cell for which no location appearance is available.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.cell)) {
            throw new Error("Cannot pack a non-existent cell.");
        }
        else if (!this.packed) {
            this.cell.appendChild(this.displayedImage);

            this.packed = true;
        }
    }

    public unpack(): void {
        if (!VWExistenceChecker.allArgumentsExist(this.displayedImage)) {
            throw new Error("Cannot unpack a cell that has no image.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.locationAppearance)) {
            throw new Error("Cannot unpack a cell for which no location appearance is available.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.cell)) {
            throw new Error("Cannot unpack a non-existent cell.");
        }
        else if (this.packed) {
            this.cell.removeChild(this.displayedImage);

            this.locationAppearance = null;
            this.displayedImage = null;
            this.packed = false;
        }
    }

    public show(): void {
        if (!VWExistenceChecker.allArgumentsExist(this.cell)) {
            throw new Error("Cannot show: the cell div is null or undefined.");
        }
        else if (!this.cell.hidden) {
            console.log("The cell div is already shown.");
        }
        else if (!this.packed) {
            throw new Error("Cannot show: the cell div is not packed.");
        }
        else {
            this.cell.hidden = false;
        }
    }

    public hide(): void {
        if (!VWExistenceChecker.allArgumentsExist(this.cell)) {
            throw new Error("Cannot hide: the cell div is null or undefined.");
        }
        else if (this.cell.hidden) {
            console.log("The cell div is already shown.");
        }
        else if (!this.packed) {
            throw new Error("Cannot hide: the cell div is not packed.");
        }
        else {
            this.cell.hidden = false;
        }
    }

    public getDiv(): HTMLDivElement {
        return VWExistenceChecker.validateExistence(this.cell, "Cannot get the cell: the cell is null or undefined.");
    }

    public isPacked(): boolean {
        return this.packed;
    }

    public isHidden(): boolean {
        return this.getDiv().hidden;
    }

    public static turnDebugOn(): void {
        VWCell.debug = true;
    }

    public static turnDebugOff(): void {
        VWCell.debug = false;
    }
}
