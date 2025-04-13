import type {Component} from "solid-js";
import {Icon} from "@iconify-icon/solid";

const SearchContainer: Component = () => {
    return (
        <vaadin-text-field placeholder="Search">
            <Icon slot="prefix" inline icon="material-symbols:search" />
        </vaadin-text-field>
    )
}

export default SearchContainer;