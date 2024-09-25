import React, { useContext } from "react";

const TodoContext = React.createContext({
    todos: [{ id: 1, message: "Hii baby", checked: false}],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {}, 
    toggleChecked: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;
export const useTodo = () => useContext(TodoContext);
