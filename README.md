# micro-connect

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
- Distribution server/npm/GitHub package repository for independent components
- Hosting React component which would take the responsibility of mounting a specified component into a proper DOM element
- Documentation design and implementation

## How to mount an external component? A clarification

> This is useful when you get lost in the whole approach.  

Let us start easy with React. By the `final mount` I mean invoking the method `ReactDOM.render(component, parent)`, where `parent` is usually `<div id="root"></div>`. So despite what happens before the final mount, this method is what counts to us eventually.  
From this we can deduce that the hosting platform needs to clearly provide a parent element to which the component should be mounted.  

### Mounting the component (POC, needs testing)

(maybe we can use packages instead of URI, this will have to be checked out)

a) in production mode - **from the hosting platform's React application**
    The component will be imported through URI / Package, but we need to specify the element to which it should be mounted.  
    So this should look like so (using a `Component` React element) `<Component src={URI / Package} parentElement={...} />`
    It will be important to protect the code against attacks which would cause malicious scripts to be executed.
    
b) in development mode - **using the `lib`'s simple React application**
    This is useful when you want to test how the component works when mounted using the lib.
    We can create a simple hosting React app in the repo and run it (e.g. on localhost:3001) with the hardcoded URI to our component built through `webpack-dev-server`.
    Then run our component (which can be also tested alone) at localhost:3000
    The component should then be imported into the hosting app.
    
General workflow (including URI):
1) Specify a constant URL from which the component will be fetched - say localhost:3000/component.js - the built version of the component
  (The external component itself will be loaded into a specified parent element (`<div id="root"></div>` in development))
2) Add a script tag with the URL to the `body` and mount the component
3) Execute `window.component.mount(parentElement)`

General workflow (including packages):
1) Create your component, instantiate `ComponentWrapper` with the proper mount, unmount methods and `export default` it
2) Build the package (TODO: provide a package.json template to ensure consistency)
3) Import the component into the hosting app and use it
    
From the notes above we can see that we need in fact two separate functionalities exposed from the `lib`.
1) a `Component` React component, which will be responsible for rendering it into the application
2) a `ComponentWrapper` class, which will wrap the actual component and add the `mount`, `unmount`, etc. methods  
3) a `ComponentManager` class which will hold on to all of the `ComponentWrapper` objects with the actual components

### Managing the component namespace
Right now we instantiate the ComponentManager object in a particular component. Maybe we could make it a singleton and only add the component with a `render` callback?
This could be the correct approach considering that in case of instantiation within the component the object is lost and there is no use of it anymore.

What are the benefits of using a singleton ComponentManager?
- We can manage each component through `uid` (must be unique) and `name` (can be repeated, e.g. `button`)
- We can hold on to the component instances and use them to manage the components
- We can easily group components per page

### The ingredients

#### Component
A simple React component which is only responsible for embedding the component into our React app.

#### ComponentWrapper
This class manages the script, version, mounting, unmounting
It has to be instantiated in the developer's component and `export default`ed.

#### ComponentManager
Keeps track of the instances of `ComponentWrapper` in the application, used to

### Frameworks

#### React
Works out of the box with `ReactDOM.render`

#### Angular
Possibly could use https://angular.io/guide/elements

#### JS/TS
Simply `parent.appendChild`

## Milestones
Refer to: [Milestones](https://github.com/lukasz-starosta/micro-connect/milestones)
