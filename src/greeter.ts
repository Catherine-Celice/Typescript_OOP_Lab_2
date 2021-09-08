

export class Greeter {
    greeting: string;

    constructor(chooseGreeting: string){
        this.greeting = chooseGreeting;
    };

    greet(name: string){
        
        return this.greeting + ", " + name + "!";
    };
}



