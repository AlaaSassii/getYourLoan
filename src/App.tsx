import LoanCard from "./component/loanCard"
import './scss/main.scss'
function App() {
  return (
    <div className="app">
      <p className="loan__title">let's plan your <b>loan</b>. </p>
      <LoanCard />
    </div>
  )
}

export default App
