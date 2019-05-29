import Component from './Component.js';

class AirbenderChar extends Component {

    renderTemplate() {
        const char = this.props.char;
        return /*html*/`
            <li>
                <h2>${char.name}</h2>
                <img src="${char.photoUrl}">
            </li>
        `;
    }
}

export default AirbenderChar;