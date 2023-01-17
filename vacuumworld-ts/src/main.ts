import { VacuumWorld } from "./model/VacuumWorld"
/*
 *
 * This script is the enry point of the simulation.
 * It is responsible for displaying the initial view and calling the `Vacuumworld` script.
 * 
 */
document.addEventListener("DOMContentLoaded", function() {
    const vacuumworld: VacuumWorld = new VacuumWorld(); // TODO: Add parameters (speed, etc.).

    vacuumworld.run();
});
