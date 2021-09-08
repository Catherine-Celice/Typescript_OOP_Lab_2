
import { Greeter } from "./greeter";

export class LoudGreeter extends Greeter {

    private extra: string = '!!';

    constructor(chooseGreeting: string) {

        super(chooseGreeting);
    };


    addVolume() {
        this.extra = this.extra + "!";
    };


    greet(name: string) {
        
        return super.greet(name) + this.extra;
    };
}