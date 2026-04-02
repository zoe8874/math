import { assertAlmostEquals, assertEquals } from "@std/assert";
import { GCD } from "./gcd.ts";


Deno.test("Teiler test",()=>{
const a =2;
const b = 10;
const gcd = new GCD(a,b);
const actual = gcd.gcdBruteForce();
assertEquals(actual, 2);


});


Deno.test("Teiler test mit Euclid",()=>{
const a =2;
const b = 10;
const gcd = new GCD(a,b);
const actual = gcd.gcdEuclid();
assertEquals(actual, 2);


});