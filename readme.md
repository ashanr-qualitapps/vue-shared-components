# Vue Shared Components

[![npm version](https://badge.fury.io/js/%40ashanr-qualitapps%2Fvue-shared-components.svg)](https://badge.fury.io/js/%40ashanr-qualitapps%2Fvue-shared-components)

## Overview

`vue-shared-components` is a library of reusable Vue.js components that can be shared across different projects. This library aims to provide a consistent set of UI components to streamline the development process and ensure uniformity in design and functionality.

## Components

### CountryList

A component that displays a list of countries fetched from an external API.

## Installation

To install the `vue-shared-components` library, you can use npm:

```bash
npm install @ashanr-qualitapps/vue-shared-components
Usage
To use the components in your Vue.js application, import them as needed. Below is an example of how to use the CountryList component.

Importing Individual Components
javascript
Copy code
import { createApp } from 'vue';
import App from './App.vue';
import { CountryList } from '@ashanr-qualitapps/vue-shared-components';

const app = createApp(App);
app.component('CountryList', CountryList);
app.mount('#app');
Using Default Export
You can also import all components and use them globally:

javascript
Copy code
import { createApp } from 'vue';
import App from './App.vue';
import SharedComponents from '@ashanr-qualitapps/vue-shared-components';

const app = createApp(App);
app.use(SharedComponents);
app.mount('#app');
Example Usage in a Component
vue
Copy code
<template>
  <div>
    <CountryList />
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent'
};
</script>
Development
Project Setup
bash
Copy code
npm install
Compiles and Hot-Reloads for Development
bash
Copy code
npm run dev
Compiles and Minifies for Production
bash
Copy code
npm run build
Run Unit Tests
bash
Copy code
npm run test
Lint and Fix Files
bash
Copy code
npm run lint
Building and Publishing
To build the library, run:

bash
Copy code
npm run build
To publish the library to npm, ensure you are logged in to your npm account and run:

bash
Copy code
npm publish --registry=https://npm.pkg.github.com/
Contributing
We welcome contributions to improve this library. Please follow the guidelines below to contribute:

Fork the repository.
Create a new branch for your feature or bugfix.
Make your changes and commit them with a descriptive message.
Push your changes to your fork and submit a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For questions or suggestions, please open an issue in this repository or contact us directly.

csharp
Copy code

You can copy and paste this content into your `README.md` file.