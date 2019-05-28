import Component from './Component.js';

class Header extends Component {

    renderTemplate() {
        return /*html*/ `
            <Header>
                <h1>The Last Airbender Characters! are cool...?</h1>
            </Header>
        `;
    }
}

export default Header; 