## 📌 **Render Props Pattern**

### **Definition:**
The **Render Props** pattern is a technique in React where a component accepts a function as a prop, and this function is used to render its content. The idea is to provide a way for a component to share its logic with other components without explicitly tying the component to a specific display or behavior.

### **How it works:**
- A component takes a function as a prop (called the "render prop").
- The component executes the function and passes it some data, typically related to the component’s state or logic.
- The function returns a React element (or elements) to be rendered, thus allowing the parent component to define how the UI should look.

### **Example use case:**
- Sharing logic for handling state, events, or fetching data across multiple components while allowing the parent component to control how the data is displayed.