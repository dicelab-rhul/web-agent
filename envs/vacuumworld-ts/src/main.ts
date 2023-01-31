import { VacuumWorld } from "./model/VacuumWorld"

/*
 *
 * This script is the enry point of the simulation.
 * It is responsible for displaying the initial view and calling the `Vacuumworld` script.
 * 
 */
const vacuumworld: VacuumWorld = new VacuumWorld();

vacuumworld.run();
