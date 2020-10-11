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
So while testing our components should not use an internal `public` folder with `index.html` but instead this `index.html` should be taken from the `lib`. How to do it?

### Mounting the component (POC, needs testing)

a) in production mode - **from the hosting platform's React application**
    The component will be imported through `import YOUR_COMPONENT from 'YOUR_PACKAGE'`, but we need to specify the element to which it should be mounted.  
    So this should look like so (using a `Component` React element) `<Component src={YOUR_COMPONENT} parentElement={...} />`
    
b) in development mode - **using the `lib`'s simple React application**
    This is useful when you want to test how the component works when mounted using the lib.
    
    But how to use this approach in development?
    To be more clear: how to make the library's `Component` in a simple hosting app import our local component?  
    
    1) Specify a constant URL from which the component will be fetched - say localhost:3000/component.js - the built version of the component
       (The external component itself will be loaded into a specified parent element (`<div id="root"></div>` in development))
    2) Add a script tag with the URL to the `body` (this makes the component's namespace available through `window.component`
    3) Execute `window.component.mount(parentElement)`
     
    The above should also be the workflow for a production mode app.
    
From the notes above we can see that we need in fact two separate functionalities exposed from the `lib`.
1) a `ComponentManager` (name subject to change) class, which will wrap the actual component and add the `mount`, `unmount`, etc. methods
2) a `Component` React component, which will be responsible for rendering it into the application
       
## Milestones
Refer to: [Milestones](https://github.com/lukasz-starosta/micro-connect/milestones)
