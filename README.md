# Grade Management Application Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Built With](#built-with)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Reference](#api-reference)
7. [Contributing](#contributing)
8. [License](#license)

---

## Introduction

This document serves as a comprehensive guide to the Grade Management Application challenge by Monteiro Berti Psicologia. The app is designed to help manage grades across various subjects for multiple bimesters.

---

## Prerequisites

Before you begin, make sure you have installed:

- Node.js v14 or higher
- npm v6 or higher

---

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - A build tool that aims to provide a faster development experience
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Node.js](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine
- [TypeScript](https://www.typescriptlang.org/) - A strongly typed superset of JavaScript

---

## Installation

1. Clone the repository
    ```bash
    git clone https://github.com/caiocesar/desafio-caiocesar
    ```
  
2. Navigate to the project directory
    ```bash
    cd desafio
    ```
  
3. Install dependencies
    ```bash
    npm install
    ```
  
4. Navigate to the backend directory
    ```bash
    npm run dev
    ```
  
5. Navigate to the frontend directory
    ```bash
    npm run dev
    ```
  
---

## Usage

### Adding a Grade

1. Open the modal by clicking the 'Lançar Nota' button.
2. Select the `Bimester`.
3. Enter the grade in the 'Nota' field.
4. Click 'Confirmar' to add the grade.

### Deleting a Grade

The grade can be deleted hitting the "trash" button

---

## API Reference

Note that, for developing purposes, the API is only simutating a Data Base using an array. Every time that the server is closed, the data is lost

### POST /resultados

Adds a new grade.

#### Parameters

- `bimestre`: The bimester of the grade (e.g., "PRIMEIRO", "SEGUNDO")
- `disciplina`: The subject of the grade (e.g., "Biologia", "Artes")
- `nota`: The actual grade (float)
- `criadoEm`: Timestamp when the grade was created
- `atualizadoEm`: Timestamp when the grade was updated

---

## Contributing

---

## License

