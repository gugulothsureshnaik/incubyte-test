import { DelimiterStrategy } from "./DelimiterStrategy";

export class CustomDelimiterStrategy implements DelimiterStrategy {
  parse(input: string): number[] {
    const delimiter = input[2];
    const numbers = input.split("\n")[1].split(delimiter);
    return numbers.map(Number);
  }
}
