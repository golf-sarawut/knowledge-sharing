# Snippet 1: Using void to handle a Promise in TypeScript

```js
function logMessageAfterDelay(message: string, delay: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

// Using void to ignore the promise result and not wait for its resolution
void logMessageAfterDelay('This message will be logged after 2 seconds', 2000);

console.log('This message logs immediately.');
```

# Snippet 2: Using await to handle a Promise in TypeScript

```js
async function logMessageAfterDelay(message: string, delay: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

// Using await to wait for the promise to resolve before moving to the next line
async function runAsyncTasks(): Promise<void> {
  await logMessageAfterDelay('This message will be logged after 2 seconds', 2000);
  console.log('This message logs after the delay.');
}

runAsyncTasks();
```

# Question

1. What is the difference in the order of the console logs between the two snippets?
2. How does the void keyword affect the execution of the logMessageAfterDelay function in Snippet 1?
3. What is the effect of using await in Snippet 2, and how does it change the flow of the program compared to Snippet 1?
4. In what scenarios might you prefer to use void over await, and vice versa?