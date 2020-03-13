import {
    Component
} from '../core/component'
import {
    getElById
} from '..';

export class HeaderComponent extends Component {
    constructor(id) {
        super(id);
    };

    init() {
        this.searchPage = getElById('search-section');
        const btn = this.$el.querySelector('.js-header-start');
        btn.addEventListener('click', buttonHandler.bind(this));
        if (sessionStorage.getItem('visited')) {
            this.hide();
            this.searchPage.classList.remove('hide');
        }
    };
};

function buttonHandler() {
    sessionStorage.setItem('visited', JSON.stringify(true));
    this.hide();
    this.searchPage.classList.remove('hide');
};