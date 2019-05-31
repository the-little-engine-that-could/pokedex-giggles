import Component from './Component.js';
import hashStorage from './hash-storage.js';

class Filter extends Component {
    render() {
        const dom = this.renderDOM();
        const form = dom.querySelector('form');
        
        const filter = {
            type: ''
        };

        form.addEventListener('input', () => {
            const filterObj = new FormData(form);
            filter.type = filterObj.get('type');

            hashStorage.set({ type: filter.type });
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <section>
                <form>
                    <label>Filter By:
                        <select name="type">
                            <option value="normal">Normal</option>
                            <option value="fighting">Fighting</option>
                            <option value="flying">Flying</option>
                            <option value="poison">Poison</option>
                            <option value="ground">Ground</option>
                            <option value="rock">Rock</option>
                            <option value="bug">Bug</option>
                            <option value="ghost">Ghost</option>
                            <option value="steel">Steel</option>
                            <option value="fire">Fire</option>
                            <option value="water">Water</option>
                            <option value="grass">Grass</option>
                            <option value="electric">Electric</option>
                            <option value="psychic">Psychic</option>
                            <option value="ice">Ice</option>
                            <option value="dragon">Dragon</option>
                            <option value="dark">Dark</option>
                            <option value="fairy">Fairy</option>
                        </select>
                    </label>
                </form>
            </section>
        `;
    }
}

export default Filter;