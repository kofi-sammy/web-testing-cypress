import { Page } from "@playwright/test";

import MessagePage from "./message.page";

export interface ErrorPages {
    messagePage: MessagePage,
}

export default (page: Page): ErrorPages =>({
    messagePage: new MessagePage(page),
});