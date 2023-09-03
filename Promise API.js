Built-in Promise methods such as Promise.all, Promise.race, and Promise.allSettled are powerful tools for managing and working with multiple Promises. 
  Each of these methods serves a specific purpose and can be handy in different scenarios:

Promise.all:

Promise.all takes an iterable (e.g., an array) of Promises and returns a new Promise that resolves when all the input Promises have resolved, or rejects if any of them rejects.
Use Promise.all when you have multiple asynchronous tasks that need to be completed before proceeding with further processing.

const promises = [promise1, promise2, promise3];

Promise.all(promises)
  .then((results) => {
    // All Promises resolved successfully, and 'results' contains an array of resolved values
  })
  .catch((error) => {
    // At least one Promise rejected, and 'error' contains the reason of the first rejection
  });
Promise.race:

Promise.race takes an iterable of Promises and returns a new Promise that resolves or rejects as soon as the first Promise in the iterable resolves or rejects.
Use Promise.race when you want to take action based on the first resolved or rejected Promise, regardless of the others.

const promises = [promise1, promise2, promise3];

Promise.race(promises)
  .then((firstResult) => {
    // The first Promise resolved, and 'firstResult' contains its resolved value
  })
  .catch((firstError) => {
    // The first Promise rejected, and 'firstError' contains its rejection reason
  });
Promise.allSettled:

Promise.allSettled takes an iterable of Promises and returns a new Promise that always resolves with an array of objects representing the outcomes of all the Promises, 
  whether they resolved or rejected.
Use Promise.allSettled when you want to wait for all Promises to settle (either resolve or reject) and want to collect information about each Promise's result.

const promises = [promise1, promise2, promise3];

Promise.allSettled(promises)
  .then((results) => {
    // 'results' contains an array of objects, each with a 'status' ('fulfilled' or 'rejected') and a 'value' or 'reason'
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        console.log('Resolved:', result.value);
      } else if (result.status === 'rejected') {
        console.error('Rejected:', result.reason);
      }
    });
  });
When to use each method:

Use Promise.all when you need to ensure that all Promises complete successfully before proceeding. For example, when fetching data from multiple APIs and 
  you need all the data to render a complete page.

Use Promise.race when you want to respond as soon as any of the Promises completes. For example, when dealing with multiple data sources, and you want the fastest response.

Use Promise.allSettled when you want to handle all Promises' outcomes (whether resolved or rejected) and don't want any Promise to interrupt the process. 
    This is useful when you need to collect information about all Promises before making decisions based on their outcomes.

These Promise methods offer versatility in handling asynchronous operations, allowing you to choose the most appropriate one based on your specific use case and requirements.




