
# Nono-UI

Welcome to the Nono-UI repository. This project provides a collection of ready-to-use, beautifully designed Tailwind CSS components that you can easily integrate into your projects.

### 🚀 Try it:
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/RednibCoding/nono-ui)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/RednibCoding/nono-ui)
[<img src="public/nnui-button.png" width="18%" height="18%" alt="Nono-UI Logo">](https://nono-ui.netlify.app)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Easy to Use**: Copy the HTML and paste it into your project with no additional setup required.
- **Responsive Design**: Components are designed to look great on all devices.
- **Customizable**: Modify the components to fit your project's style and requirements easily.

## Installation

To install the project locally, clone the repository using the following command:

```sh
git clone git@github.com:RednibCoding/nono-ui.git
```

Navigate to the project directory:

```sh
cd nono-ui
```

Install the necessary dependencies:

```sh
npm install
```

## Usage

This project is built using [Astro.js](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). To start the development server, use:

```sh
npm run dev
```

Open your browser and navigate to `http://localhost:4321` to see the project in action.

### Components

Explore the available components by visiting the `/explore` page. Each component has a detailed view with a preview and the corresponding HTML code that you can copy and use in your project.

### Adding New Components

To add new components, create a new markdown file in the `src/content/components` directory. Components have a specific format to ensure consistency:

```
---
name: Display name of the component
description: A description about the component
category: A category
---

<!-- Html code goes here -->
```
>Note: The category name can be an existing category (see other components) or a new category by defining a new name. The component navigation tree on the website will be built automatically, so no further action is needed.

## Contributing

We welcome contributions to improve the components and add new ones. To contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes / add new components.
4. Submit a pull request.

Please ensure your code adheres to the project's coding standards.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

**Built with ❤️ using [Astro.js](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).**
