import { DelimiterStrategy } from "./delimiters/DelimiterStrategy";
import { DefaultDelimiterStrategy } from "./delimiters/DefaultDelimiterStrategy";
import { CustomDelimiterStrategy } from "./delimiters/CustomDelimiterStrategy";

export class StringCalculator {
  private delimiterStrategy: DelimiterStrategy;

  constructor() {
    this.delimiterStrategy = new DefaultDelimiterStrategy();
  }

  add(input: string): number {
    if (!input) return 0;

    // Determine strategy
    if (input.startsWith("//")) {
      this.delimiterStrategy = new CustomDelimiterStrategy();
    }

    // Parse numbers
    const numbers = this.delimiterStrategy.parse(input);

    // Check for negatives
    const negatives = numbers.filter((n) => n < 0);
    if (negatives.length) {
      throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    // Sum valid numbers
    return numbers.filter((n) => n <= 1000).reduce((a, b) => a + b, 0);
  }
}
