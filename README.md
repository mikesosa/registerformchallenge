# Register Form Challenge

1. What is the difference between state and props?
##### A state is to store data in my current component so we can control the page needs in my controller-view. Props are used to pass data & event handlers down to child components. A state can become a prop if I want.
2. Props are mutable or inmutable properties? Please explain your answer.
#####  Props are inmutables. A prop is a state that is managed by the component owner. A component should manage its own state, but it should not manage its own props.
3. What is Redux?
##### Is a library that makes  managing the state easy. It helps to manage the data to display and how to respond to the user actions.
4. How works setState? In what scenario is recommended use?
##### setState is commonlyused in Hooks. It helps us to set a state of a predefinend variable. 
5. What is render()? how works?
##### render() is in charge of transforming the react components into DOM (Document Object Model) nodes so the browser can understand and display them on the screen. In order to decide what to change, React recursively compares the new React Element with the previous one.
6. What are the main differences between Virtual DOM and Real DOM?
##### DOM (Document Object Model) is an abstraction of a structured HTML code. Elements of HTML become nodes in the DOM. The Virtual DOM is an abstraction of the HTML DOM. It is lightweight and detached from the browser-specific implementation details.
7. Please show some differences between React ES5 syntax and ES6.
##### R/
### Arrow Functions
ES5
``` js
function greetings (name) {
 return 'hello ' + name
}
```
ES6
``` js
const greetings = (name) => {
 return `hello ${name}`;
}
```
### Working with Objects
ES5
``` js
var obj1 = { a: 1, b: 2 }
var obj2 = { a: 2, c: 3, d: 4}
var obj3 = Object.assign(obj1, obj2)
```
ES6
``` js
const obj1 = { a: 1, b: 2 }
const obj2 = { a: 2, c: 3, d: 4}
const obj3 = {...obj1, ...obj2}
```
### Object destructuring
ES5
``` js
var obj1 = { a: 1, b: 2, c: 3, d: 4 }
var a = obj1.a
var b = obj1.b
var c = obj1.c
var d = obj1.d
```
ES6
``` js
const obj1 = { a: 1, b: 2, c: 3, d: 4 }
const {
  a,
  b,
  c,
  d
} = obj1
```
### Import and Export modules
``` js
var myModule = { x: 1, y: function(){ console.log('This is ES5') }}
module.exports = myModule;
```
ES6
``` js
const myModule = { x: 1, y: () => { console.log('This is ES5') }}
export default myModule;
```
Among others...
8. What is a component in React and how works?
##### R/
9. How you can update the state of a component?
##### R/
10. In your trajectory using React.js, what has been the biggest challenge you have faced? How did you face it?
##### R/

## Challenge

A company are building a new web application for a general purpose. You was hired for build
the skeleton of the app and the register form using React.js. The requirements are like follow:
- For skeleton:
o The application must be in react.js
o Create a skeleton that contains elements for assets, components, routes and any
other elements that you consider.
- For Register form:
o The brand guidelines required for the test are located in the follow link and must
use the light type design:
§ https://www.behance.net/gallery/7226653/Medium-Brand-Development
o The fields required in the test are:
§ First name (required, at least 3 characters)
§ Last name (required, at least 3 characters)
§ Email (required, valid email)
§ Password (required, at least 8 digits, 1 uppercase, 1 number and 1 special
character)
§ Profile picture image (optional)
§ Phone number (optional)
§ Birthday date (optional)
§ Country (optional, from list)
o Create all alerts and hints required to have a good User Experience in client side.
o This test not require connection to any API
