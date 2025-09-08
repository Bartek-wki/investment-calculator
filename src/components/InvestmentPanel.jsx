import UserInput from "./userInput"

export default function InvestmentPanel({investmentValues, setInvestmentValues}) {
    
    const handleInvestmentValueChange = (index, newValue) => {
        setInvestmentValues(prevInvestmentValues => {
            const updatedinvestmentValues = [...prevInvestmentValues]
            updatedinvestmentValues[index].value = newValue   
            
            return updatedinvestmentValues
        })
    }

    return (
        <section id="user-input" className="input-group">
            {investmentValues.map((investmentValue, index) => (
                <UserInput 
                    key={index} 
                    label={investmentValue.label} 
                    value={investmentValue.value} 
                    index={index} 
                    onChange={handleInvestmentValueChange}
                />
            ))}
        </section>
    )
}