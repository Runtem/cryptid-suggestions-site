import React from "react";

interface ChipProps {
    label: string;
    icon?: string;
    style?: React.CSSProperties;
}

function withAlpha(color: Color, alpha: number): string {
    if (color.startsWith("rgb(")) {
        return color.replace("rgb(", "rgba(").replace(")", `, ${alpha})`);
    }

    if (color.startsWith("rgba(")) {
        return color;
    }

    return color;
}


interface ChipTagProps {
    id: string;
}

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

interface ChipTagClassification {
    color: Color;
    icon?: string;
    label: string;
}

export const CHIP_TAG_CLASSIFICATIONS: Record<string, ChipTagClassification> = {
    content: {
        color: "rgb(255, 255, 255)",
        label: "Content",
    },
}

export function Chip({ label, icon, style }: ChipProps) {
    return (
        <span className="chip" style={style}>
            {icon && <img src={icon} alt="Icon" className="image" />}
            {label}
        </span>
    );
}


export function ChipTag({ id }: ChipTagProps) {
    const classification = CHIP_TAG_CLASSIFICATIONS[id];

    if (!classification) {
        return <Chip label={id} />;
    }

    return (
        <Chip
            label={classification.label}
            icon={classification.icon}
            style={{
                backgroundColor: withAlpha(classification.color, 0.1),
                border: `1px solid ${classification.color}`,
            }}
        />
    );
}

export default Chip;