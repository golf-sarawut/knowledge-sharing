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
  