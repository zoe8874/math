import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Fraction } from "./fraction.ts";
//import { assertThrows } from "https://deno.land/std/assert/mod.ts";



Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.add(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});


Deno.test("1/2 - 1/4 = 1/4 is roughly 0.25", () => {
  //Arrange 
  const left = new Fraction(1, 2);
  const right = new  Fraction(1 , 4 );
   // Acht 
   left.subtract(right);

   //Assert
   assertAlmostEquals(left.toFloat(0.001), 0.25);
});

Deno.test("1/2 * 1/2 = 1/4 or 0.25", () => {
// Arrange
const left = new Fraction(1, 2);
const right = new  Fraction(1 , 2 );
//Acht
left.multiply(right);
//Assert
assertAlmostEquals(left.toFloat(0.001),0.25);
});


Deno.test("1/2 : 1/2 = 1/4 or 0.25", () => {
// Arrange
const left = new Fraction(1, 2);
const right = new  Fraction(1 , 2 );
//Acht
left.divide(right);
//Assert
assertAlmostEquals(left.toFloat(0.001),1.0);
});

Deno.test("ToString  metoden",() => {

//Arrange
const f = new Fraction(3, 4);
//Acht
const actual = f.toString();
// Assert
 assertEquals(actual, "3/4"); });

 Deno.test("parse valid fraction string", () => {
  const f = Fraction.parse("3/4");

  assertEquals(f.toString(), "3/4");
});

Deno.test("constructor auto-simplifies 2/4 to 1/2", () => {
  const f = new Fraction(2, 4);
  assertEquals(f.toString(), "1/2");
});

Deno.test("parse auto-simplifies 2/4 to 1/2", () => {
  const f = Fraction.parse("2/4");
  assertEquals(f.toString(), "1/2");
});

Deno.test("add auto-simplifies result", () => {
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 6);
  left.add(right);
  assertEquals(left.toString(), "2/3");
});

Deno.test("subtract auto-simplifies result", () => {
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 3);
  left.subtract(right);
  assertEquals(left.toString(), "1/6");
});

Deno.test("multiply auto-simplifies result", () => {
  const left = new Fraction(2, 3);
  const right = new Fraction(3, 4);
  left.multiply(right);
  assertEquals(left.toString(), "1/2");
});

Deno.test("divide auto-simplifies result", () => {
  const left = new Fraction(1, 2);
  const right = new Fraction(1, 4);
  left.divide(right);
  assertEquals(left.toString(), "2/1");
});

//Deno.test("constructor should fail with 0 denominator", () => {
 // assertThrows(
  //  () => new Fraction(3, 0),
   // Error,
   // "Denominator cannot be 0"
  //);
//});

Deno.test("cancel Test expechtet 1/2 ",()=>{
const f = new Fraction (2,4);
const result = f.cancel(f);

assertEquals(result.toString(),"1/2")

})