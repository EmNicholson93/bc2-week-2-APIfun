import Component from './Component.js';

class AirbenderChar extends Component {

    renderTemplate() {
        const char = this.props.char;
        if(char.photoUrl) {
            return /*html*/ `<li class="char">
                <h2>${char.name}</h2>
                <img src="${char.photoUrl}">
            </li>
            `;
        }
        return /*html*/`
            <li class="char">
                <h2>${char.name}</h2>
                <img src="./assets/placeholder.jpg">
            </li>
        `;
    }
}

export default AirbenderChar;