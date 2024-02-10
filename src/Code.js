function AI(input) {
  if(Array.isArray(input)) {
    input = input.flat().join(", "); // Flatten the array and join values
  }

  // Define the form parameters
  var formData = {
    'prompt': input
  };

  var options = {
    'method' : 'post',
    'payload' : formData
  };

  var response = UrlFetchApp.fetch('https://139b-2603-7000-2b02-e583-ed67-a38f-21ac-4427.ngrok-free.app/ai', options);
  var text = response.getContentText();
  return text;
}


function TRANSLATE(input, language) {
  if(Array.isArray(input)) {
    input = input.flat().join(", "); // Flatten the array and join values
  }

  // Define the form parameters
  var formData = {
    'prompt': input,
    'language': language,
  };

  var options = {
    'method' : 'post',
    'payload' : formData
  };

  var response = UrlFetchApp.fetch('https://139b-2603-7000-2b02-e583-ed67-a38f-21ac-4427.ngrok-free.app/translate', options);
  var text = response.getContentText();
  return text;
}
