class ScreenSizes {
    static Mobile = () => 500;
    static Tablet = () => 1100;
    static IsMobile = (screenWidth) => screenWidth <= this.Mobile();
    static IsTablet = (screenWidth) => screenWidth <= this.Tablet() && screenWidth > this.Mobile();
    static IsDesktop = (screenWidth) => screenWidth > this.Tablet();
}

export default ScreenSizes;