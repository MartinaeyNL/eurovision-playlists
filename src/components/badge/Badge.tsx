import type {Component} from "solid-js";
import styles from "./Badge.module.css";
import {css} from "solid-styled-components";

interface BadgeProps {
    label?: string;
    slot?: string;
    color?: string;
}

const getBadgeColors = (color: string) => css({
    background: `var(--escp-${color}-light)`,
    color: `var(--escp-${color}-dark)`
})

const Badge: Component<BadgeProps> = (props: any) => {
    console.log(props);
    return (
        <span slot={props.slot} class={`${styles.Badge} ${getBadgeColors(props.color)}`}>{props.label}</span>
    )
}

export default Badge;