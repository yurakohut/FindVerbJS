import {
    getElById
} from '../index'

export class Component {
    constructor(id) {
        this.$el = getElById(id);
        this.init();
    };

    init() {};

    hide() {
        this.$el.classList.add('hide');
    };
};