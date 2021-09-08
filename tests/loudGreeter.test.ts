import { Greeter } from "../src/greeter";
import { LoudGreeter } from "../src/loudGreeter";


describe("Testing LoudGreeter", () => {

    // Without addVolume()
    test("Hello, Fred", () => {
      const obj = new LoudGreeter("Hello");
      expect(obj.greet("Fred")).toBe("Hello, Fred!!!");
    });
    test("Hello, Jane", () => {
      const obj = new LoudGreeter("Hello");
      expect(obj.greet("Jane")).toBe("Hello, Jane!!!");
    });
    test("Howdy, Marvin", () => {
      const obj = new LoudGreeter("Howdy");
      expect(obj.greet("Marvin")).toBe("Howdy, Marvin!!!");
    });
    test("Yo, Betty", () => {
      const obj = new LoudGreeter("Yo");
      expect(obj.greet("Betty")).toBe("Yo, Betty!!!");
    });

    // With addVolume()
    test("Hello, Fred volume 2", () => {
        const obj = new LoudGreeter("Hello");
        obj.addVolume();
        obj.addVolume();
        expect(obj.greet("Fred")).toBe("Hello, Fred!!!!!");
      });
      test("Hello, Jane volume 1", () => {
        const obj = new LoudGreeter("Hello");
        obj.addVolume();
        expect(obj.greet("Jane")).toBe("Hello, Jane!!!!");
      });
      test("Howdy, Marvin add volume 5", () => {
        const obj = new LoudGreeter("Howdy");
        obj.addVolume();
        obj.addVolume();
        obj.addVolume();
        obj.addVolume();
        obj.addVolume();
        expect(obj.greet("Marvin")).toBe("Howdy, Marvin!!!!!!!!");
      });
      test("Yo, Betty add volume 3", () => {
        const obj = new LoudGreeter("Yo");
        obj.addVolume();
        obj.addVolume();
        obj.addVolume();
        expect(obj.greet("Betty")).toBe("Yo, Betty!!!!!!");
      });
      test("Hi, Cutie - multiple ad volume settings", () => {
        const obj = new LoudGreeter("Hi");
        obj.addVolume();
        expect(obj.greet("Cutie")).toBe("Hi, Cutie!!!!");

        obj.addVolume();
        obj.addVolume();
        expect(obj.greet("Cutie")).toBe("Hi, Cutie!!!!!!");

      });
  }); // end of LoudGreeter tests