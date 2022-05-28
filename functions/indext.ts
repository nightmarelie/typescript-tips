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

type asyncSumCb = (result: number) => void;

function asyncSum(a: number, b: number): Promise<number>;
function asyncSum(a: number, b: number, cb: asyncSumCb): void;

function asyncSum(a: number, b: number, cb?: asyncSumCb) {
  const result = a + b;
  if (cb) return cb(result);
  else return Promise.resolve(result);
}

type IteratorNextType = {
  value: number | void;
  done: boolean;
};

function* generator(start: number) {
  yield start + 1;
  yield start + 2;
}

var iterator = generator(0);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
