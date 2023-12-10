### CSR
> basically website are loaded using the HTML CSS JS. whose data fetched from the server.  browser render all data render in the HTML file in client side. the server send a basics skeleton of HTML file along with the CSS property as well as as function. In client side rendering the browser received the HTML file and load it up to the CSS file but JS function it take too much time to render.  depends on the size of the JS function loading time increase accordingly.
> web app with more users
> 

### SSR
> In server side rendering before sending the HTML document to the client. the server pre-render the all the CSS properties and JS functions inside the full file HTML  document to display the website
> web app with less users
> Full Document reload

### Server-Side Routing:

> Definition: In server-side routing, when a user navigates to a different URL, a request is sent to the server, and the server responds by sending the appropriate HTML for the requested page.
> How it works: The entire page is reloaded, and the server generates and sends a new HTML page. The server is responsible for rendering the content based on the URL and sending the complete page to the client.
> Pros: Search engine optimization (SEO) is generally better because search engines can index the complete HTML page.
> Cons: Slower initial page loads as the server has to process each request.

### Client-Side Routing:
> Definition: In client-side routing, the initial HTML is loaded from the server, and subsequent navigation is handled on the client side using JavaScript. Only the content that needs to change is fetched and rendered dynamically without a full page reload.
> How it works: React Router, for example, manages the application's UI state locally on the client. When a user clicks on a link, React Router updates the URL, and the associated React components are dynamically rendered without contacting the server.
> Pros: Faster subsequent page loads after the initial load, providing a smoother user experience.
> Cons: Initial page load may be slower as the client needs to download the JavaScript bundle and fetch additional resources.
In summary, the main difference lies in where the rendering occurs:

> Server-Side Routing: Rendering happens on the server, and the server sends fully-rendered HTML pages in response to each request.

> Client-Side Routing: Rendering happens on the client, and the client dynamically updates the UI based on URL changes using JavaScript.

<img width="664" alt="image" src="https://github.com/Dhanarajb/Front-end-topics/assets/88299676/175b2c0b-439c-4d86-9172-6b79f3c9e982">

