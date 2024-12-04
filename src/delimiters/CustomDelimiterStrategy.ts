import { DelimiterStrategy } from "./DelimiterStrategy";

export class CustomDelimiterStrategy implements DelimiterStrategy {
  parse(input: string): number[] {
    // Extract delimiters
    const delimiterSection = input.match(/\/\/(.*?)\n/);
    if (!delimiterSection) {
      throw new Error("Invalid custom delimiter format.");
    }

    const delimiters =
      delimiterSection[1]
        .match(/\[(.*?)\]/g) // Find all [delimiter] patterns
        ?.map((d) => d.slice(1, -1)) || []; // Remove square brackets

    const delimiterRegex = new RegExp(
      delimiters.map((d) => this.escapeRegex(d)).join("|"), // Combine delimiters with OR
      "g"
    );

    // Extract numbers
    const numbersSection = input.split("\n")[1];
    const numbers = numbersSection.split(delimiterRegex);

    return numbers.map(Number);
  }

  private escapeRegex(delimiter: string): string {
    return delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"); // Escape special regex characters
  }
}
