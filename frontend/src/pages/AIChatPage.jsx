import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export default function AIChatPage() {
  const [question, setQuestion] = useState('How should I manage tomato plants in summer?');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'I can help with crop care, pests, irrigation, and fertilizer advice.' }
  ]);

  const askAssistant = async () => {
    const userMessage = { sender: 'user', text: question };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post(`${API_URL}/chat/ask`, { question });
      setMessages((prev) => [...prev, { sender: 'bot', text: response.data.answer }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Use balanced irrigation, good spacing, and monitor disease signs. Avoid excess watering in hot conditions.' }]);
    }
  };

  return (
    <div className="card">
      <h2>AI Farming Assistant</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="field-group">
        <textarea value={question} onChange={(e) => setQuestion(e.target.value)} rows={4} />
      </div>

      <button className="primary-btn" onClick={askAssistant}>Ask AI</button>
    </div>
  );
}
