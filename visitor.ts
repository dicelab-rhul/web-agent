abstract class A {}

class MoveAction extends A {}

class TurnAction extends A {}

class Env {
    public start(action: A) {
        const executor = Env.getExecutorFor(action);
        executor.attempt(action, this);
    }

    public static getExecutorFor(action: A): Executor {
        if (action instanceof MoveAction) {
            return new MoveExecutor();
        }
        else if (action instanceof TurnAction) {
            return new TurnExecutor();
        }
        else {
            throw new Error("Unknown action type.");
        }
    }

    public move(action: MoveAction) {
        // ...
    }

    public turn(action: TurnAction) {
        // ...
    }
}

abstract class Executor {
    public abstract attempt(action: A, env: Env): void
}

class MoveExecutor extends Executor {
    public attempt(action: MoveAction, env: Env): void {
        // Do something, then call env.handle1(action)
        env.move(action);
    }
}

class TurnExecutor extends Executor {
    public attempt(action: TurnAction, env: Env): void {
        // Do something, then call env.handle2(action)
        env.turn(action);
    }
}
