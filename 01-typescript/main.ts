// needed to define local scope
export { }

let greeting: string = "Hello world";
console.log(greeting);

// interfaces
interface toy {
    name: string
    minAge: number
    play(): void
}

let marbles: toy = {
    name: "marbles",
    minAge: 3,
    play: () => console.log("Playing marbles")
};
marbles.play();

// classes
class toyshop {
    address: string;

    constructor(address: string) {
        this.address = address
    }

    sell(item: toy) {
        let message = `selling ${item.name} (minimum age ${item.minAge})`;
        console.log("Message=" + message)
    }
}

let toysAreMe = new toyshop("33 Main Street");
toysAreMe.sell(marbles);


// generics
function jsonCleaner<T>(input: T): T {
    const serialised = JSON.stringify(input);
    return JSON.parse(serialised)
}

console.log("Cleaned: " + jsonCleaner<string>("Hi"));
console.log("Cleaned: " + jsonCleaner<number>(33));
