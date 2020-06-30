import "introcs";

import {
    Game,
    mapPoints,
    reduceSum,
    // reduceAvg,
    filterByOutcome
} from "./library";

function main(): void {
    promptCSV("Select a CSV", Game, process);
}

function process(games: Game[]): void {

    print("Games: " + games.length);

    let filtered: Game[] = filterByOutcome(games, "W");
    print("Filted: " + filtered.length);

    let mapped: number[] = mapPoints(filtered);
    print(mapped);

    let reduced: number = reduceSum(mapped);
    print(reduced);

    // let mapped2: number[] = mapAssists(filtered);
    // print(mapped2);
}

main();