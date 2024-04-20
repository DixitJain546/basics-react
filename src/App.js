import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import WelcomeClass from './components/WelcomeClass';
import WelcomeNoJsx from './components/WelcomeNoJsx';
import Counter from './components/Counter';
import ParentComponent from './components/ParentComponent'
import PersonList from './components/PersonList';
import FormOne from './components/FormOne';
import ParentComp from './components/ParentComp';
import RefDemo from './components/RefDemo';
import ErrorTestChild from './components/ErrorTestChild';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounterHOC from './components/ClickCounterHOC';
import HoverCounterHOC from './components/HoverCounterHOC';
import ClickCounterRP from './components/ClickCounterRP';
import HoverCounterRP from './components/HoverCounterRP';
import CounterRP from './components/CounterRP';
import { UserContextProvider } from './components/UserContext';
import UserContextChildA from './components/UserContextChildA';
import HookCouner from './components/HookCounter';
import HookCounerSafe from './components/HookCounterSafe';
import HookSetName from './components/HookSetName';
import HookSetArray from './components/HookSetArray';
import EffectHookOne from './components/EffectHookOne';
import CounterReducer from './components/CounterReducer';
import GlobalCounterParent from './components/GlobalCounterParent';
import React from 'react';
import ExampleCallBack from './components/ExampleCallBack';
import CustomCounterHook from './components/CustomCounterHook';
import CustomInputHook from './components/CustomInputHook';


export const CounterContext = React.createContext()
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* <Welcome name = "Dixit"/> */}
          {/* <WelcomeClass name = "Dixit"/> */}
          {/* <WelcomeNoJsx name = "Dixit"/> */}
          {/* <Counter /> */}
          {/* <ParentComponent name = "Parent"/> */}
          {/* <PersonList /> */}
          {/* <FormOne /> */}
          {/* <ParentComp /> */}
          {/* <RefDemo /> */}
          {/* <ErrorTestChild hero="SuperMan" />
          <ErrorTestChild hero="Batman" />
          <ErrorBoundary>
          <ErrorTestChild hero="Joker" />
          </ErrorBoundary> */}
          {/* <ClickCounterHOC name="Dixit"/>
          <HoverCounterHOC name="Dixit"/> */}
          {/* <CounterRP>
          {(count, incrementCounter) => ( <ClickCounterRP  count = {count} incrementCounter = {incrementCounter}/>
          )}
          </CounterRP>
          <CounterRP>
          {(count, incrementCounter) => ( <HoverCounterRP  count = {count} incrementCounter = {incrementCounter}/>
          )}
          </CounterRP> */}
          {/* <UserContextProvider value="Dixit Jain">
            <UserContextChildA />
          </UserContextProvider> */}
          {/* <EffectHookOne /> */}
          {/* <CounterReducer />   */}
          {/* <GlobalCounterParent /> */}
          {/* <ExampleCallBack /> */}
          {/* <CustomCounterHook /> */}
          <CustomInputHook />
        </p>
      </header>
    </div>
  );
}

export default App;
