import type {Component} from "solid-js";
import {appearance, langDictionary, locale, navigate, setAppearance, setLocale} from "../../stores/preferences";
import {AppearanceMode} from "../../models/ui-models";
import { Icon } from '@iconify-icon/solid';
import * as i18n from "@solid-primitives/i18n";
import styles from './Header.module.css';

const getSelectItems = () => [
    { label: "Nederlands", value: "nl" },
    { label: "English", value: "gb" }
]

const Header: Component = () => {
    const t = i18n.translator(langDictionary);
    let selectedIndex = 0;
    const onMenuSelect = (ev: CustomEvent) => {
        if(selectedIndex !== ev.detail.value) {
            navigate()(_getPage(ev.detail.value))
            selectedIndex = ev.detail.value;
        }
    }
    const onLocaleSelect = (ev: CustomEvent) => setLocale(ev.detail.value);
    return (
        <header class={styles.Header}>
            <div class={styles.Prefix}>
                <Icon class={styles.PrefixIcon} inline icon="material-symbols:bar-chart-rounded" />
                <h1>Eurovision-playlists.com</h1>
            </div>
            <div class={styles.Center}>
                <vaadin-tabsheet className={styles.MenuSheet}>
                    <vaadin-tabs slot="tabs" selected={selectedIndex} on:selected-changed={(ev: CustomEvent) => onMenuSelect(ev)}>
                        <vaadin-tab>
                            <Icon inline icon="material-symbols:home"/>
                            {t("mainMenu.home")}
                        </vaadin-tab>
                        <vaadin-tab>
                            <Icon inline icon="material-symbols:queue-music-rounded"/>
                            {t("mainMenu.playlists")}
                        </vaadin-tab>
                        <vaadin-tab>
                            <Icon inline icon="material-symbols:artist"/>
                            {t("mainMenu.artists")}
                        </vaadin-tab>
                    </vaadin-tabs>
                </vaadin-tabsheet>
            </div>
            <div class={styles.Suffix}>
                <vaadin-select items={getSelectItems()} value={locale()} no-vertical-overlap on:value-changed={onLocaleSelect}>
                    <Icon slot="prefix" class={styles.MenuIcon} inline icon={`flag:${locale()}-4x3`}/>
                </vaadin-select>
                <vaadin-button theme="secondary" onClick={_onAppearanceChange}>
                    <Icon class={styles.MenuIcon} inline icon={appearance() === AppearanceMode.LIGHT ? 'material-symbols:light-mode' : 'material-symbols:dark-mode'}/>
                    <span>{appearance() === AppearanceMode.LIGHT ? 'Light' : 'Dark'}</span>
                </vaadin-button>
            </div>
        </header>
    )
}

function _getPage(index: number): string {
    switch (index) {
        case 1:
            return "/random-artist";
        case 2:
            return "/about";
        default:
            return "/";
    }
}

function _onAppearanceChange(ev: Event) {
    const newValue = appearance() === AppearanceMode.LIGHT ? AppearanceMode.DARK : AppearanceMode.LIGHT;
    document.documentElement.setAttribute('theme', newValue === AppearanceMode.LIGHT ? 'light' : 'dark');
    setAppearance(newValue);
}

export default Header;