export default function DiseasePage() {
  return (
    <div className="card">
      <h2>Disease Detection</h2>
      <div className="field-group">
        <label>Upload crop leaf image</label>
        <input type="file" accept="image/*" />
      </div>

      <button className="primary-btn">Detect Disease</button>

      <div className="alert" style={{ marginTop: '1rem' }}>
        <strong>Prediction:</strong> Early blight<br />
        <strong>Confidence:</strong> 92%<br />
        <strong>Recommendation:</strong> Remove infected leaves, improve airflow, and use copper-based fungicide.
      </div>
    </div>
  );
}
