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