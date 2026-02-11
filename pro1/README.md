<!-- # React-Assignment


ques -2 --------------------------------------


A new React project can be created using the following command:

npx create-react-app my-app


This command downloads react and dependencies  

now go inside the project -->  cd my-app

To run the application  --  > npm start


This starts a local development server  

http://localhost:3000

 
Rendering a Simple React Component

A simple React component is created in App.js as follows:

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <p>This is my first React application.</p>
    </div>
  );
}
 

 
--> React components are written using JSX.

--> JSX is converted into JavaScript by Babel.

--> React creates a Virtual DOM to efficiently update the UI.

--> Only the necessary changes are applied to the Real DOM.




ques-3 ----------------------------------

Function Component: A React component written as a JavaScript function that returns JSX and uses hooks to manage state and lifecycle.

Class Component: A React component written as a class that extends React.Component and uses this.state and lifecycle methods.
 


 ques -4 ----------------------------
 const element = <h1>Hello, World!;</h1>;


The problem is invalid JSX syntax.
 
The semicolon ; is inside the JSX content, which breaks JSX parsing.

JSX treats everything between <h1> and </h1> as text or expressions 
the semicolon doesn’t belong there.

 right code -- > 
const element = <h1>Hello, World!</h1>; -->