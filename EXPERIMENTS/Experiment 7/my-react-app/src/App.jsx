import "./App.css";

function StudentCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p><b>Roll No:</b> {props.roll}</p>
      <p><b>Branch:</b> {props.branch}</p>
      <p><b>College:</b> {props.college}</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Experiment 7: React Props</h1>
      <p className="subtitle">
        Demonstration of passing data from parent component to child component using props.
      </p>

      <div className="card-box">
        <StudentCard
          name="Anurag Jatav"
          roll="101"
          branch="ECE"
          college="ABES Engineering College"
        />

        <StudentCard
          name="Rahul Kumar"
          roll="102"
          branch="CSE"
          college="ABES Engineering College"
        />

        <StudentCard
          name="Priya Rai"
          roll="103"
          branch="IT"
          college="ABES Engineering College"
        />
      </div>
    </div>
  );
}

export default App;