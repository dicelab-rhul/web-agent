document.addEventListener("loadstart", function() {
    const resourcesPaths = getResourcesPaths();

    loadFavicon(resourcesPaths.favicon);
});

document.addEventListener("DOMContentLoaded", function() {
    const resourcesPaths = getResourcesPaths();

    createContainerDiv();

    loadStyle(resourcesPaths.mainStyle); // This is the main style of the page.
    loadStyle(resourcesPaths.envStyle); // This is the main style of the environment.
    loadScript(resourcesPaths.envScript); // This is the main script of the environment.
});

// TODO: This function needs to check which environment has been selected and return the appropriate paths.
function getResourcesPaths() {
    return {
        favicon: "/envs/vacuumworld-ts/res/images/favicon.ico",
        mainStyle: "/envs/vacuumworld-ts/dist/style.css",
        envStyle: "/static/css/index.css",
        envScript: "/envs/vacuumworld-ts/dist/main.js"
    };
}

function loadFavicon(faviconPath) {
    if (faviconPath === null || faviconPath === undefined) {
        throw new Error("The favicon path is null or undefined.");
    }
    else if (typeof faviconPath !== "string") {
        throw new Error("The favicon path is not a string.");
    }
    else if (faviconPath.length === 0) {
        throw new Error("The favicon path is empty.");
    }
    else if (faviconPath.indexOf(".ico") === -1) {
        throw new Error("The favicon path does not contain a .ico file.");
    }
    else {
        let favicon = document.createElement("link");

        favicon.href = faviconPath;
        favicon.rel = "icon";
        favicon.type = "image/x-icon";

        document.head.appendChild(favicon);
    }
}

function createContainerDiv() {
    if (document.getElementById("container_div") === null) {
        let containerDiv = document.createElement("div");

        containerDiv.id = "container_div";
    
        document.body.appendChild(containerDiv);
    }
    else {
        throw new Error("The container div already exists.");
    }
}

function loadStyle(stylePath) {
    if (stylePath === null || stylePath === undefined) {
        throw new Error("The style path is null or undefined.");
    }
    else if (typeof stylePath !== "string") {
        throw new Error("The style path is not a string.");
    }
    else if (stylePath.length === 0) {
        throw new Error("The style path is empty.");
    }
    else if (stylePath.indexOf(".css") === -1) {
        throw new Error("The style path does not contain a .css file.");
    }
    else {
        let mainStyle = document.createElement("link");

        mainStyle.href = stylePath;
        mainStyle.rel = "stylesheet";
        mainStyle.type = "text/css";
    
        document.head.appendChild(mainStyle);
    }
}

function loadScript(scriptPath) {
    if (scriptPath === null || scriptPath === undefined) {
        throw new Error("The script path is null or undefined.");
    }
    else if (typeof scriptPath !== "string") {
        throw new Error("The script path is not a string.");
    }
    else if (scriptPath.length === 0) {
        throw new Error("The script path is empty.");
    }
    else if (scriptPath.indexOf(".js") === -1) {
        throw new Error("The script path does not contain a .js file.");
    }
    else {
        let script = document.createElement("script");

        script.src = scriptPath;
        script.type = "text/javascript";
        script.async = false;
    
        document.body.appendChild(script);
    }
}
