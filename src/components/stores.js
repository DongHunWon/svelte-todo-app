import { writable } from 'svelte/store';
import { loadData } from './DataController.js';

export const listData = writable(loadData());