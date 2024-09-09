# HelloLib

HelloLib is a lightweight JavaScript library designed to inject a styled "Hello World" element into any webpage. This library is built using [Vite](https://vitejs.dev/) for fast and efficient development and packaging, and it supports both ESM and UMD formats.

## Features

- **Dynamic Content Injection**: Easily injects a styled "Hello World" component into a target HTML element.
- **Customizable Styles**: Includes basic CSS styles that can be easily modified for your project.
- **Support for Multiple Formats**: The library is built and packaged in both ESM and UMD formats, making it suitable for a wide range of environments, from modern ES module-based systems to older projects requiring UMD.

## Getting Started

To get started with HelloLib, clone this repository and install the necessary dependencies using [npm](https://www.npmjs.com/).

## Installation

1. Clone the repository:

   ```console
   git clone https://github.com/takatama/hello-lib.git
   ```

2. Install dependencies:

   ```console
   npm install
   ```

3. Build the library:

   ```console
   npm run build
   ```

4. Use the library in your project by including the appropriate build format (`.es.js` for ESM or `.umd.cjs` for UMD).

## Usage

The library can be used in two primary ways:

- **_ESM format_**: Suitable for modern JavaScript projects that use the ES module system.
- **_UMD format_**: Compatible with projects that need global access to the library in the browser environment.

## Development

To run the development server with hot-reloading, use the following command:

```console
npm run dev
```

You can modify the source code in the `src` directory and see the changes live.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
