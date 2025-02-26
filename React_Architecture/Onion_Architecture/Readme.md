# Onion Architecture for Frontend Applications

## Overview
Onion Architecture, introduced by Jeffrey Palermo, is a layered and domain-centric architecture that emphasizes the separation of concerns and dependency inversion. The goal is to make the core business logic independent of frameworks, databases, and UI, making the application more maintainable and testable.

## Principles
- **Separation of Concerns** - Business logic is isolated from external dependencies.
- **Dependency Inversion** - Inner layers should not depend on outer layers.
- **Testability** - The core application remains testable without external dependencies.
- **Flexibility** - The architecture allows easy modifications and growth.
- **Maintainability** - Code is structured for long-term adaptability.

## Project Structure

```
src/
 ├── core/                # Business logic (Entities, UseCases, Repository Interfaces)
 │   ├── entities/       # Domain models
 │   ├── useCases/       # Business logic operations
 │   ├── repositories/   # Interfaces for data access
 │
 ├── infrastructure/      # Implementation of external concerns
 │   ├── repositories/   # Implementations of repositories
 │   ├── api/            # API clients
 │   ├── mappers/        # Data transformation utilities
 │
 ├── application/        # Application services and orchestration
 │   ├── services/       # Business logic services
 │   ├── dto/            # Data Transfer Objects
 │
 ├── presentation/       # UI layer (Components, Pages, State Management)
 │   ├── components/     # UI elements
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

## Layers Explanation

1. Core Layer (core/)

- Contains business logic, domain models, and use cases.
- Completely independent of frameworks, databases, and external services.

2. Infrastructure Layer (infrastructure/)

- Implements repositories, API calls, and integrations.
- Bridges external concerns with the core business logic.

3. Application Layer (application/)

- Contains services that coordinate use cases and manage data flow.
- Uses Data Transfer Objects (DTOs) to communicate with other layers.

4. Presentation Layer (presentation/)

- UI components, pages, and state management.
- Calls application services to get data.

5. Infrastructure Layer (infrastructure/)

- Deals with external concerns like routing, logging, and analytics.

## When to Use Onion Architecture?

- When developing scalable applications with complex business rules.

- When requiring strong separation between business logic and external dependencies.

- When maintaining a structured, modular, and testable codebase.

## Benefits

✅ Testability - Business logic remains independent and easily testable.
✅ Scalability - Supports application growth without breaking changes.
✅ Flexibility - Easy to swap external dependencies without affecting the core logic.
✅ Maintainability - Clear separation of concerns makes updates straightforward.

## Conclusion

Onion Architecture is a powerful way to structure frontend applications by ensuring business logic remains independent of frameworks, UI, and data sources. This approach enhances maintainability, testability, and long-term scalability.