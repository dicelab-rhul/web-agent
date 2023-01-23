import { VWCoord } from "../../../common/VWCoord";
import { VWMap } from "../../../common/VWMap";
import { VWExistenceChecker } from "../../../utils/VWExistenceChecker";
import { VWDiv } from "../../common/VWDiv";
import { VWCell } from "./VWCell";

export class VWGridDiv implements VWDiv {
    private div: HTMLDivElement; // Will have ID "grid_div";
    private gridSize: number; // The length of the grid's side.
    private gridMap: VWMap<VWCoord, VWCell>;
    private packed: boolean;

    public constructor() {
        this.div = document.createElement("div");
        this.div.id = "grid_div";
        this.div.classList.add("grid", "center-aligned");
        this.div.hidden = true;
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
                tableCell.appendChild(this.gridMap.get(coord).getCell());
                tableRow.appendChild(tableCell);
            }

            table.appendChild(tableRow);
        }

        return table;
    }

    public updateGrid(gridSize: number, grid: VWMap<VWCoord, VWCell>): void {
        this.gridSize = VWGridDiv.validateGridSize(gridSize);
        this.gridMap = VWGridDiv.validateGrid(grid);
    }

    public pack(): void {
        if (this.gridSize === null || this.gridSize === undefined || this.gridSize <= 0) { // TODO: check the min and max grid size from the config file.
            throw new Error("Cannot pack a grid that has no size.");
        }
        else if (this.div === null || this.div === undefined) {
            throw new Error("Cannot pack a grid that has no div.");
        }
        else if (this.gridMap === null || this.gridMap === undefined) {
            throw new Error("Cannot pack a grid that has no cells.");
        }
        else if (!this.packed) {
            this.gridMap.forEach((cell: VWCell) => cell.pack());

            let table: HTMLTableElement = this.createTableForGrid();
            this.div.appendChild(table);
            this.packed = true;
        }
    }

    public unpack(): void {
        if (!this.packed) {
            console.log("The initial view div is already unpacked.");
        }
        else if (!VWExistenceChecker.exists(this.div)) {
            throw new Error("Cannot unpack: the grid div is null or undefined.");
        }
        else if (!VWExistenceChecker.exists(this.gridMap)) {
            throw new Error("Cannot unpack: the grid map is null or undefined.");
        }
        else if (this.div.childElementCount === 0) {
            throw new Error("Cannot unpack: the grid div has no children.");
        }
        else {
            this.div.removeChild(this.div.firstChild);
            this.gridMap.forEach((cell: VWCell) => cell.unpack());
            this.gridMap = null;
            this.packed = false;
        }
    }

    public show(): void {
        if (this.div === null || this.div === undefined) {
            throw new Error("Cannot show a grid that has no div.");
        }
        else if (!this.div.hidden) {
            console.log("The grid div is already shown.");
        }
        else if (!this.packed) {
            throw new Error("Cannot show: the grid div is not packed.");
        }
        else {
           this.div.hidden = false;
        }
    }

    public hide(): void {
        if (this.div === null || this.div === undefined) {
            throw new Error("Cannot hide: the grid div is null or undefined.");
        }
        else if (this.div.hidden) {
            console.log("The grid div is already hidden.");
        }
        else if (!this.packed) {
            throw new Error("Cannot hide: the grid div is not packed.");
        }
        else {
            this.div.hidden = true;
        }
    }

    public getDiv(): HTMLDivElement {
        if (this.div === null || this.div === undefined) {
            throw new Error("Cannot get the grid div: it is null or undefined.");
        }
        else {
            return this.div;
        }
    }
}
