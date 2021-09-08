import { Greeter } from "../src/greeter";
import { JavaScriptGreeter } from "../src/javaScriptGreeter";


describe("Testing JavaScriptGreeter", () => {
    test("Hello, Fred", () => {
      const obj = new JavaScriptGreeter("Hello");
      expect(obj.greet("Fred")).toBe("console.log('Hello, Fred!')");
    });
    test("Hello, Jane", () => {
      const obj = new JavaScriptGreeter("Hello");
      expect(obj.greet("Jane")).toBe("console.log('Hello, Jane!')");
    });
    test("Howdy, Marvin", () => {
      const obj = new JavaScriptGreeter("Howdy");
      expect(obj.greet("Marvin")).toBe("console.log('Howdy, Marvin!')");
    });
    test("Yo, Betty", () => {
      const obj = new JavaScriptGreeter("Yo");
      expect(obj.greet("Betty")).toBe("console.log('Yo, Betty!')");
    });
  }); // end of JavaScriptGreeter tests