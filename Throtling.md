#### Throtling
> Throttling in JavaScript is a technique that limits the number of times a function can be called within a given time interval, to improve performance and user experience.
>
> HTML
> ```
>  <input type="text" id="searchInput" placeholder="Type to search">
> ```
> Javascript
> ```
> const throttleSearch = (searchFunction, delay) => {
      let timeoutId;

      return (...args) => {
        const context = this;

        if (!timeoutId) {
          timeoutId = setTimeout(() => {
            searchFunction.apply(context, args);
            timeoutId = null;
          }, delay);
        }
      };
    };

    // Real-case scenario: Throttle the function handling search
    const performSearch = query => {
      // Simulate searching logic (replace this with your actual search functionality)
      console.log("Searching for:", query);
    };

    const throttledSearch = throttleSearch(performSearch, 500);

    // Attach the throttled function to the search input field
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", event => {
      const searchTerm = event.target.value;
      throttledSearch(searchTerm);
    });
```
