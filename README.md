# JavaScript loose comparison unexpected behavior with NaN and -0
This repository demonstrates an uncommon error in JavaScript's loose comparison (==) operator when dealing with NaN (Not a Number) and -0 (negative zero).

## The Problem
NaN is not equal to itself according to the loose comparison operator, and -0 is considered equal to +0. This can lead to unexpected results if not carefully handled.

## How to Reproduce
1. Clone this repository.
2. Run `bug.js` using a JavaScript runtime.
3. Observe that `NaN == NaN` evaluates to `false`, and `0 == -0` evaluates to `true`, which is not intuitive.

## Solution
The solution involves using strict comparison (===) whenever possible to avoid unexpected behavior.

## Note
Strict equality (===) checks for both value and type, while loose equality (==) performs type coercion before comparison.
Always prefer strict equality unless type coercion is explicitly needed and understood.