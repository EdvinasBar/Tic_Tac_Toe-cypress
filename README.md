# Tic-Tac-Toe Cypress Testing

This repository contains automated tests for a Tic-Tac-Toe game using [Cypress](https://www.cypress.io/), a modern JavaScript-based testing framework for web applications.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Writing Tests](#writing-tests)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The project tests the core functionality of a Tic-Tac-Toe web application using Cypress. It includes UI interaction tests, game logic validation, and edge case handling to ensure the game runs smoothly across different scenarios.

## Installation

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn installed globally

### Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/EdvinasBar/Tic_Tac_Toe-cypress.git
   cd Tic_Tac_Toe-cypress
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

## Running Tests

To execute Cypress tests, use the following commands:

### Run Cypress in Headless Mode

```sh
npx cypress run
```

### Run Cypress in Interactive Mode

```sh
npx cypress open
```

This opens the Cypress Test Runner, allowing you to select and run individual test cases.

## Folder Structure

```
Tic_Tac_Toe-cypress/
│── cypress/
│   ├── fixtures/       # Test data files
│   ├── integration/    # Cypress test files
│   ├── plugins/        # Cypress plugins
│   ├── support/        # Custom commands and utilities
│── cypress.json        # Cypress configuration file
│── package.json        # Project dependencies
│── README.md           # Project documentation
```

## Writing Tests

Cypress tests are written in JavaScript within the `cypress/integration/` folder. Example test:

```js
  it('Player Moves', () => {
    cy.get('.square').each(($el, index) => {
    cy.wrap($el).click();
    cy.get('.reset').click();
    });
    
  })
```

## Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy testing! 🚀

