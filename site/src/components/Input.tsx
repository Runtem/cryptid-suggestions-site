interface InputProps {
    value: string;
    onChange: (newValue: string) => void;
    placeholder?: string;
    type?: string;
}

export function Input({ value, onChange, placeholder = "", type = "text" }: InputProps) {
    return (
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
    );
}

export function TextArea({ value, onChange, placeholder = "" }: Omit<InputProps, "type">) {
    return (
        <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
    );
}

export default Input;