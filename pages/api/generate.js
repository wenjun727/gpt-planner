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
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(animal, day),
      temperature: 0,
      max_tokens: 2700,
   //   messages: [{
    //    role: "user",
     //   content: generatePrompt(animal, day),
    //  }],
    });
   
    res.status(200).json({ result: completion.data.choices[0].text});
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
  return `Give me a ${cdays}-days tour itinerary for ${capitalizedAnimal}, in a JSON format:
  [
    {
      "Day": {
        "09:00 am": {
           "morning activity": "",
           "place": "",
           "comment": ""
	},
        "12:00 pm": {
           "lunch": "",
           "place": "",
           "comment": ""
	},
        "03:00 pm": {
           "afternoon activity": "",
           "place": "",
           "comment": ""
	},
        "07:00 pm": {
           "dinner": "",
           "place": "",
           "comment": ""
	},
        "09:00 pm": {
           "evening/night activity": "",
           "place": "",
           "comment": ""
	}
      }
    }
  ]

Conditions as below:
  1. Time: 12-hour format: "hh:mm a".
  2. Activity: Must include lunch at 12 pm and dinner at 7pm in different restaurants, exploring popular attractions places, etc.
  3. Place: Location name for the activity, could be a restaurant name or any attraction name.
  4. Comment: Elaborate each activity with an additional comment like what to do and what to eat (suggest only halal food).`;
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