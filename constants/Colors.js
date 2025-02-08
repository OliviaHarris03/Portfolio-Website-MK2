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
}

export default Colors;