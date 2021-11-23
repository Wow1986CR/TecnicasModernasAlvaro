import InputsPage from '../pageobjects/inputs.page';

describe('My Input Form', () => {
    beforeAll(async function(){
        console.log('Executed before all its.');
    });
    beforeEach(async function(){
        console.log('Executed before every it');
        await InputsPage.open('inputs');
    });
    afterAll(async function(){
        console.log('Executed after all its.');
    });
    afterEach(async function(){
        console.log('Executed after every it');
        await InputsPage.open('inputs');
    });
    it('Should open the input form', async () => {
        console.log('first test inputs.page');
        await expect(InputsPage.getTitle).toHaveTextContaining('Inputs');
    });
    it('Should open the input form for numbers', async () => {
        console.log('second test inputs.page');
        await expect(InputsPage.getSubTitle).toHaveTextContaining('Number');
    });
    it('Should be able to input a number', async () => {
        await InputsPage.typeValue('1');
        expect(InputsPage.getInput).toHaveValue('1');
    })
});