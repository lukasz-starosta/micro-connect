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

### The two ways of mounting

a) in development mode - **using the `lib`'s `index.html`**
    This is useful when you want to test how the component works when mounted using the lib. Here we usually mount to `<div id="root"></div>`
b) in production mode - **from the hosting platform's React application**
    The component will be imported through `import YOUR_COMPONENT from 'YOUR_PACKAGE'`, but we need to specify the element to which it should be mounted.  
    So this should look like so (using a Component React element) `<Component src={YOUR_COMPONENT} parentElement={...} />`
    But how to use this approach in development?
----- how to do this
    
### How to mount a component in the `lib`'s `index.html`?
 
a) configure `webpack-dev-server` to use the `index.html` from `node_modules/@lukasz-starosta/micro-connect/dist/index.html`
    this is only temporary and I see no clear way how to proceed from this to mounting the component in a hosting platform
----- add more options

## Milestones
Refer to: [Milestones](https://github.com/lukasz-starosta/micro-connect/milestones)
