# micro-connect

# Live demo
[https://lukasz-starosta.github.io/micro-connect](micro-connect page)

## Formal description
  
Polish:
> Zakres pracy obejmuje wykorzystanie nowoczesnych technologii w zakresie interfejsu użytkownika aplikacji internetowych. Celem pracy jest opracowanie biblioteki umożliwiającej programistom tworzenie aplikacji klienckich przy użyciu podejścia mikroserwisów. Celem biblioteki jest skuteczne łączenie w jedną aplikację osobnych komponentów powstałych przy użyciu nowoczesnych technologii sieciowych tj. React, Angular oraz TypeScript, w sposób niezauważalny dla użytkownika końcowego. Zakres pracy obejmuje również stworzenie aplikacji korzystając z biblioteki oraz wymienionych technologii, w celu utworzenia dokumentacji i ukazania przykładu działania.

English, shortened:  
> The main goal is to allow developers to create client applications using microservice architecture. This library aims to connect several technology-independent components into a single application in a way invisible to the end user. The finished product will be a documentation created using the library and components.

## Final goal

A documentation application created in React composed of many independent mini-applications.  

## Prerequisites - have to be created to achieve the final goal
- Clear way of exposing the same mounting method from the component so that it can be mounted in another application
- Unified builder which will minimize the code and bundle it to allow it to be imported in another application
- GitHub package repository for independent components
- Hosting applicatin which would take the responsibility of mounting a specified component into a proper DOM element
- Design and implementation

## How to mount an external component? A clarification

> This is useful when you get lost in the whole approach.  

Let us start easy with React. By the `final mount` I mean invoking the method `ReactDOM.render(component, parent)`, where `parent` is usually `<div id="root"></div>`. So despite what happens before the final mount, this method is what counts to us eventually.  
From this we can deduce that the hosting platform needs to clearly provide a parent element to which the component should be mounted.  

### Mounting the component

a) in production mode - **from the hosting platform's React application**
    The component will be imported through a npm package, but we need to specify the element to which it should be mounted.  
    So this should look like so (using a `Component` React element) `<Component src={Component} />`
    
b) in development mode - **self hosted**
    This is useful when you want to test how the component works when mounted using the lib.
    This should work using `npm link` inside a component and `npm link *component package*` inside the host.
    The component should then be imported into the hosting app.

General workflow:
1) Create your component, instantiate `ComponentWrapper` with the proper mount, unmount methods and `export default` it
2) Build the package
3) Import the component into the hosting app and use it
    
From the notes above we can see that we need in fact two separate functionalities exposed from the `lib`.
1) a `Component` React component, which will be responsible for rendering it into the application
2) a `ComponentWrapper` class, which will wrap the actual component and add the `mount`, `unmount`, etc. methods  

### The ingredients

#### Component
A simple React component which is only responsible for embedding the component into our React app.

#### ComponentWrapper
This is a utility class which helps mount the component and avoid errors.
It has to be instantiated in the developer's component and `export default`ed.

#### Configuration
This is a major factor in the whole process, as it makes these components reusable.  
Refer to `lib/webpack.config.js` for **React**/**JS** component configuration.
**Angular** components have their own config.

### Frameworks

#### React
Works out of the box with `ReactDOM.render`

#### Angular
Works through a special configuration and custom build, but then uses custom elements so binding is equivalent to plan JS.

#### JS/TS
Simply `parent.appendChild`

