# Web-Agent

Browser-based Teleo-Reactive agent development.

## How to run the system (production)

### The first time (to install the dependencies as well)

```console
user@machine:~$ ./deploy.sh
```

### From the second time onwards

```console
user@machine:~$ ./quick_deploy.sh
```

### If nothing was modified

```console
user@machine:~$ ./run.sh
```

## How to run the system (development)

### The first time (to install the dependencies as well) - no minified code

```console
user@machine:~$ ./dev_deploy.sh
```

### From the second time onwards - no minified code

```console
user@machine:~$ ./quick_dev_deploy.sh
```

### If nothing was modified - no minified code

```console
user@machine:~$ ./run.sh
```

## How to add a new environment to the deployment pipeline

* Create a child directory (let's say `new_env`) in `envs`.
&NewLine;
&NewLine;
* Make sure that `new_env` has minimally the following structure:
    | `new_env`
    |---- `dist`
    |-------- `css`
    |------------ `style.css`
    |-------- `js`
    |---- `node_modules`
    |---- `res`
    |-------- `images`
    |------------ `choice.png`
    |------------ `favicon.ico`
    |---- `src`
    |-------- `main.ts`
    |---- `webpack-config`
    |-------- `webpack.dev_config.cjs`
    |-------- `webpack.prod_config.cjs`
    |-------- `webpack.shared_config.cjs`
    |---- `deploy.sh`
    |---- `dev_deploy.sh`
    |---- `package.json`
    |---- `quick_deploy.sh`
    |---- `quick_dev_deploy.sh`
    |---- `tsconfig.json`
&NewLine;
&NewLine;
* Make sure that `new_env/res/images/choice.png` is a `200x200` pixel image (it will be used as a clickable image in the environment selection view).
&NewLine;
&NewLine;
* Make sure that `new_env/res/images/favicon.ico` is a `32x32` pixel image (it will be used as the favicon of the environment).
&NewLine;
&NewLine;
* Make sure that your TypeScript code adds new listeners to the external controls (check out the children of `externalSimulationControlsDivData` in `static/json/gui.json` for the list of available controls).
&NewLine;
&NewLine;
* Make sure that your TypeScript code adds a new listener to the Teleora save button (check out `teleoraSaveButtonData` in `teleora/src/gui/gui.json` for details on such button).
&NewLine;
&NewLine;
* Have a look at `envs/example-env-ts` for a concrete example (including the content of the relevant scripts / configuration files).

## Teleora

The agent behaviour in each environment can be programmed in the Teleora editor to the left of the environment. The Teleora language specification can be found [here](TELEORA.md).
