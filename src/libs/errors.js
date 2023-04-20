export default function handleErrors(code) {
  let error;
  
  switch (code) {
    case 401:
      error = "Authorization failed. Please ensure you have a valid API key.";
      break;
      
    case 404:
      error = "No results were found. Please try again.";
      break;
      
    case 429:
      error = "Server busy. Please try again.";
      break;
    
    case 500:
        error = "Something went wrong.";
    break;
      
    default:
      error = "An error occurred, our apologies, please try again later";
      break;
  }
  
  return new Error(error);
}