// TODO: This file should check which Environment has been selected and load the appropriate script.
// At the moment, it just loads the main script from vacuumworld-ts.
document.addEventListener("DOMContentLoaded", function() {
    createContainerDiv();
    loadMainStyle();
    loadMainScript();
});

function createContainerDiv() {
    let containerDiv = document.createElement("div");

    containerDiv.id = "container_div";

    document.body.appendChild(containerDiv);
}

function loadMainStyle() {
    let mainStyle = document.createElement("link");

    mainStyle.href = "/static/css/index.css";
    mainStyle.rel = "stylesheet";
    mainStyle.type = "text/css";

    document.head.appendChild(mainStyle);
}

function loadMainScript() {
    let mainScript = document.createElement("script");

    mainScript.src = "/envs/vacuumworld-ts/dist/main.js";
    mainScript.type = "text/javascript";
    mainScript.async = false;

    document.body.appendChild(mainScript);
}
