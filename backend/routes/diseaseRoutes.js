const express = require("express");

const router = express.Router();

router.post("/predict", (req, res) => {
  const { imageName, cropName } = req.body;

  const diseaseMap = {
    tomato: {
      disease: "Early blight",
      confidence: 92,
      recommendation: "Remove infected leaves, improve airflow, and apply a copper-based fungicide. Avoid overhead watering."
    },
    rice: {
      disease: "Leaf blast",
      confidence: 88,
      recommendation: "Use resistant seed varieties, reduce excess nitrogen, and apply recommended fungicide when symptoms spread."
    },
    maize: {
      disease: "Leaf spot",
      confidence: 90,
      recommendation: "Rotate crops, keep field dry, and use a suitable fungicide treatment after diagnosis."
    }
  };

  const crop = (cropName || "tomato").toLowerCase();
  const result = diseaseMap[crop] || {
    disease: "Healthy leaf pattern",
    confidence: 84,
    recommendation: "No major disease signal found. Keep field monitoring and continue regular crop care."
  };

  res.json({
    imageName: imageName || "sample-leaf.jpg",
    cropName: cropName || "Tomato",
    ...result,
    mock: true
  });
});

module.exports = router;
