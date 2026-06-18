// Button.jsx — Reusable button with primary / secondary variants

const Button = ({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  type = 'button',
  loading = false,
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? 'Please wait…' : children}
    </button>
  );
};

export default Button;
