export interface DelimiterStrategy {
  parse(input: string): number[];
}
