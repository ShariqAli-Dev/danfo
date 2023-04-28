# Danfo Dataframe Application

This is a simple web application that takes a .csv file as input and converts it into a dataframe using the `Danfo.js` library. The resulting dataframe is then displayed as an interactive table.

The application is hosted on vercel and can be accessed at https://danfo-beryl.vercel.app/.

## Installation

To run this application you will need to have `Node.js` installed. If you don't already have it installed, you can do it at https://nodejs.org/en.

## Usage

To run the application, run the following command in your terminal:

```bash
# you can also use npm or yarn if those are your preferred package managers
pnpm install
pnpm dev
```

This will start a Vite development server and the application will be available at http://localhost:5173/.

To use the application, upload any .csv file selecting the "Choose File" button and then selecting the "Convert To Dataframe" button. The file will be uploaded to the server and a dataframe will be generated using the Danfo.js library. The resulting dataframe will be displayed as an interactive table.

## Development

If you would like to modify this applicaiton, you can do so by editing the `App.tsx` file. The applicaiton uses the React Library and Vite Development server with PNPM as its package manager.
