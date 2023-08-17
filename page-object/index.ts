import {Page} from '@playwright/test';

import connectionPages,{LoginPages} from './connection';

export interface Pages extends LoginPages {};

export default (page: Page): Pages => ({
  ...connectionPages(page),
})