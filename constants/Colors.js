class Colors {
    static Background = () => '#0A9389';
    static Dark = () => '#031926';
    static DarkAlternate = () => '#184966';
    static Light = () => '#F4E9CD';
    static LightAlternate = () => '#BAAF91';
    static Accent = (level) => {
        switch (level) {
            case 1:
                return '#77ACA2';
            case 2:
                return '#9DBEBB';
            default:
                return '#468189';
        }
    }

    static GetThemeBasedColor = (elementType, theme) => {
        const variants = [
            { elementType: 'background', theme: 'light', color: this.Light() },
            { elementType: 'background', theme: 'dark', color: this.Dark() },
            { elementType: 'background', theme: 'default', color: this.Background() },
            { elementType: 'text', theme: 'light', color: this.Dark() },
            { elementType: 'text', theme: 'dark', color: this.Light() },
            { elementType: 'text', theme: 'default', color: this.Dark() }
        ];

        let match;

        variants.forEach((variant) => {
            if (variant.elementType === elementType && variant.theme === theme) {
                match = variant.color;
                return;
            }
        })

        return match;
    }
}

export default Colors;