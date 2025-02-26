# Feature-Sliced Design (FSD) Architecture

## Overview
Feature-Sliced Design (FSD) is an architectural methodology for organizing front-end applications, particularly in large-scale projects. The core idea is to structure the project based on business features rather than technical layers, improving scalability, maintainability, and reusability.

## Principles
- **Separation by Features** - Organize the project based on functional features instead of technical layers.
- **Explicit Layers** - Each feature is divided into clear layers: `entities`, `features`, `shared`, `widgets`, `pages`, and `app`.
- **Encapsulation** - Each module should encapsulate its logic to reduce dependencies.
- **Reusability** - Components and logic that can be used across different features should be placed in `shared`.
- **Scalability** - Designed to accommodate project growth with minimal refactoring.

## Project Structure

```
src/
 ├── app/                  # Application initialization (providers, router, global config)
 │   ├── providers/
 │   ├── store.js
 │   ├── App.jsx
 │   ├── index.js
 │
 ├── shared/               # Reusable modules (UI components, utilities, hooks, API)
 │   ├── ui/
 │   ├── utils/
 │   ├── hooks/
 │   ├── api/
 │
 ├── entities/             # Business logic and state management for domain models
 │   ├── user/
 │   │   ├── model/
 │   │   ├── ui/
 │   │   ├── api/
 │   │   ├── lib/
 │
 ├── features/             # Application features (user stories, independent functionality)
 │   ├── login/
 │   │   ├── model/
 │   │   ├── ui/
 │   │   ├── api/
 │   │   ├── lib/
 │
 ├── widgets/              # UI components that combine multiple features (e.g., Navbar)
 │   ├── navbar/
 │   ├── footer/
 │
 ├── pages/                # Page-level components, assembling features and widgets
 │   ├── home/
 │   ├── profile/
 │
 ├── process/              # Global processes (authentication, themes, configurations)
 │   ├── auth/
 │
 ├── index.js
 ├── App.js
```


