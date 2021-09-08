
import { Greeter } from "./greeter";

export class JavaScriptGreeter extends Greeter {


    constructor(chooseGreeting: string) {

        super(chooseGreeting);
    };

    greet(name: string) {

        return "console.log('" +  this.greeting + ", " + name + "!')";
    }
    
}