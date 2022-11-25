import "./styles.css";
var colors = "red";
var col = "green";
const box = { backgroundColor: colors, color: col };
var userName = prompt("Give me your name");
export default function App() {
  return (
    <div className="App">
      <h1 style={box}>Welcome{userName}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
