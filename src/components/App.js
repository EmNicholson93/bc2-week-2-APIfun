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
        function loadChar() {
            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);
            let type = '';

            if(searchParams.get('allies')) {
                type = 'allies';
            } else if(searchParams.get('enemies')) {
                type = 'enemies';
            }

            const frenemy = searchParams.get(type);

            loading.update({ loading: true });

            api.getChar(frenemy, type)
                .then(chars => {
                    airbenderList.update({ chars });
                })

                .finally(() => {
                    loading.update({ loading: false });
                });
        }

        loadChar();

        window.addEventListener('hashchange', () => {
            loadChar();
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