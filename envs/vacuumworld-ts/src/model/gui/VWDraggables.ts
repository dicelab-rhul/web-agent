import { VWDraggable } from "./simulation/div/VWDraggable";

export class VWDraggables {
    private draggablesDiv: HTMLDivElement;
    private draggables: VWDraggable[];
    private packed: boolean;

    public constructor() {
        this.draggablesDiv = document.getElementById("draggable_bodies_div") as HTMLDivElement;
        this.draggables = this.createDraggables();
        this.packed = false;
    }

    private createDraggables(): VWDraggable[] {
        const actorNames: string[] = [
            "green_north.png",
            "orange_north.png",
            "white_north.png",
            "user_north.png"
        ]

        const dirtNames: string[] = [
            "green_dirt.png",
            "orange_dirt.png"
        ]

        const draggables: VWDraggable[] = [];

        actorNames.forEach(name => {
            const draggable: VWDraggable = new VWDraggable(`envs/vacuumworld-ts/res/images/actors/${name}`);

            draggables.push(draggable);
        });

        dirtNames.forEach(name => {
            const draggable: VWDraggable = new VWDraggable(`envs/vacuumworld-ts/res/images/dirt/${name}`);

            draggables.push(draggable);
        });

        return draggables;
    }

    public pack(): void {
        if (!this.packed) {
            this.draggables.forEach(draggable => {
                draggable.pack();

                this.draggablesDiv.appendChild(draggable.getCell());
            });

            this.packed = true;
        }
    }

    public unpack(): void {
        if (this.packed) {
            this.draggables.forEach(draggable => {
                this.draggablesDiv.removeChild(draggable.getCell());

                draggable.unpack();
            });

            this.packed = false;
        }
    }

    public show(): void {
        document.getElementById("draggable_bodies_div").removeAttribute("hidden");
    }
}
