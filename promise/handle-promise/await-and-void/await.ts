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
  