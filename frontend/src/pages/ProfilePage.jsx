export default function ProfilePage() {
  const user = JSON.parse(localStorage.getItem('smartFarmUser') || '{"name":"Demo Farmer","farmName":"Green Valley Farm","language":"English","location":"Hyderabad"}');

  return (
    <div className="card">
      <h2>Farmer Profile</h2>
      <div className="grid grid-2">
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Farm Name:</strong> {user.farmName}</p>
          <p><strong>Location:</strong> {user.location}</p>
        </div>
        <div>
          <p><strong>Language:</strong> {user.language}</p>
          <p><strong>Soil Type:</strong> Loamy Soil</p>
          <p><strong>Farm Size:</strong> 8 acres</p>
        </div>
      </div>
    </div>
  );
}
