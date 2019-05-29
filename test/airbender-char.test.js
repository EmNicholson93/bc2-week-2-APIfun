import AirbenderChar from '../src/components/AirbenderChar.js';

const test = QUnit.test;

test('renders template from data', assert => {
    //arrange
    const char = {
        name: 'Aang',
        image: 'https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003'
    };
    //act
    const airbenderChar = new AirbenderChar({ char });
    const rendered = airbenderChar.renderTemplate();
    //assert
    assert.htmlEqual(rendered, /*html*/`
    <li>
        <h2>name: Aang</h2>
        <img src="https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003">
    </li>
    `);
});