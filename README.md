# academy-1
Task 1
 Write a function that takes an integer as input, and
 returns the number of bits that are equal to one in the
 binary representation of that number. You can’t guarantee
 that input is non-negative.
 Example: The binary representation of 1234 is
 10011010010, so the function should return 5 in this case.

Task 2
Return an array containing the numbers from 1 to N,
where N is the parametered value.
Replace certain values however if any of the following
conditions are met:
-If the value is a multiple of 3: use the value "Fizz"
instead
-If the value is a multiple of 5: use the value "Buzz"
instead
-If the value is a multiple of 3 & 5: use the value
"FizzBuzz" instead
N will never be less than 1.
Method calling example:
fizzbuzz(3) -->  [1, 2, "Fizz”]

Task 3
Multiply all the digits of a nonnegative integer n by each
other, repeating with the product until a single digit is
obtained. The number of steps required is known as
the multiplicative persistence.
Create a function that calculates the individual results of
each step, not including the original number, but including
the single digit, and outputs the result as a list/array. If
the input is a single digit, return an empty list/array.
Examples
per(1)  = []
per(10) = [0]
// 1*0 = 0
per(69) = [54, 20, 0]
// 6*9 = 54 --> 5*4 = 20 --> 2*0 = 0
per(277777788888899) = [4996238671872, 438939648,
4478976, 338688, 27648, 2688, 768, 336, 54, 20, 0]
// 2*7*7*7*7*7*7*8*8*8*8*8*8*9*9 = 4996238671872 -->
4*9*9*6*2*3*8*6*7*1*8*7*2 = 4478976 -->

Create polifills for:
-concat()
-lastIndexOf()
-includes()
-repeat()
-substring()
-substr()