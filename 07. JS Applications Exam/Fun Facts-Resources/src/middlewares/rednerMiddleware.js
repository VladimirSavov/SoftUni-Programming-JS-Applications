import { html } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigationView.js';

const headerElement = document.querySelector('.header-navigation');

export const renderNavigation = (ctx, next) => {


    render(navigationView(ctx), headerElement)
    next();
}