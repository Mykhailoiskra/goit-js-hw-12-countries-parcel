import API from './js/fetchCountries.js';
import getRefs from './js/getRefs.js';
import debounce from 'lodash.debounce';
import searchListTpl from './templates/searchListTpl.hbs';
import countryProfileTpl from './templates/countryProfileTpl.hbs';

const refs = getRefs();

refs.inputField.addEventListener('input', debounce(onSearch, 500),);

function onSearch(e) {
    const searchQuery = e.target.value;
    
    if (searchQuery === '') { refs.resultsOutput.innerHTML = '';} else { API.fetchCountriesByName(searchQuery).then(validator); }

}

function validator (searchResult) {
    if (searchResult.length > 10) {
    console.log('too many options');
    } else if (searchResult.length < 10 && searchResult.length > 1) {
        console.log('Ok, lets parse some options');
        renderCountriesList(searchResult);
    } else {
        console.log('Ok, one option, parse the country sheet')
        renderCountryProfile(searchResult);
    }
}

function renderCountriesList(countries) {
    const wrapper = { objects: countries };
    const countriesListMarkup = searchListTpl(wrapper);
    refs.resultsOutput.innerHTML = countriesListMarkup;
}

function renderCountryProfile(country) {
    const wrapper = country[0];
    const countryProfileMarkup = countryProfileTpl(wrapper);
    refs.resultsOutput.innerHTML = countryProfileMarkup;
}
