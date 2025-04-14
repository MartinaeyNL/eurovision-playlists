import type {Component} from "solid-js";
import {badge} from "@vaadin/vaadin-lumo-styles/badge.js";
import Badge from "../badge/Badge";

const PlaylistCard: Component = () => {
    return (
        <div>
            <style>${badge.cssText}</style>
            <vaadin-card theme="cover-media">
                <img slot="media" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt=""/>
                <div slot="title">Card Title</div>
                <div slot="subtitle">The Exotic North</div>
                <div>Lapland is the northern-most region of Finland and an active outdoor destination.</div>
                <Badge slot="header-suffix" label={'#2025'} color="purple" />
            </vaadin-card>
        </div>
    )
}

export default PlaylistCard;