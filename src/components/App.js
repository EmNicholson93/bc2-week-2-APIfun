import api from '../services/AirbenderApi.js';
import Component from './Component.js';
import Header from './Header.js';
import AirBenderList from './AirbenderList.js';
import Loading from './Loading.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);
        
        const airbenderList = new AirBenderList({ chars: [] });
        main.appendChild(airbenderList.render());

        const loading = new Loading({ loading: true });
        main.appendChild(loading.render());

        api.getCharacters()
            .then(chars => {
                airbenderList.update({ chars });
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                loading.update({ loading: false });
            });
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