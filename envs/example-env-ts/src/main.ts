let example_div: HTMLDivElement = document.createElement("div");

example_div.id = "example_div";
example_div.textContent = "Hello World!";

document.getElementById("container_div").appendChild(example_div);
