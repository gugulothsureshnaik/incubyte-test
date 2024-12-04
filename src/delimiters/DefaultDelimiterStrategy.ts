import { DelimiterStrategy } from "./DelimiterStrategy";

export class DefaultDelimiterStrategy implements DelimiterStrategy {
  parse(input: string): number[] {
    const numbers = input.split(/,|\n/);
    return numbers.map(Number);
  }
}
