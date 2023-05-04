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
      temperature: 0.5,
      max_tokens: 3500,
      messages: [{
        role: "user",
        content: generatePrompt(animal, day),
      }],
    });
   
    res.status(200).json({ result: completion.data.choices[0].message.content });
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
  return `Please suggest a tour itinerary for ${cdays} days in ${capitalizedAnimal}, by suggesting different attractions to go, things to do, and food to eat for lunch and dinner with recommended restaurants, in the following JSON format:
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
  ]`;
}

/*

[
    {
      "Day": {
        "attraction": "",
        "morning": {
          "activity": ""
        },
        "afternoon": {
          "lunch": "",
          "activity": ""
        },
        "evening": {
          "dinner": "",
          "activity": ""
        }
      }
    }
  ]

`I would like to travel to ${capitalizedAnimal}, please suggest an itinerary for ${cdays} days in ${capitalizedAnimal} with different attractions and activities to do and different restaurants and signature dishes to eat in the following JSON format:
  [
    {
      "Day x": {
        "attraction": "",
        "morning": {
          "restaurant": "",
          "breakfast": "",
          "activity": ""
        },
        "afternoon": {
          "restaurant": "",
          "lunch": "",
          "activity": ""
        },
        "evening": {
          "restaurant": "",
          "dinner": "",
          "activity": ""
        }
      }
    }
  ]`

  `I would like to "balik kampung" to ${capitalizedAnimal}, please suggest an itinerary for ${cdays} days in ${capitalizedAnimal} with different attractions and activities to do and different restaurants and signature dishes to eat in the following JSON format:
  [
    {
      "Day x": {
        "attraction": "",
        "morning": {
          "restaurant": "",
          "breakfast": "",
          "activity": ""
        },
        "afternoon": {
          "restaurant": "",
          "lunch": "",
          "activity": ""
        },
        "evening": {
          "restaurant": "",
          "dinner": "",
          "activity": ""
        }
      }
    }
  ]`

  `I would like to travel to ${capitalizedAnimal} for Umrah, please suggest an itinerary for ${cdays} days in ${capitalizedAnimal} with different attractions and activities to do and different restaurants and signature dishes to eat in the following JSON format:
  [
    {
      "Day x": {
        "attraction": "",
        "morning": {
          "restaurant": "",
          "breakfast": "",
          "activity": ""
        },
        "afternoon": {
          "restaurant": "",
          "lunch": "",
          "activity": ""
        },
        "evening": {
          "restaurant": "",
          "dinner": "",
          "activity": ""
        }
      }
    }
  ]`

*/