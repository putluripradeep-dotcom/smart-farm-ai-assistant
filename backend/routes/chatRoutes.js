const express = require("express");
const OpenAI = require("openai");

const router = express.Router();
const openai = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;

router.post("/ask", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ message: "Please provide a farming question." });
  }

  if (!openai) {
    let answer = "For healthy crop growth, keep soil moisture stable, avoid overwatering, and apply balanced fertilizer based on crop stage. Check your field regularly for pest activity and use neem oil or recommended treatment when needed.";

    if (question.toLowerCase().includes("tomato")) {
      answer = "Tomatoes prefer well-drained soil, steady watering, and moderate nitrogen. Use compost and a balanced fertilizer early, then support the plants and check leaves for fungal disease.";
    } else if (question.toLowerCase().includes("rice")) {
      answer = "Rice needs shallow standing water during early stages and consistent nutrient management. Monitor for leaf blast and keep field drains clear for healthy growth.";
    } else if (question.toLowerCase().includes("pest")) {
      answer = "Use integrated pest management: inspect weekly, remove affected leaves, encourage natural predators, and apply approved pesticides only when threshold levels are high.";
    }

    return res.json({ answer, mock: true });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a smart farming assistant focused on crop health, irrigation, fertilizer planning, weather-aware advice, and pesticide safety. Answer in practical, simple language."
        },
        {
          role: "user",
          content: question
        }
      ]
    });

    res.json({ answer: completion.choices[0].message.content, mock: false });
  } catch (error) {
    res.status(500).json({ message: "AI service failed. Please try again later." });
  }
});

module.exports = router;
