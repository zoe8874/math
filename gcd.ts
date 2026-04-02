export class GCD {

    constructor(
        private readonly a: number,
        private readonly b: number
    ) {}

    public gcdBruteForce(a: number, b: number): number {
        let i: number;

        if (a < b) {
            i = a;
        } else {
            i = b;
        }

        while (i > 0) {
            if (a % i === 0 && b % i === 0) {
                return i;
            }
            i--;
        }

        return 1; 
    }

   public gcdEuclid(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);

    if (a === 0) return b;
    if (b === 0) return a;

    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }

    return a;
  }
}
