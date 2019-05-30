import Component from './Component.js';
import hashStorage from './hash-storage.js';

function getCurrentPage() {
    const queryProps = hashStorage.get();
    let page = queryProps.page ? parseInt(queryProps.page) : 1;
    return page;
}

class Paging extends Component {
    render() {
        const dom = this.renderDOM();

        const prevButton = dom.querySelector('.prev');
        const nextButton = dom.querySelector('.next');

        function updatePage(change) {
            let page = getCurrentPage();
            page += change;
            hashStorage.set({ page });
        }

        prevButton.addEventListener('click', () => {
            updatePage(-1);

        });

        nextButton.addEventListener('click', () => {
            updatePage(1);
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <section>
                <button class="prev">⮐</button>
                <span>Page x of y</span>
                <button class="next">⮑</button>
            </section>
        `;
        

    }
}

export default Paging;