import {AppearanceMode} from "../models/ui-models";

import appStyles from '../App.module.css';

export function getAppearanceStyles(appearance: AppearanceMode) {
    switch (appearance) {
        case AppearanceMode.LIGHT: {
            return appStyles.AppLight;
        }
        case AppearanceMode.DARK: {
            return appStyles.AppDark;
        }
    }
}