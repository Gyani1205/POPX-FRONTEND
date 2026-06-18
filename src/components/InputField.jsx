// InputField.jsx — Floating-label input with validation support

const InputField = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder = '',
  required = false,
  error = '',
  autoComplete,
}) => {
  return (
    <div className="input-wrapper">
      <label className={`input-label${error ? ' has-error' : ''}`}>
        {label}{required && <span style={{ color: '#E53935' }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`input-field${error ? ' error' : ''}`}
      />
      {error && <p className="input-error-msg">{error}</p>}
    </div>
  );
};

export default InputField;
