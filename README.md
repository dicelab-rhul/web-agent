# Web-Agent

Browser-based Teleo-Reactive agent development.

## Python3 Virtual Environment

Web-Agent requires a Python3 virtual environment to run the server. You have to create one before deploying the server the first time.

## How to run the system (production)

### The first time (to install the dependencies as well)

```console
user@machine:~$ ./deploy.sh [--launch]
```

The optional `--launch` flag will automatically open the system in your default browser.

### From the second time onwards

```console
user@machine:~$ ./quick_deploy.sh [--launch]
```

The optional `--launch` flag will automatically open the system in your default browser.

### If nothing was modified

```console
user@machine:~$ ./run.sh [--launch]
```

The optional `--launch` flag will automatically open the system in your default browser.

## How to run the system (development)

### The first time (to install the dependencies as well) - no minified code

```console
user@machine:~$ ./dev_deploy.sh [--launch]
```

The optional `--launch` flag will automatically open the system in your default browser.

### From the second time onwards - no minified code

```console
user@machine:~$ ./quick_dev_deploy.sh [--launch]
```

The optional `--launch` flag will automatically open the system in your default browser.

### If nothing was modified - no minified code

```console
user@machine:~$ ./run.sh [--launch]
```

The optional `--launch` flag will automatically open the system in your default browser.

## How to add a new environment to the deployment pipeline

* Create a child directory (let's say `new_env`) in `envs`.

* Make sure that `new_env` has minimally the following structure:\
    | `new_env/`\
    |---- `dist/`\
    |-------- `css/`\
    |------------ `style.css`\
    |-------- `js/`\
    |---- `node_modules/`\
    |---- `res/`\
    |-------- `images/`\
    |------------ `choice.png`\
    |------------ `favicon.ico`\
    |---- `src/`\
    |-------- `main.ts`\
    |---- `webpack-config/`\
    |-------- `webpack.dev_config.cjs`\
    |-------- `webpack.prod_config.cjs`\
    |-------- `webpack.shared_config.cjs`\
    |---- `deploy.sh`\
    |---- `dev_deploy.sh`\
    |---- `package.json`\
    |---- `quick_deploy.sh`\
    |---- `quick_dev_deploy.sh`\
    |---- `tsconfig.json`

* Make sure that `new_env/res/images/choice.png` is a `200x200` pixel image (it will be used as a clickable image in the environment selection view).

* Make sure that `new_env/res/images/favicon.ico` is a `32x32` pixel image (it will be used as the favicon of the environment).

* Make sure that your TypeScript code adds new listeners to the external controls (check out the children of `externalSimulationControlsDivData` in `static/json/gui.json` for the list of available controls).

* Make sure that your TypeScript code adds a new listener to the Teleora `use` button (check out `teleoraUseButtonData` in `teleora/src/gui/gui.json` for details on such button). The idea is to invoke a parser that translates the code in the currently displayed Teleora tab into something usable by the environment. The parser itself must be provided by the environment.

* Make sure you **NEVER** use inline event handlers (e.g., `onclick="..."`) in your HTML/TypeScript code. They will be ungracefully blocked by the Content Security Policy. Instead, use the `addEventListener()` function in one of your TypeScript files. For the same reason, you **MUST NOT** use libraries that create such inline event handlers.

* Make sure you **NEVER** use JavaScript URIs (e.g., `href="javascript:..."`) in your HTML/TypeScript code. They will be ungracefully blocked by the Content Security Policy. For the same reason, you **MUST NOT** use libraries that create such JavaScript URIs.

* Make sure you **NEVER** use `eval()` in your HTML/TypeScript code. It will be ungracefully blocked by the Content Security Policy. For the same reason, you **MUST NOT** use libraries that use `eval()`.

* Make sure you **NEVER** use style attributes (e.g., `style="..."`) in your HTML/TypeScript code. They will be ungracefully blocked by the Content Security Policy. For the same reason, you **MUST NOT** use libraries that create such style attributes.

* If your TypeScript (then converted to JavaScript) code creates any inline script/style tags:
  * Make sure they are created using the `document.createElement()` function (or similar functions), and inserted using the `appendChild()` function (or similar functions).

  * In particular, you **MUST NOT** use API methods that call the parser (e.g., `document.write()`) to create and/or insert script/style tags. Otherwise, your script/style tags will be ungracefully blocked by the Content Security Policy.

  * Make sure to propagate the `nonce` attribute from your main script. Otherwise, your script/style tags will be ungracefully blocked by the Content Security Policy.

* Have a look at `envs/example-env-ts` for a concrete example (including the content of the relevant scripts / configuration files).

## Teleora

The agent behaviour in each environment can be programmed in the Teleora editor to the left of the environment. The Teleora language specification can be found [here](TELEORA.md).
