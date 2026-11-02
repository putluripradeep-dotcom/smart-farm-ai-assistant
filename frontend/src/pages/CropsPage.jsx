const crops = [
  { name: 'Rice', stage: 'Growing', health: 'Good', area: '2.4 acres' },
  { name: 'Tomato', stage: 'Flowering', health: 'Moderate', area: '1.1 acres' },
  { name: 'Maize', stage: 'Harvest Ready', health: 'Excellent', area: '3.0 acres' },
  { name: 'Cotton', stage: 'Disease Check', health: 'Watch', area: '1.8 acres' }
];

export default function CropsPage() {
  return (
    <div className="card">
      <h2>Crop Records</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Crop</th>
            <th>Growth Stage</th>
            <th>Health</th>
            <th>Area</th>
          </tr>
        </thead>
        <tbody>
          {crops.map((crop) => (
            <tr key={crop.name}>
              <td>{crop.name}</td>
              <td><span className="badge">{crop.stage}</span></td>
              <td>{crop.health}</td>
              <td>{crop.area}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
