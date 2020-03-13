import * as THREE from 'vanta/vendor/three.r95.min.js';
import WAVES from 'vanta/dist/vanta.waves.min'
import {
    SearchComponent
} from './components/search.component';
import {
    HeaderComponent
} from './components/header.component';

export const arrayOfProperties = ['Definitions', 'Type Of', 'Synonyms', 'Antonyms', 'Examples']
export const getElById = id => document.getElementById(id)

const search = new SearchComponent('search-section')
const header = new HeaderComponent('main-page')

VANTA.WAVES({
    el: '#main-page', // element selector string or DOM object reference
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x1a1a1b,
    shininess: 27.00,
    waveHeight: 40.00,
    waveSpeed: 0.30,
    zoom: 1.02,
    THREE: THREE
})