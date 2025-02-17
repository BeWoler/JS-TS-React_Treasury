# 📌 **Composite Components Pattern**

## **Definition:**
The **Composite Components** pattern is a design pattern in React where a complex component is broken down into multiple smaller, independent components that work together. Instead of creating a single, monolithic component, the composite pattern allows for greater flexibility, reusability, and maintainability by composing multiple child components

## **How It Works:**
- A **parent component** (the composite component) acts as a container for its **child components**.
- The child components are responsible for rendering specific parts of the UI.
- The parent component can manage shared state or logic and pass necessary data to its children.
- This pattern helps structure UI components in a modular and flexible way

## **Example: Accordion Using Composite Components**