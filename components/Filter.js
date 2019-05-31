import Component from './Component.js';
import hashStorage from './hash-storage.js';
import TypeSelect from './TypeSelect.js';

class Filter extends Component {
    render() {
        const dom = this.renderDOM();
        const form = dom.querySelector('form');
        const typeSelect = new TypeSelect();
        console.log('hi from filterjs', typeSelect);

        form.appendChild(typeSelect.render());
        console.log(form);
        
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
                    <label>Filter By:</label>
                </form>
            </section>
        `;
    }
}

export default Filter;