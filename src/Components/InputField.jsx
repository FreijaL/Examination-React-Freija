function InputField(props) {
    
    return (
        <> 
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                htmlFor={props.id} 
                type={props.type} 
                placeholder={props.placeholder} 
                onChange={props.onChange} 
            />
        </> 
     );
}

export default InputField;