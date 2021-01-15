const axios = require('axios')

exports.handler = function(event, context, callback) {
// console.log('Received event:', JSON.stringify(event, null, 4));

    var message = event.Records[0].Sns.Message;
    console.log('Message received from SNS:', message);
	
	axios
  .post('https://hooks.slack.com/services/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', {
    text: message
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
  
    callback(null, "Success");
};