import { roundTo } from "./utils.ts";
import { GCD } from "./gcd.ts";


export class Fraction {
  
  constructor(
  private numerator: number,
  private denominator: number,
) {
  if (denominator === 0) {
    throw new Error("Denominator cannot be 0");
  }

  this.parse();
}

  private parse(): void {
    if (this.denominator < 0) {
      this.numerator = -this.numerator;
      this.denominator = -this.denominator;
    }

    if (this.numerator === 0) {
      this.denominator = 1;
      return;
    }

    const gcdValue = new GCD(this.numerator, this.denominator).gcdEuclid(
      this.numerator,
      this.denominator
    );

    this.numerator = this.numerator / gcdValue;
    this.denominator = this.denominator / gcdValue;
  }

  public add(other: Fraction) {
    
    const newNumerator =
      this.numerator * other.denominator + other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    this.numerator = newNumerator;
    this.denominator = newDenominator;
    this.parse();
  }

  public subtract(other: Fraction) {
    const newNumerator =
      this.numerator * other.denominator - other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    this.numerator = newNumerator;
    this.denominator = newDenominator;
    this.parse();
  }

  public multiply(other: Fraction) {
    const newNumerator = this.numerator * other.numerator;
    const newDenominator = this.denominator * other.denominator;
    this.numerator = newNumerator;
    this.denominator = newDenominator;
    this.parse();
  }

  public divide(other: Fraction) {
    const newNumerator = this.numerator * other.denominator;
    const newDenominator = this.denominator * other.numerator;
    this.numerator = newNumerator;
    this.denominator = newDenominator;
    this.parse();
  }

  public toFloat(precision: number): number {
    return roundTo(this.numerator / this.denominator, precision);
  }

  public toString(): string {
    return `${this.numerator}/${this.denominator}`;
  }

  public static parse(expression: string): Fraction {
    const parts = expression.split("/");
    if (parts.length != 2) {
      throw new Error(`illegal syntax: "[numerator]/[denominator]" required`);
    }
    const numerator = Number.parseInt(parts[0].trim());
    const denominator = Number.parseFloat(parts[1].trim());
    if (Number.isNaN(numerator) || Number.isNaN(denominator)) {
      throw new Error(`non-numeric numerator/denominator`);
    }
    return new Fraction(numerator, denominator);
  }

  public cancel(other: Fraction): Fraction {
    const gcd = new GCD(this.numerator, this.denominator).gcdEuclid(this.numerator, this.denominator);
    const newNumerator = this.numerator / gcd;
    const newDenominator = this.denominator / gcd;
    return new Fraction(newNumerator, newDenominator);
  }

  
}
