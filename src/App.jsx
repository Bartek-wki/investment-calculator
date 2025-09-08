import { useState } from "react"
import InvestmentPanel from "./components/InvestmentPanel"

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
    </>
  )
}

export default App
