import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InputsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get getTitle() {
        return $('h3');
    }

    get getSubTitle() {
        return $("//p[contains(.,'Number')]");
    }

    get getInput() {
        return $("//input[contains(@type,'number')]");
    }

    typeValue(number) {
        return this.getInput.setValue(number);
    }
}

export default new InputsPage();
