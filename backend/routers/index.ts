import { RouterRegistration } from '../common/base-router.js';
import CollectionController from '../controllers/collections.controller.js';
import CollectionRouter from './collections.router.js';

const collectionController = new CollectionController();

const collectionRouter = new CollectionRouter(collectionController);

export const routerRegistry: RouterRegistration[] = [
	{ basePath: '/collections', router: collectionRouter.GetRouter() },
];
