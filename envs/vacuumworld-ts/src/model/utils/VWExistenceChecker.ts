export class VWExistenceChecker {
    private constructor() {}

    public static exists(...obj: any[]): boolean {
        if (obj === null || obj === undefined) {
            return false;
        }
        else {
            return Array.from(obj).every((o: any) => o !== null && o !== undefined);
        }
    }
}
