import { useTranslation } from 'react-i18next';

const Translate = () => {
    const [t, i18n] = useTranslation("global");

    const translate = (id: string): string => {
        return t(id);
    }

    return translate;
}

export const translate = (id: string): string => {
    const translate = Translate();

    return translate(id);
}