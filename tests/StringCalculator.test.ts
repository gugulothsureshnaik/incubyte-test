import { StringCalculator } from "../src/StringCalculator";

describe("StringCalculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    expect(calculator.add("5")).toBe(5);
  });

  test("should sum two numbers separated by a comma", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test("should handle newlines as delimiters", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
  });

  test("should handle custom delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
  });

  test("should throw an error for negative numbers", () => {
    expect(() => calculator.add("1,-2")).toThrow("Negatives not allowed: -2");
  });

  test("should ignore numbers greater than 1000", () => {
    expect(calculator.add("2,1001")).toBe(2);
  });
  test("should return the number itself for a single number", () => {
    expect(calculator.add("1")).toBe(1);
    expect(calculator.add("5")).toBe(5);
  });

  test("should return the sum of two numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
    expect(calculator.add("10,20")).toBe(30);
  });

  test("should handle newlines as delimiters", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
    expect(calculator.add("1\n2\n3")).toBe(6);
  });

  test("should handle custom delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
    expect(calculator.add("//|\n1|2|3")).toBe(6);
  });

  test("should throw an error for negative numbers", () => {
    expect(() => calculator.add("1,-2,3")).toThrowError(
      "Negative numbers are not allowed: -2"
    );
  });
});
