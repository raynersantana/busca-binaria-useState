import "./styles.css";

export default function App() {
  let i = 1;

  const increment = () => {
    i = i + 1;
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
