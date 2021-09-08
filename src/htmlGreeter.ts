
import { Greeter } from "./greeter";


export class HtmlGreeter extends Greeter {

    tagName: string;

    constructor(chooseGreeting: string, chooseTag: string = "h1") {

        super(chooseGreeting);
        this.tagName = chooseTag;
    };

    greet(name: string) {
        
        return "<" + this.tagName + ">" + super.greet(name) + "</" + this.tagName + ">";
    };
}