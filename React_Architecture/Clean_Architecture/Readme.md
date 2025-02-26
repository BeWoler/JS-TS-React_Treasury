# Clean Architecture for Frontend Applications

## Overview
Clean Architecture, introduced by Robert C. Martin (Uncle Bob), is a layered approach to software architecture that aims to separate concerns, making applications maintainable, testable, and scalable. It emphasizes dependency rule enforcement, ensuring that inner layers are independent of outer layers.

## Principles
- **Separation of Concerns** - Business logic is decoupled from UI and frameworks.
- **Dependency Inversion** - High-level policies should not depend on low-level details.
- **Testability** - Core business logic remains isolated and easy to test.
- **Scalability** - The architecture allows easy expansion and refactoring.
- **Maintainability** - Code remains readable and adaptable over time.

## Project Structure

```
src/
 ├── app/                # Application configuration, DI container, providers
 │
 ├── domain/             # Business logic (Entities, UseCases, Repositories Interfaces)
 │   ├── entities/       # Core domain models
 │   ├── useCases/       # Business logic operations
 │   ├── repositories/   # Interfaces for data persistence
 │
 ├── data/               # Implementations of repositories and external services
 │   ├── repositories/   # Concrete implementations of repositories
 │   ├── api/            # API clients
 │   ├── mappers/        # Data transformations
 │
 ├── presentation/       # UI layer (Components, Pages, State Management)
 │   ├── components/     # Reusable UI elements
 │   ├── pages/          # Page-level components
 │   ├── state/          # State management (e.g., Redux, Zustand)
 │
 ├── infrastructure/     # Framework and environment-related code
 │   ├── router/         # Routing configurations
 │   ├── services/       # Global services like logging, analytics
 │
 ├── index.js
 ├── App.js
```