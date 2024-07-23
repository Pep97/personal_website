exports.handler = async (event, context) => {
    const { name, email, message } = JSON.parse(event.body);
  
    // Your server-side logic here (e.g., sending an email, saving to a database)
  
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Form submitted successfully" }),
    };
  };