import logo from './logo.svg';
import './App.css';
import SImpleCom from './components/SImpleCom';
import FunctionalCom from './FunctionalCom';
import ClassComp from './components/ClassComp';
 

function App() {
  return (
    <div className="App">
      <h1> 
     Hello World
     <SImpleCom/>
    </h1>
    {/* ques-3 ----------------------------------

Function Component: A React component written as a JavaScript function that returns JSX and uses hooks to manage state and lifecycle.

Class Component: A React component written as a class that extends React.Component and uses this.state and lifecycle methods.
  */}
    <FunctionalCom/>
    <ClassComp/>
    </div>
  );
}

export default App;
