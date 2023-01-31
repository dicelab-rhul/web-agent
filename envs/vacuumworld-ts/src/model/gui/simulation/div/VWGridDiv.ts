import { VWCoord } from "../../../common/VWCoord";
import { VWMap } from "../../../common/VWMap";
import { VWExistenceChecker } from "../../../utils/VWExistenceChecker";
import { VWDiv } from "../../common/VWDiv";
import { VWCell } from "./VWCell";
import { VWDraggableBodiesDiv } from "./VWDraggableBodiesDiv";

export class VWGridDiv implements VWDiv {
    private div: HTMLDivElement; // Will have ID "grid_div";
    private gridSize: number; // The length of the grid's side.
    private gridMap: VWMap<VWCoord, VWCell>;
    private draggableBodiesDiv: VWDraggableBodiesDiv;
    private packed: boolean;

    public constructor() {
        this.div = document.createElement("div");
        this.div.id = "grid_div";
        this.div.classList.add("grid", "center-aligned");
        this.div.hidden = true;
        this.draggableBodiesDiv = new VWDraggableBodiesDiv();
        this.packed = false;
    }

    private static validateGridSize(gridSize: number): number { // TODO: check the min and max grid size from the config file.
        if (!VWExistenceChecker.allArgumentsExist(gridSize) || gridSize <= 0) {
            throw new Error("Cannot create a grid with no size.");
        }
        else {
            return gridSize;
        }
    }

    private static validateGrid(grid: VWMap<VWCoord, VWCell>): VWMap<VWCoord, VWCell> {
        if (!VWExistenceChecker.allArgumentsExist(grid)) {
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
                tableCell.appendChild(this.gridMap.get(coord).getDiv());
                tableRow.appendChild(tableCell);
            }

            table.appendChild(tableRow);
        }

        return table;
    }

    public updateGrid(gridSize: number, grid: VWMap<VWCoord, VWCell>): void {
        this.gridSize = VWGridDiv.validateGridSize(gridSize);
        this.gridMap = VWGridDiv.validateGrid(grid);

        this.draggableBodiesDiv.updateGridSize(this.gridSize);
    }

    public pack(): void {
        if (!VWExistenceChecker.allArgumentsExist(this.gridSize) || this.gridSize <= 0) { // TODO: check the min and max grid size from the config file.
            throw new Error("Cannot pack a grid that has no size.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot pack a grid that has no div.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.gridMap)) {
            throw new Error("Cannot pack a grid that has no cells.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.draggableBodiesDiv)) {
            throw new Error("Cannot pack a grid that has not got a draggable bodies div.");
        }
        else if (!this.packed) {
            this.gridMap.forEach((cell: VWCell) => cell.pack());

            let table: HTMLTableElement = this.createTableForGrid();
            this.div.appendChild(table);
            this.div.appendChild(this.draggableBodiesDiv.getDiv());
            this.packed = true;
        }
    }

    public unpack(): void {
        if (!this.packed) {
            console.log("The initial view div is already unpacked.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.div)) {
            throw new Error("Cannot unpack: the grid div is null or undefined.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.gridMap)) {
            throw new Error("Cannot unpack: the grid map is null or undefined.");
        }
        else if (this.div.childElementCount === 0) {
            throw new Error("Cannot unpack: the grid div has no children.");
        }
        else if (!VWExistenceChecker.allArgumentsExist(this.draggableBodiesDiv)) {
            throw new Error("Cannot pack a grid that has not got a draggable bodies div.");
        }
        else {
            this.div.removeChild(this.div.firstChild);
            this.gridMap.forEach((cell: VWCell) => cell.unpack());
            this.div.removeChild(this.draggableBodiesDiv.getDiv());
            this.gridMap = null;
            this.packed = false;
        }
    }

    public show(): void {
        if (!VWExistenceChecker.allArgumentsExist(this.div)) {
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
        if (!VWExistenceChecker.allArgumentsExist(this.div)) {
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
        return VWExistenceChecker.validateExistence(this.div, "Cannot get the grid div: the div is null or undefined.");
    }

    public getDraggableBodiesDiv(): VWDraggableBodiesDiv {
        return VWExistenceChecker.validateExistence(this.draggableBodiesDiv, "Cannot get the draggable bodies div: the div is null or undefined.");
    }

    public setDraggableBodiesDiv(draggableBodiesDiv: VWDraggableBodiesDiv): void {
        if (!VWExistenceChecker.allArgumentsExist(draggableBodiesDiv)) {
            throw new Error("Cannot set the draggable bodies div: it is null or undefined.");
        }
        else {
            this.draggableBodiesDiv = draggableBodiesDiv;
        }
    }

    public isPacked(): boolean {
        return this.packed;
    }

    public isHidden(): boolean {
        return this.getDiv().hidden;
    }
}
