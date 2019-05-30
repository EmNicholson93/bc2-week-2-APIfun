import Component from './Component.js';
import AirbenderChar from './AirbenderChar.js';

class AirbenderList extends Component {

    render() {
        const list = this.renderDOM();

        this.props.chars.forEach(char => {
            const airbenderChar = new AirbenderChar({ char });
            list.appendChild(airbenderChar.render());
        });

        return list;
    }
    renderTemplate() {
        return /*html*/`
            <ul class="airbender-list">
                <li>
                </li>
            </ul>
        `;
    }
}

export default AirbenderList;