# Just React

### basic static HTML server + ES5 React

***File Structure***

```
|- browser
  |- app.js (client-side root)
  |- etc. (more client side files would go here)
|
|- public    (serves CSS and index.html)
|- server.js (server-side root)
```
### Server serves up single `index.html` for all routes

***index.html***

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>ES5 React Demo</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/stylesheets/style.css">
  </head>
  <body>
    <!-- this is the 'hook' where ReactDOM will render our root element -->
    <div id="app">
      <h1>ES5 React Demo</h1>
    </div>
    <!-- third party dependencies run first, add React & ReactDOM to global scope -->
    <script src="/react/dist/react.min.js"></script>
    <script src="/react-dom/dist/react-dom.min.js"></script>
    <!-- then we run our app, assuming React & ReactDOM-->
    <script src="/app.js"></script>
    <!-- additional scripts would go here -->
  </body>
</html>
```

### `app.js` runs our ES5 React (assumes React & ReactDOM globals)

***app.js***

```js
const App = React.createElement('h1', null, 'Hello World');
// translates to <h1>Hello World</h1>

// render our root element to the DOM element with id 'app'
ReactDOM.render(App, document.getElementById('app'));
```

This example is a bit trivial, but as you can see, it isn't terrible nice to write HTML as JS.
Imagine if we had to represent some deeply nested html instead of a simple h1!
