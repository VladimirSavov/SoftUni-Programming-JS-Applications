import page from '../../node_modules/page/page.mjs';
import { renderNavigation } from '../middlewares/rednerMiddleware';
import { homeView } from './homeView';

page(renderNavigation);

page('/', homeView);

page.start();