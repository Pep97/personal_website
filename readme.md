# Personal Website

This project is a personal website built using HTML, CSS, and JavaScript. It utilizes Gulp for automating tasks such as compiling SASS to CSS and purging unused CSS.

## Project Structure

- `/asset/` - Contains assets like images.
- `/css/` - Contains compiled CSS files.
- `/sass/` - Contains SASS files organized into components and sections.
- `gulpfile.js` - Defines Gulp tasks for the project.
- `index.html` - The main HTML file.
- `script.js` - The main JavaScript file.
- `server.js` - Contains the server to send a private value.
- `package.json` - Defines project dependencies and scripts.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install`.
3. To compile SASS to CSS and watch for changes, run `gulp` in the terminal.

## Development

This project uses SASS for styling. The SASS files are located in the `/sass/` directory and are organized into components and sections for easy management.

To make changes to the styles:

1. Navigate to the `/sass/` directory.
2. Make your changes to the `.scss` files.
3. Save your changes. Gulp will automatically compile the SASS files to CSS and purge unused CSS.

## Form Management

I'm using [web3forms](https://web3forms.com) to receive emails when someone complete the form, to make sure you can do the same sign-up on their service and get your access key , then create an api.env file and write inside this `VALUE=YOUR-ACCESS-KEY`