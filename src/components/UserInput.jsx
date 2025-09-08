export default function UserInput({label, value, index, onChange}) {
    return (
        <div>
            <label htmlFor={`invest-value-${index}`}>{label}</label>
            <input id={`invest-value-${index}`} type="number" required value={value} onChange={(e)=>onChange(index, e.target.value)}/>
        </div>
    )
}