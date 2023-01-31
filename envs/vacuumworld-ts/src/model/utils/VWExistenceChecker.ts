export class VWExistenceChecker {
    private constructor() {}

    public static allArgumentsExist(...obj: any[]): boolean {
        return obj !== null && obj !== undefined && obj.every((o: any) => o !== null && o !== undefined);
    }

    public static allValuesExist(obj: Iterable<any>): boolean {
        return obj !== null && obj !== undefined && VWExistenceChecker.allArgumentsExist(...Array.from(obj));
    }

    public static validateExistence<T>(obj: T, errorMessage?: string): T {
        if (VWExistenceChecker.allArgumentsExist(obj)) {
            return obj;
        }
        else {
            throw new Error(errorMessage || "The object is null or undefined.");
        }
    }

    public static validateAllExistence<T>(obj: T[], errorMessage?: string): T[] {
        if (VWExistenceChecker.allValuesExist(obj)) {
            return obj;
        }
        else {
            throw new Error(errorMessage || "The object is null or undefined.");
        }
    }
}
