import { VWBroadcastAction } from "./VWBroadcastAction";
import { VWCleanAction } from "./VWCleanAction";
import { VWDropDirtAction } from "./VWDropDirtAction";
import { VWIdleAction } from "./VWIdleAction";
import { VWMoveAction } from "./VWMoveAction";
import { VWSpeakAction } from "./VWSpeakAction";
import { VWTurnAction } from "./VWTurnAction";

export class VWActionEffort {
    private static ACTION_EFFORTS: Map<string, bigint> = VWActionEffort.loadDefaultActionEfforts();

    private static loadDefaultActionEfforts(): Map<string, bigint> {
        const actionEfforts: Map<string, bigint> = new Map<string, bigint>();

        actionEfforts.set(typeof VWIdleAction, 1n);
        actionEfforts.set(typeof VWMoveAction, 1n);
        actionEfforts.set(typeof VWTurnAction, 1n);
        actionEfforts.set(typeof VWCleanAction, 1n);
        actionEfforts.set(typeof VWDropDirtAction, 1n);
        actionEfforts.set(typeof VWSpeakAction, 1n);
        actionEfforts.set(typeof VWBroadcastAction, 1n);

        return actionEfforts;
    }

    public static getEffort(actionName: string): bigint {
        if (VWActionEffort.ACTION_EFFORTS.has(actionName)) {
            return VWActionEffort.ACTION_EFFORTS.get(actionName)!;
        }
        else {
            return 1n;
        }
    }
}
