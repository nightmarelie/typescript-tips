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

const arrayify = <Type extends unknown>(a: Type): Array<Type> => [a];

type FalsyType = false | null | undefined | "" | 0;

function typedBoolean<ValueType>(
  value: ValueType
): value is Exclude<ValueType, FalsyType> {
  return Boolean(value);
}

const arrayWithFalsyValues = [1, undefined, 0, 2];

const arrayWithoutFalsyValues = arrayWithFalsyValues.filter(typedBoolean);

type User = {
  name: string;
  displayName: string | null;
};

function assertDisplayName(
  user: User
): asserts user is User & { displayName: string } {
  if (!user.displayName) throw new Error("Oh no, user has no displayName");
}

function logUserDisplayName(user: User) {
  assertDisplayName(user);
  console.log(user.displayName.toUpperCase());
}

type OperationFn = (left: number, right: number) => number;
const createOperations = <OperationsType extends Record<string, OperationFn>>(
  opts: OperationsType
) => opts;

const operations = createOperations({
  "+": (left, right) => left + right,
  "-": (left, right) => left - right,
  "*": (left, right) => left * right,
  "/": (left, right) => left / right,
});

type CalculatorProps = {
  left: number;
  operator: keyof typeof operations;
  right: number;
};
function Calculator({ left, operator, right }: CalculatorProps) {
  const result = operations[operator](left, right);
  return null;
}

const examples = null;
