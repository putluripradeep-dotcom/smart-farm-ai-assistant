const expenses = [
  { category: 'Seeds', amount: 3500 },
  { category: 'Fertilizer', amount: 4800 },
  { category: 'Labor', amount: 6200 },
  { category: 'Pesticide', amount: 2200 }
];

const total = expenses.reduce((sum, item) => sum + item.amount, 0);

export default function ExpensesPage() {
  return (
    <div className="card">
      <h2>Expense Calculator</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item) => (
            <tr key={item.category}>
              <td>{item.category}</td>
              <td>₹{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 style={{ marginTop: '1rem' }}>Total: ₹{total}</h3>
    </div>
  );
}
