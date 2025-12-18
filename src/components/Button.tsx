interface ButtonProps {
    onClick: () => void;
    subtitle: string;
    icon?: string,
}

export function Button({ onClick, subtitle, icon }: ButtonProps) {
    return (
        <button className="button" onClick={onClick}>
            {icon && (<img src={icon} alt="Icon" className="image" />)}
            {subtitle}
        </button>
    );
};

export function IconButton({ onClick, icon }: { onClick: () => void; icon: string }) {
    return (
        <button className="icon-button" onClick={onClick}>
            <img src={icon} alt="Icon" className="image" />
        </button>
    );
}

export default Button;