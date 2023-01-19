import { VWActionName } from "../common/VWActionName";


export class VWActionEffort {
    private constructor() {}

    public static ACTION_EFFORTS: Map<VWActionName, bigint> = VWActionEffort.loadDefaultActionEfforts();

    private static loadDefaultActionEfforts(): Map<VWActionName, bigint> {
        const actionEfforts: Map<VWActionName, bigint> = new Map<VWActionName, bigint>();

        actionEfforts.set(VWActionName.VWIdleAction, 1n);
        actionEfforts.set(VWActionName.VWMoveAction, 1n);
        actionEfforts.set(VWActionName.VWTurnAction, 1n);
        actionEfforts.set(VWActionName.VWCleanAction, 1n);
        actionEfforts.set(VWActionName.VWDropDirtAction, 1n);
        actionEfforts.set(VWActionName.VWSpeakAction, 1n);
        actionEfforts.set(VWActionName.VWBroadcastAction, 1n);

        return actionEfforts;
    }

    public static getEffort(actionName: string | VWActionName): bigint {
        return VWActionEffort.ACTION_EFFORTS.get(actionName as VWActionName);
    }
}
