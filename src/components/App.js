import Component from './Component.js';
import Header from './Header.js';
import AirBenderList from './AirbenderList.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);
        
        const airbenderList = new AirBenderList();
        main.appendChild(airbenderList.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;