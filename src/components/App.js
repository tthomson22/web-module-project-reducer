import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import reducer, { initialState } from '../reducers'
import { applyNumber, changeOperation, clearCalc } from '../actions'

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState)

  const numberClick = (number) => {
    dispatch(applyNumber(number))
  }

  const operationClick = (operation) => {
    dispatch(changeOperation(operation))
  }

  const clearClick = () => {
    dispatch(clearCalc())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> { state.operation }</span>
              <span id="memory"><b>Memory:</b> { state.memory }</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => numberClick(1)}/>
              <CalcButton value={2} onClick={() => numberClick(2)}/>
              <CalcButton value={3} onClick={() => numberClick(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => numberClick(4)}/>
              <CalcButton value={5} onClick={() => numberClick(5)}/>
              <CalcButton value={6} onClick={() => numberClick(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => numberClick(7)}/>
              <CalcButton value={8} onClick={() => numberClick(8)}/>
              <CalcButton value={9} onClick={() => numberClick(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => operationClick('+')}/>
              <CalcButton value={"*"} onClick={() => operationClick('*')}/>
              <CalcButton value={"-"} onClick={() => operationClick('-')}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => clearClick()}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
