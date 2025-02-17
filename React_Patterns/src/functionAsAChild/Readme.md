# 📌 Function as a Child Component (FAAC) Pattern

## **Definition**
The **Function as a Child Component (FAAC)** pattern in React allows passing a **function** as the `children` prop instead of a regular JSX element. This function receives data (such as props or state) from the parent component and returns JSX dynamically.

This pattern is similar to **Render Props**, but the key difference is that the function is passed **through `children`**, not a separate prop like `render={}`.

## **🔹 How It Works?**
- The **parent component** manages data or logic.
- Instead of rendering static children, it **calls the function** passed as `children`, providing necessary data.
- The **child function** uses the received data and returns JSX.

This approach provides **flexibility**, as the parent component does not control how the content is rendered—it only provides the data.

## **🔹 Example: Fetching Data with FAAC**