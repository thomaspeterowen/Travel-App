// Import the js file to test
import { inputEmpty } from "../src/client/js/inputEmpty"

describe("Testing the inputEmpty functionality", () => {
    test("Testing the inputEmpty() function positive", () => {
        expect(inputEmpty("value")).toBe(false);
    })
    test("Testing the inputEmpty() function negative", () => {
        expect(inputEmpty("")).toBe(true);
    })
});