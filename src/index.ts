import { Main } from "./Main";

const serverless: boolean = document.getElementById("serverless_flag") !== null && document.getElementById("serverless_flag").getAttribute("serverless") === "true";

window.addEventListener("DOMContentLoaded", () => Main.main(serverless));
