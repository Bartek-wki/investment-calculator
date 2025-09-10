import { useState } from "react"
import InvestmentPanel from "./components/InvestmentPanel"
import Results from "./components/Results"
import { calculateInvestmentResults } from "./util/investment"

const initialInvestmentInputs = [
  {
    label: "initial investment",
    value: "",
  },
  {
    label: "annual investment",
    value: "",
  },
  {
    label: "expected return",
    value: "",
  },
  {
    label: "duration",
    value: "",
  },
]

function App() {
  const [investmentInputs, setInvestmentInputs] = useState(initialInvestmentInputs)
    
  return (
    <>
      <InvestmentPanel investmentInputs={investmentInputs} setInvestmentInputs={setInvestmentInputs} />
      <Results investmentInputs={investmentInputs} />
    </>
  )
}

export default App
