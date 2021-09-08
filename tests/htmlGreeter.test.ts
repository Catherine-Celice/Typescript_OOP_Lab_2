import { Greeter } from "../src/greeter";
import { HtmlGreeter } from "../src/htmlGreeter";


describe("Testing HtmlGreeter", () => {

    // Without addVolume()
    test("Hello, Fred p", () => {
      const obj = new HtmlGreeter("Hello", "p");
      expect(obj.greet("Fred")).toBe("<p>Hello, Fred!</p>");
    });
    test("Hello, Jane div", () => {
      const obj = new HtmlGreeter("Hello", "div");
      expect(obj.greet("Jane")).toBe("<div>Hello, Jane!</div>");
    });
    test("Howdy, Marvin default", () => {
      const obj = new HtmlGreeter("Howdy");
      expect(obj.greet("Marvin")).toBe("<h1>Howdy, Marvin!</h1>");
    });
    test("Yo, Betty footer", () => {
      const obj = new HtmlGreeter("Yo", "footer");
      expect(obj.greet("Betty")).toBe("<footer>Yo, Betty!</footer>");
    });


  }); // end of HtmlGreeter tests