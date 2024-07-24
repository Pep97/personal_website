require('dotenv').config({ path: './api.env' });

exports.handler = async (event, context) => {
    try {
        const accessKey = process.env.VALUE; 
        const result = { message: accessKey }; 
        return {
            statusCode: 200,
            body: JSON.stringify(result),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'An error occurred while processing the request' }),
        };
    }
};

// run "netlify dev" in the terminal to start the server