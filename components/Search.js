import Component from './Component.js';
import hashStorage from './hash-storage.js';

class Search extends Component {

    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');

        form.addEventListener('submit', event => {
            event.preventDefault();

            const pokemon = input.value;
            hashStorage.set({ pokemon, page : 1 });
        });

        function setInputFromHash() {
            const queryProps = hashStorage.get();
            input.value = queryProps.pokemon || '';
        }

        if(input.value) {
            setInputFromHash();
        } 

        window.addEventListener('hashchange', () => {
            setInputFromHash();
        });

        return form;
    }

    renderTemplate() {
        return /*html*/ ` 
            <form>
                <input name="search">
                <button>SEARCH ME</button>
            </form>
        `;
    }
}
export default Search;
