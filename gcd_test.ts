import { assertAlmostEquals, assertEquals } from "@std/assert";
import { GCD } from "./gcd.ts";


Deno.Test("Teiler test",()=>{
const a =2;
const b = 10;
const gcd = new GCD(a,b);
const actual = gcd.gcdBruteForce();
assertEquals(actual, 2);


});