declare function MathFn(a: number, b: number): number;
declare namespace MathFn {
  let operator: "+";
}
const sum: typeof MathFn = (a, b) => a + b;
sum.operator = "+";

type MathFn1 = (a?: number, ...rest: Array<number>) => number;
const sum: MathFn1 = (a = 0, ...rest) => rest.reduce((acc, n) => acc + n, a);

interface MathUtilsInterface {
  sum(a: number, b: number): number;
}

class MathUtils implements MathUtilsInterface {
  sum(a: number, b: number): number {
    return a + b;
  }
}
