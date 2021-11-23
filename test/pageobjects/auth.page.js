import Page from './page';

class AuthPage extends Page {
    /**
     * define selectors using getter methods
     */
     get getTitle() {
        return $('h3');
    }
}

export default new AuthPage();