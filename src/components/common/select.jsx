const Select = ({name, label, options, errorMessage, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select className="form-control" id={name} name={name}>
                <option>""</option>
                {options.map((option) => (
                    <option key={option._id} value={option._id}>
                        {option.name}
                    </option>
                ))}
            </select>
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        </div>
    );
}

export default Select;
