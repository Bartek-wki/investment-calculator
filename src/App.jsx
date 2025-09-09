import { useState } from "react"
import InvestmentPanel from "./components/InvestmentPanel"
import Results from "./components/Results"
import { calculateInvestmentResults } from "./util/investment"

const initialInvestmentValues = [
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
  const [investmentValues, setInvestmentValues] = useState(initialInvestmentValues)
    
  return (
    <>
      <InvestmentPanel investmentValues={investmentValues} setInvestmentValues={setInvestmentValues} />
      <Results investmentValues={investmentValues} />
    </>
  )
}

export default App
