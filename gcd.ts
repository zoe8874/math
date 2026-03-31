export class GCD {

    constructor(
        private readonly a: number,
        private readonly b: number
    ) {}

    public gcdBruteForce(): number {
        let i: number;

        if (this.a < this.b) {
            i = this.a;
        } else {
            i = this.b;
        }

        while (i > 0) {
            if (this.a % i === 0 && this.b % i === 0) {
                return i;
            }
            i--;
        }

        return 1; 
    }
}