import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';

const manyOptions = error({ text: "Too many matches found. Please enter a more specific query", animation: 'fade', hide: true, delay: 2000 });

const noResult = error({ text: "No results found. Please enter another query", animation: 'fade', hide: true, delay: 2000 });

export default {manyOptions, noResult}