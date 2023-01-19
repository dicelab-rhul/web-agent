import { VWCoord } from "../common/VWCoord";
import { VWMap } from "../common/VWMap";
import { VWCell } from "./VWCell";

export class VWGrid {
    private gridSize: number; // The length of the grid's side.
    private gridDiv: HTMLDivElement;
    private grid: VWMap<VWCoord, VWCell>;
    private packed: boolean;

    public constructor(gridSize: number, grid: VWMap<VWCoord, VWCell>) {
        this.gridSize = VWGrid.validateGridSize(gridSize);
        this.gridDiv = document.createElement("div");
        this.gridDiv.classList.add("grid", "center-aligned");
        this.grid = VWGrid.validateGrid(grid);
        this.packed = false;
    }

    private static validateGridSize(gridSize: number): number { // TODO: check the min and max grid size from the config file.
        if (gridSize === null || gridSize === undefined || gridSize <= 0) {
            throw new Error("Cannot create a grid with no size.");
        }
        else {
            return gridSize;
        }
    }

    private static validateGrid(grid: VWMap<VWCoord, VWCell>): VWMap<VWCoord, VWCell> {
        if (grid === null || grid === undefined) {
            throw new Error("Cannot create a grid without cells.");
        }
        else if ([...grid.getKeys()].some((coord: VWCoord) => coord === null || coord === undefined)) {
            throw new Error("Cannot create a grid with null or undefined coordinates.");
        }
        else if ([...grid.getValues()].some((cell: VWCell) => cell === null || cell === undefined)) {
            throw new Error("Cannot create a grid with null or undefined cells.");
        }
        else {
            return grid;
        }
    }

    public pack(): void {
        if (this.gridSize === null || this.gridSize === undefined || this.gridSize <= 0) { // TODO: check the min and max grid size from the config file.
            throw new Error("Cannot pack a grid that has no size.");
        }
        else if (this.gridDiv === null || this.gridDiv === undefined) {
            throw new Error("Cannot pack a grid that has no div.");
        }
        else if (this.grid === null || this.grid === undefined) {
            throw new Error("Cannot pack a grid that has no cells.");
        }
        else if (!this.packed) {
            this.grid.forEach((cell: VWCell) => cell.pack());

            let table: HTMLTableElement = this.createTableForGrid();
            this.gridDiv.appendChild(table);
            this.packed = true;
        }
    }

    public show(): void {
        if (this.gridDiv === null || this.gridDiv === undefined) {
            throw new Error("Cannot show a grid that has no div.");
        }
        else {
            document.getElementById("grid_div").appendChild(this.gridDiv);
            document.getElementById("grid_div").removeAttribute("hidden");
        }
    }

    private createTableForGrid(): HTMLTableElement {
        let table: HTMLTableElement = document.createElement("table");
        table.classList.add("grid-table");

        for (let row: number = 0; row < this.gridSize; row++) {
            let tableRow: HTMLTableRowElement = document.createElement("tr");
            tableRow.classList.add("grid-row");

            for (let col: number = 0; col < this.gridSize; col++) {
                let tableCell: HTMLTableCellElement = document.createElement("td");
                tableCell.classList.add("grid-cell");
                const coord: VWCoord = new VWCoord(BigInt(col), BigInt(row));
                tableCell.appendChild(this.grid.get(coord).getCell());
                tableRow.appendChild(tableCell);
            }

            table.appendChild(tableRow);
        }

        return table;
    }

    public unpack(): void {
        if (this.packed) {
            this.gridDiv.removeChild(this.gridDiv.firstChild);
            this.grid.forEach((cell: VWCell) => cell.unpack());
            this.grid = null;
            this.packed = false;
        }
    }
}
