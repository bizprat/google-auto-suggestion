const axios = require("axios");

async function generateKeywords(query) {
  try {
    const response = await axios.get(
      `https://www.google.com/complete/search?q=${query}&client=firefox`
    );
    const suggestions = response.data[1];

    if (suggestions && suggestions.length > 0) {
      console.log(`Keyword ideas for "${query}":`);
      suggestions.forEach((suggestion, index) => {
        console.log(`${index + 1}. ${suggestion}`);
      });
    } else {
      console.log(`No suggestions found for "${query}".`);
    }
  } catch (error) {
    console.error("Error fetching suggestions:", error.message);
  }
}

// Example: Generate keyword ideas for "programming languages"
generateKeywords("happy birthday quote for girlfriend f");
