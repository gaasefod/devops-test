import * as Math from "@/utils/math";

describe("Math", () => {
  test("2 + 3 equals 4", () => {
    expect(Math.sum(2, 3)).toBe(4);
  });

  test("2 - 2 equals 0", () => {
    expect(Math.subtract(2, 2)).toBe(0);
  });

  test("2 / 2 equals 1", () => {
    expect(Math.divide(2, 2)).toBe(1);
  });

  test("2 * 2 equals 4", () => {
    expect(Math.multiply(2, 2)).toBe(4);
  });

  test("2 % 2 equals 0", () => {
    expect(Math.modulo(2, 2)).toBe(0);
  });

  test("3 + -1 equals 2", () => {
    expect(Math.sum(3, -1)).toBe(2);
  });

  test("3 - -1 equals 4", () => {
    expect(Math.subtract(3, -1)).toBe(4);
  });

  test("3 / -1 equals -3", () => {
    expect(Math.divide(3, -1)).toBe(-3);
  });

  test("3 * -1 equals -3", () => {
    expect(Math.multiply(3, -1)).toBe(-3);
  });

  test("3 % -1 equals 0", () => {
    expect(Math.modulo(3, -1)).toBe(0);
  });
});
