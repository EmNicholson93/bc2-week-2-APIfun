import Component from './Component.js';

class AirbenderChar extends Component {

    renderTemplate() {
        const char = this.props.char;

        const allyLink = new URLSearchParams();
        allyLink.set('allies', char.name);

        const enemyLink = new URLSearchParams();
        enemyLink.set('enemies', char.name);

        if(char.photoUrl) {
            return /*html*/ `<li class="char">
                <h2>${char.name}</h2>
                <img src="${char.photoUrl}">
                <p><a href="#${allyLink.toString()}">Allies</a></p>
                <p><a href="#${enemyLink.toString()}">Enemies</a></p>
            </li>
            `;
        }
        return /*html*/`
            <li class="char">
                <h2>${char.name}</h2>
                <img src="./assets/placeholder.jpg">
                <p><a href="#${allyLink.toString()}">Allies</a></p>
                <p><a href="#${enemyLink.toString()}">Enemies</a></p>
            </li>
        `;
    }
}

export default AirbenderChar;