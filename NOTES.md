# Episode 10: Data is the new oil

## Tools
- Chrome extension: React Developer Tools, Profiler

## Concepts

### Lifting State Up

- **Lifting State Up**: This is the process of moving the state from a child component to a parent component.
- **Benefits**:
  - It makes the state more accessible to other components.
  - It makes the state more predictable.
  - It makes the state easier to debug.

### Controlled and Uncontrolled Components

- **Controlled Components**: These are components that manage the state of other components.
- **Uncontrolled Components**: These are components that manage their own state.

### Can I modify parent state variables from a child component?

- No, you cannot modify parent state variables from a child component. You can only pass data from parent to child components.
- Not directly, but you can pass a function as a prop to the child component and call that function from the child component to modify the parent state.

### Prop Drilling problem

- **Prop Drilling**: This is the process of passing props from a parent component to a child component, and then to another child component, and so on. This can make the code harder to read and maintain.

### React Context

- **React Context**: This is a feature that allows you to pass data through the component tree without having to pass props down manually at every level.
- When to use React Context:
  - When you have data that needs to be shared across multiple components.
  - When you have data that needs to be updated frequently.
  - When you have data that is not related to the component tree.
- createContext, useContext, Provider, Consumer
- **useContext**: This is a hook that allows you to access the value of a context.
- **Provider**: This is a component that allows you to provide the value of a context to its children.
- **Consumer**: This is a component that allows you to consume the value of a context.
- **useContext** vs **Consumer**: **useContext** is a hook that allows you to access the value of a context directly, while **Consumer** is a component that allows you to consume the value of a context using a render prop.
- Nested Contexts: You can nest contexts to provide different values to different parts of the component tree. - **IMPORTANT**

# Episode 11: Let's build Our Store

- **Redux** is a not mandatory library for React
- **Redux** and **React** are two separate libraries
- Use **Redux** wisely, don't use it for everything
- **Redux** alternatives: **Zustand**
- **Redux Toolkit**: A set of tools and best practices for building Redux applications.

### What is difference between below 3 statements?
- onClick={handleClick}
- onClick={handleClick()}
- onClick={() => handleClick()}

### Redux Toolkit
- install redux-toolkit and react-redux
- Build a store
- Connect the store to the app
- Create a slice (cartSlice)
- dispatch actions
- Selector

### **IMPORTANT** interview question
- Why we need to subscribe to right portion of the store in redux?
- // const cartItems = useSelector((store) => store.cart.items);
    vs.
  // const store = useSelector((store) => store);
  // const cartItems = store.cart.items;
- **Answer**: If you subscribe to the whole store, your component will re-render whenever any part of the store changes. This can be inefficient and can lead to unnecessary re-renders. By subscribing to the right portion of the store, you can ensure that your component only re-renders when the relevant part of the store changes.

### difference between Redux reducer and reducers function
- Whenever you writing a `store` in Redux, one big `reducer` for the whole store. and that reducer is a combination of multiple `reducers`
- When we are writing a Slice, we create multple `reducers` (functions) and then combine them into a single reducer using `createSlice` function.
- `reducer` is combination of multiple `reducers` functions.

### In Vanilla Redux, Why dont mutate the state? and in Redux Toolkit, why we mutate the state?
- In Vanilla Redux, you should not mutate the state directly because Redux uses shallow equality checks to determine if the state has changed. If you mutate the state directly, Redux will not be able to detect the changes and your components will not re-render. example:
- ```js
  const newState = [...state];
  newState.push(action.payload);
  return newState;
  ```
- In Redux Toolkit, you can mutate the state directly because Redux Toolkit uses Immer under the hood to handle state mutations. Immer creates a copy of the state and applies the mutations to the copy, leaving the original state unchanged. This allows you to write code that looks like you are mutating the state directly, but in reality, you are working with a copy of the state. example:
- ```js
  state.push(action.payload);
  ```
- But, behind the scenes, Redux Toolkit is creating a copy of the state and applying the mutation to the copy.
- Immer is a library that allows you to work with immutable data structures in a more convenient way. Finds the difference between the old state and the new state and only updates the parts of the state that have changed.
- **IMPORTANT** Whatever you return from a reducer function is the new state of the store.

### Read more about RTK Query