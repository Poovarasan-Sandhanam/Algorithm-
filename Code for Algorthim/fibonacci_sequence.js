// Simple Recursive Solution (inefficient for large numbers)
function fibonacciRecursive(n) {
    if (n <= 2) return 1;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}           

console.log(fibonacciRecursive(6)); // Output: 8 (6th Fibonacci number)

// Dynamic Programming Solution (more efficient)
function fibonacciDP(n) {
    let fib = [0, 1, 1]; // Initialize the first two Fibonacci numbers
    for (let i = 3; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

console.log(fibonacciDP(6)); // Output: 8 (6th Fibonacci number)
