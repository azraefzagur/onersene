window.yerbulI18n = {
    language: 'tr',
    ready: Promise.resolve(),
    t(key, params) {
        return key;
    },
    userText(source) {
        return source;
    },
    businessText(source) {
        return source;
    },
    textLanguage() {
        return 'tr';
    },
    isUserPage() {
        return !window.location.pathname.includes('business');
    },
    async setLanguage(language) {
        this.language = language;
        document.documentElement.setAttribute('lang', language);
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        return true;
    }
};
