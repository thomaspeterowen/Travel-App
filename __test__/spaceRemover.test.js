// Import the js file to test
import { spaceRemover } from "../src/client/js/spaceRemover"

describe("Testing the spaceRemover functionality", () => {
    test("Testing the spaceRemover() function 1", () => {
        expect(spaceRemover("test with spaces")).toBe("test+with+spaces");
    })
    test("Testing the spaceRemover() function 2", () => {
        expect(spaceRemover("testnospaces")).toBe("testnospaces");
    })
});