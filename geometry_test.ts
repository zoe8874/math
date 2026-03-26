import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Rectangle, Point2D } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});



Deno.test("circle area with radius 5 is roughly 78.54", () => {
  const circle = new Circle(new Point2D(0, 0), 5);

  const actual = circle.area();

  assertAlmostEquals(actual, 78.54, 0.01);
});

Deno.test("circle circumference with radius 5 is roughly 31.416", () => {
  const circle = new Circle(new Point2D(0, 0), 5);

  const actual = circle.circumference();

  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("circle diameter with radius 5 is 10", () => {
  const circle = new Circle(new Point2D(0, 0), 5);

  const actual = circle.diameter();

  assertEquals(actual, 10);
});



Deno.test("rectangle area is calculated correctly", () => {
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(5, 10));

  const actual = rect.area();

  assertEquals(actual, 50);
});

Deno.test("rectangle diagonal is correct", () => {
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(3, 4));

  const actual = rect.diagonal();

  assertAlmostEquals(actual, 5, 0.01);
});


Deno.test("rectangle circumference should be 30 ", () => {
 const rect = new Rectangle(new Point2D(0, 0), new Point2D(5, 10));

const actual = rect.circumference();

 
  assertEquals(actual, 30);
});



Deno.test("distance betwen 0 and 3,4 is 5", () => {
  const p1 = new Point2D(0, 0);
  const p2 = new Point2D(3, 4);

  const actual = p1.distanceTo(p2);

  assertAlmostEquals(actual, 5, 0.01);
});

