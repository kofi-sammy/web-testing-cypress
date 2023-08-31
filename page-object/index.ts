import {Page} from '@playwright/test';

import connectionPages,{LoginPages} from './connection';
import infoMessagePages,{ ErrorPages } from './info-message';

export interface Pages extends LoginPages, ErrorPages {};

export default (page: Page): Pages => ({
  ...connectionPages(page),
  ...infoMessagePages(page),
})