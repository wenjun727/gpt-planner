import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const animal = req.body.animal || '';
  if (animal.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter any destination",
      }
    });
    return;
  }

  const day = req.body.day || '';
  if (day == 0) {
    res.status(400).json({
      error: {
        message: "Please enter no. of days",
      }
    });
    return;
  }

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
    //  prompt: generatePrompt(animal, day),
      temperature: 0.5,
      max_tokens: 3500,
      messages: [{
        role: "user",
        content: generatePrompt(animal, day),
      }],
    });
   
    res.status(200).json({ result: completion.data.choices[0].message.content});
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(animal, day) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
    const cdays = day;
  return `I need a ${cdays}-days tour itinerary for ${capitalizedAnimal}, please suggest at least 5 activities to do per day with time and duration (how much time spent for each activity). Here're the conditions:
  1. The time could be random as long as it makes sense and should be UTC+8 12-hour format.
  2. The duration should be at least 30 minutes and not more than 3 hours for each activity.
  3. The activities could be anything common in a tour like checking-in hotels, having breakfast, lunch and dinner in various restaurants, exploring or visiting popular attractions places, etc, and must include the location name (hotel/restaurant/attraction/etc).
  4. Elaborate each activity with an additional comment like what to do/play and what to eat (suggest only halal food, I'm a Muslim).
  
  Please provide this tour itinerary in the following JSON format:
  [
    {
      "Day": {
        "time": "",
        "duration": "",
        "activity": "",
        "comment": ""
      }
    }
  ]`;
}

/*

`Please suggest a tour itinerary for ${cdays} days in ${capitalizedAnimal}, by suggesting different attractions to go everyday, things to do, and halal food (muslim-friendly) to eat with recommended restaurants nearby within a 2km radius of the attraction location, in the following JSON format. Please give me a variety of sentences between 5 to 12 words, except the "attraction" object, which should be the location name:
  [
    {
      "Day": {
        "attraction": "",
        "morning activity": "",
        "lunch": "",
        "afternoon activity": "",
        "dinner": "",
        "evening activity": ""
      }
    }
  ]`

*/