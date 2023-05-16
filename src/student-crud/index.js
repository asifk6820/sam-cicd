//test pipeline
exports.handler = async (event, context) => {
    let body;
    let statusCode = 200;
    const headers = {
      "Content-Type": "application/json",
    };
  
    try {
        console.log("==========>event.path",event.path)
        console.log("==========>checking",event.path)
      switch (event.path) {
        case `/deleteStudent/${event.pathParameters.id}`:
          body = `Deleted student ${event.pathParameters.id}`;
          break;
        case `/updateStudent/${event.pathParameters.id}`:
          body = "Dummy data";
          break;
        case "/readStudent":
          body = "Dummy data";
          break;
        case "/createStudent":
          let requestJSON = JSON.parse(event.body);
          body = `Put student ${requestJSON.id}`;
          break;
        default:
          throw new Error(`Unsupported route: "${event.path}"`);
      }
    } catch (err) {
      statusCode = 400;
      body = err.message;
    } finally {
      body = JSON.stringify(body);
    }
  
    return {
      statusCode,
      body,
      headers,
    };
  };
