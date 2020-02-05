import React, { useState } from "react";

const ApiReactContext = React.createContext({});

export const ApiContext = ({ children }) => {
  const [state, setState] = useState({
    queryQueue: []
  });

  return (
    <ApiReactContext.Provider
      value={{
        ...state,
        addToQueue: queue => {
          setState({
            ...state,
            queryQueue: [...state.queryQueue, ...queue]
          });
        },
        removeFromQueue: id => {
          setState({
            ...state,
            queryQueue: state.queryQueue.filter(queue => queue !== id)
          });
        }
      }}
    >
      {children}
    </ApiReactContext.Provider>
  );
};

export const ApiContextConsumer = ApiReactContext.Consumer;
