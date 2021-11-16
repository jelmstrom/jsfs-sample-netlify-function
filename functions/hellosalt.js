exports.handler = async function(event, context) {
    console.log(event.httpMethod, context);
    return {
        statusCode:200,
        body: JSON.stringify({message: "Hello Fall-21"})
    }
}