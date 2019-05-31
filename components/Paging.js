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

        // check yourself before you wreck yourself - lili

        const currentPage = getCurrentPage();
        const perPage = 20;
        const totalCount = this.props.totalCount;
        
        const lastPage = Math.ceil(totalCount / perPage);

        return /*html*/ `
            <section>
                <button class="prev" ${currentPage === 1 ? 'disabled' : ''}>⮐</button>
                <span>${currentPage} of ${lastPage}</span>
                <button class="next" ${currentPage === lastPage ? 'disabled' : ''}>⮑</button>
            </section>
        `;
    }
}

export default Paging;