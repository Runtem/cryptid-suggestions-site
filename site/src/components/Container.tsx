interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
    return <div className={`div ${className}`}>{children}</div>;
}

export default Container;