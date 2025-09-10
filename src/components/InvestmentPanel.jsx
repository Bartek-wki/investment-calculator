import UserInput from "./userInput"

export default function InvestmentPanel({investmentInputs, setInvestmentInputs}) {
    
    const handleInvestmentValueChange = (index, newValue) => {
        setInvestmentInputs(prevInvestmentInputs => {
            const updatedinvestmentInputs = [...prevInvestmentInputs]
            updatedinvestmentInputs[index].value = +newValue   
            
            return updatedinvestmentInputs
        })
    }

    return (
        <section id="user-input" className="input-group">
            {investmentInputs.map((investmentInput, index) => (
                <UserInput 
                    key={index} 
                    label={investmentInput.label} 
                    value={investmentInput.value} 
                    index={index} 
                    onChange={handleInvestmentValueChange}
                />
            ))}
        </section>
    )
}