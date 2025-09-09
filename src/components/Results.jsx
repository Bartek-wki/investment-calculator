import { calculateInvestmentResults, formatter } from "../util/investment.js"

export default function Results({investmentValues}) {

    const investmentObject = {
    initialInvestment: investmentValues[0].value,
    annualInvestment: investmentValues[1].value,
    expectedReturn: investmentValues[2].value,
    duration: investmentValues[3].value,
    }
    
    const resultsData = calculateInvestmentResults(investmentObject)
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment
    
    return (
        <>
            {resultsData.length > 0 &&
                <table id="result"> 
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Investment Value</th>
                            <th>Interest (Year)</th>
                            <th>Total interest</th>
                            <th>Invested capital</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultsData.map((yearData) => {
                            const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment
                            const totalAmountInvested = yearData.valueEndOfYear - totalInterest

                            return (
                                <tr key={yearData.year}>
                                    <td>{yearData.year}</td>
                                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                                    <td>{formatter.format(yearData.interest)}</td>
                                    <td>{formatter.format(totalInterest)}</td>
                                    <td>{formatter.format(totalAmountInvested)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> 
            }        
        </>

           
    )
}