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

    public static allExist(obj: Iterable<any>): boolean {
        return VWExistenceChecker.exists(obj) && Array.from(obj).every((o: any) => VWExistenceChecker.exists(o));
    }

    public static validateExistence<T>(obj: T, errorMessage?: string): T {
        if (obj === null || obj === undefined) {
            throw new Error(errorMessage || "The object is null or undefined.");
        }
        else {
            return obj;
        }
    }
}
