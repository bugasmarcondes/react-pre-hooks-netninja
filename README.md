# React

## 1

- React, js library created by Facebook used to create dynamic web apps.
- Redux, state management of our app.
- React basics, components, events, props, forms.
- Router, routes, route parameters, redirects.
- Redux, stores, actions, reducers.

## 2

Virtual DOM, javascript representation of the DOM. This makes React fast. React compares Virtual DOM to the actual DOM, and makes updates in a very fast manner. Component state or data changes triggger Virtual DOM comparison.

Components & templates, look like HTML templates, but uses JSX (javascript xml).

## 3

https://reactjs.org/docs/cdn-links.html
- Importing and creating an index.html with React from CDN, just for simple tests.

## 4

Creating our first class component and rendering it to the DOM.

## 5

State, describes the current state of the component (values or properties). It is just like a object, with keys and values.

UI and data in the state in sync.

## 6

React Developer Tools, it gets orange when using development build. It also gets black when using production build.

## 7

Whenever we change the state of a component, that component is gonna rerender the template to the DOM, to reflect that change in the screen.

Handling events inside class components.

## 8 (this keyword)

The "this" keyword is determined by how and where the function is called.

Inside render(), React automatically binds the context of this for us. But inside our own functions, that executes in reaction to our custom events, the context is not bound, so we have to do it by ourselves.

Arrow functions bind the value of "this" to whatever "this" is outside the function.

<pre><code>handleClick = (e) => {
    console.log(e.target);
    console.log(this.state.age);
};</code></pre>

Using this.setState() to change the state.

## 9

Dealing with forms.

## 10

create-react-app, is a command line tool to create React apps.
- development server
- keep code modular
- use build tools to create optimized code

We can use it with NPX, which is the NPM Package Runner.

npx create-react-app myapp

## 11

SPA, only one HTML page is served to the browser, but then React controls what a user sees on that page.

cd myapp
yarn start

Deleting all unnused files, and customizing our first example.

## 12

- Root component, App.js;
- NavBar and ContactForm, nested components.

## 13 (props)

Working with props inside class components.
When props are updated, the component is re-rendered.

## 14 (lists)

Receiving a list as props.

## 15 (component types)

- Container / Class Based (Components)
    - Contain state
    - Contain lifecycle hooks
    - Not concerned with UI
    - Use classes to create
    - Props comes automatically attached to the instance of the component in this.props

- UI / Presentational / Stateless / Functional (Components)
    - Don't contain state
    - Receive data from props
    - Only concerned with UI
    - Use functions to create
    - In functional components, we have to declare props as a parameter

Transforming Ninjas Class Component into a Functional Component.

## 16

Returning based on condition.

## 17

Creating and submiting a more complete form.

## 18

Functions as props, and altering the state of the parent class component.

## 19

Implementing deleteNinja with filter function.

<pre><code>//true, remain in the array
//false, filter out of the array
// !== operator to compare also the type
</code></pre>

## 20

When data changes (state or props), a New Virtual DOM is created and compared to the Current Virtual DOM, and where there are changes, those differences are updated in the Real DOM.

## 21

Be careful when applying CSS to not expose other tags to styles that should be individual to your component.

https://blog.pusher.com/css-modules-react/

## 22 (Component Lifecycle)

- Most used hooks
    - render
    - componentDidMount
    - componentDidUpdate
    - getDerivedFromProps

- Phases
    1. Mounting (first created, first mounted the DOM)
        1. constructor
            - set the state if needed
        2. getDerivedStateFromProps
            - enable to update its internal state as result of changes in our props
            - not often used
        3. render
            - required
            - takes JSX code and prepares to render to the DOM
        4. componentDidMount
            - once the component first mounts, used to get any external data
    2. Updating
        1. getDerivedStateFromProps
            - triggered state updates or props received changes
        2. shouldComponentUpdate
            - receives the nextProps and nextState, if return true it re-renders the component
        3. render
            - renders the template to the DOM
        4. getSnapshotBeforeUpdate
            - get read access to the DOM, before the change is actually commited to it
        5. componentDidUpdate
            - after the template is rendered to the actua DOM
    3. Unmounting
        1. componentWillUnmount

## 23

Creating a Todo application, view its own README.md