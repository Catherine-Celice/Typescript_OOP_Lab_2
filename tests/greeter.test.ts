import { Greeter } from "../src/greeter";



describe("Testing Greeter", () => {
    test("Hello, Fred", () => {
      const obj = new Greeter("Hello");
      expect(obj.greet("Fred")).toBe("Hello, Fred!");
    });
    test("Hello, Jane", () => {
      const obj = new Greeter("Hello");
      expect(obj.greet("Jane")).toBe("Hello, Jane!");
    });
    test("Howdy, Marvin", () => {
      const obj = new Greeter("Howdy");
      expect(obj.greet("Marvin")).toBe("Howdy, Marvin!");
    });
    test("Yo, Betty", () => {
      const obj = new Greeter("Yo");
      expect(obj.greet("Betty")).toBe("Yo, Betty!");
    });
  }); // end of Greeter tests


