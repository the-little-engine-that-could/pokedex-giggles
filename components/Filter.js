import Component from './Component.js';
import hashStorage from './hash-storage.js';
import TypeOptions from './TypeOptions.js';

class Filter extends Component {
    render() {
        const dom = this.renderDOM();
        const form = dom.querySelector('form');
        const typeOptions = new TypeOptions();

        form.appendChild(typeOptions.render());
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