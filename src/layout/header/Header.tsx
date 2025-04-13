import type {Component} from "solid-js";
import {appearance, langDictionary, locale, setAppearance, setLocale} from "../../stores/preferences";
import {AppearanceMode} from "../../models/ui-models";
import { Icon } from '@iconify-icon/solid';

import styles from './Header.module.css';
import * as i18n from "@solid-primitives/i18n";

function createMenuItem(icon: string, text: string) {
    return (
        <div>
            <Icon class={styles.MenuIcon} inline icon={icon} />
            <span>{text}</span>
        </div>
    )
}

const getSelectItems = () => [
    { label: "Nederlands", value: "nl" },
    { label: "English", value: "gb" }
]

const Header: Component = () => {
    const t = i18n.translator(langDictionary);
    return (
        <header class={styles.Header}>
            <div class={styles.Prefix}>
                <Icon class={styles.PrefixIcon} inline icon="material-symbols:bar-chart-rounded" />
                <h1>Eurovision-playlists.com</h1>
            </div>
            <div class={styles.Center}>

            </div>
            <div class={styles.Suffix}>
                <vaadin-tabsheet class={styles.MenuSheet}>
                    <vaadin-tabs slot="tabs" selected={0}>
                        <vaadin-tab>{t("mainMenu.home")}</vaadin-tab>
                        <vaadin-tab>{t("mainMenu.about")}</vaadin-tab>
                    </vaadin-tabs>
                    <div slot="suffix" class={styles.SuffixContainer}>
                        <vaadin-select items={getSelectItems()} value={locale()} no-vertical-overlap on:value-changed={_onLocaleSelect}>
                            <Icon slot="prefix" class={styles.MenuIcon} inline icon={`flag:${locale()}-4x3`} />
                        </vaadin-select>
                        <vaadin-button theme="secondary" onClick={_onAppearanceChange}>
                            <Icon class={styles.MenuIcon} inline icon={appearance() === AppearanceMode.LIGHT ? 'material-symbols:light-mode' : 'material-symbols:dark-mode'} />
                            <span>{appearance() === AppearanceMode.LIGHT ? 'Light' : 'Dark'}</span>
                        </vaadin-button>
                    </div>
                </vaadin-tabsheet>
            </div>
        </header>
    )
}

function _onLocaleSelect(ev: CustomEvent) {
    console.debug(ev);
    setLocale(ev.detail.value);
}

function _onItemSelected(ev: CustomEvent) {

    // When changing language...
    if(ev.detail.value.lang) {
        setLocale(ev.detail.value.lang);
    }

    else if(ev.detail.value.id === "appearance") {
        const oldValue = ev.detail.value.appearance;
        const newValue = oldValue === AppearanceMode.LIGHT ? AppearanceMode.DARK : AppearanceMode.LIGHT;
        setAppearance(newValue);
    }
}

function _onAppearanceChange(ev: Event) {
    const newValue = appearance() === AppearanceMode.LIGHT ? AppearanceMode.DARK : AppearanceMode.LIGHT;
    document.documentElement.setAttribute('theme', newValue === AppearanceMode.LIGHT ? 'light' : 'dark');
    setAppearance(newValue);
}

export default Header;