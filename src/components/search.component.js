import {
    Component
} from '../core/component';
import {
    arrayOfProperties
} from '../index';
import {
    getElById
}
from '../index';
import {
    ApiService
} from './../services/api.service';
import {
    Render
} from './../core/render';


export class SearchComponent extends Component {
    constructor(id) {
        super(id);
    };

    init() {
        this.imageBlock = getElById('image-block')
        this.searchBtn = getElById('search-btn');
        this.searchBtn.addEventListener('click', searchHandler.bind(this));
        this.searchBtn.insertAdjacentHTML('afterend', Render.renderOptions(arrayOfProperties));
        this.searchInput = getElById('search-input');
        this.select = getElById('select-js');
        this.textArea = getElById('result-block');
        this.select.addEventListener('change', searchHandler.bind(this));
    };
};

function searchHandler() {
    const verb = this.searchInput.value.trim();
    const property = changeArrayToCorrectView(this.select.value);
    if (verb) {
        getVerbData.call(this, verb, property);
        getPhotoData.call(this, verb);
    }
};

//Перетворюю параметри пошуку в коректний вигляд, а саме опускаю першу літеру в нижній регістр
//і видаляю пробіли між словами
function changeArrayToCorrectView(value = 'definitions') {
    return (value.charAt(0).toLowerCase() + value.slice(1)).replace(/\s+/g, '');
};

function getVerbData(verb, property) {
    const api = new ApiService(`https://wordsapiv1.p.rapidapi.com/words/${verb}/${property}`);
    api.getVerbDataApi()
        .then(api.checkResponseStatus)
        .then(api.responseJson)
        .then(data => {
            return this.textArea.innerHTML = Render.dataExtraction(data[property], property);
        })
        .catch(err => {
            console.log(err);
            this.textArea.innerHTML = 'No results found';
        });
    return api;
};

function getPhotoData(verb) {
    const api = new ApiService(`https://pixabay.com/api/?key=15518954-36d24dcbaf11ec472a4639558&q=${verb}&image_type=photo`);
    api.getPhotoDataApi()
        .then(api.checkResponseStatus)
        .then(api.responseJson)
        .then(data => {
            let test = data.hits[0].webformatURL;
            this.imageBlock.innerHTML = '';
            this.imageBlock.insertAdjacentHTML('afterBegin', `<img src='${test}' alt=${verb}>`);
        })
        .catch(err => {
            console.log(err);
            this.imageBlock.innerHTML = '';
        });
    return api;
};