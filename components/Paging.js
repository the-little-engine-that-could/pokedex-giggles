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

        const currentPage = getCurrentPage();
        const perPage = 20;
        const totalCount = this.props.totalCount;

        // if(!totalCount) {
        //     return /*html*/ `
        //         <p>SUCKS TO SUCK!</p>
        //     `;
        // }     
        
        const lastPage = Math.ceil(totalCount / perPage);
        console.log(lastPage);

        return /*html*/ `
            <section>
                <button class="prev" ${currentPage === 1 ? 'disabled' : ''}>⮐</button>
                <span>Page x of y</span>
                <button class="next" ${currentPage === lastPage ? 'disabled' : ''}>⮑</button>
            </section>
        `;
        

    }
}

export default Paging;