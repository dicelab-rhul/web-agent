import { v4 as uuidv4 } from 'uuid';
import { Identifiable } from './Identifiable';

export class AbstractIdentifiable implements Identifiable {
    private id: string;

    public constructor() {
        this.id = uuidv4();
    }

    public getID(): string {
        return this.id;
    }

    public equals(other: object): boolean {
        if (other === null || other === undefined) {
            return false;
        }
        else if (this === other) {
            return true;
        }
        else if (!(other instanceof AbstractIdentifiable)) {
            return false;
        }
        else {
            return this.id === other.id;
        }
    }
}
