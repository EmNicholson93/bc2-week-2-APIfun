import Component from './Component.js';

class AirbenderChar extends Component {

    renderTemplate() {
        return /*html*/`
            <li>
                <h2>name: Aang</h2>
                <img src="https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003">
            </li>
        `;
    }
}

export default AirbenderChar;