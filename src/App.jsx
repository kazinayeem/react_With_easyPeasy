import {Suspense, useEffect } from "react";
import "./App.css";
import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
function App() {
  const { count, data } = useStoreState((state) => state);
  const { add, remove, getdata } = useStoreActions((actions) => actions);
  useEffect(() => {
    getdata();
  }, [getdata]);

  return (
    <div className="container m-auto">
      <h3 className="text-center">count {count}</h3>

      <div className="d-flex gap-2">
        <button onClick={() => add(2)} className="btn btn-danger">
          ADD
        </button>
        <button onClick={() => remove(2)} className="btn btn-info">
          REMOVE
        </button>
      </div>

      <div>
        
      <Suspense fallback={<h1>Loading</h1>}>
      <ul>
          {
            data?.map(d => (
              <li key={d.id}>{d.title}</li>
            ))
          }
        </ul>
      </Suspense>
      </div>
    </div>
  );
}

export default App;
