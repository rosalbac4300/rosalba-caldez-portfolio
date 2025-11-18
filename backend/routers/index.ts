import { RouterRegistration } from '../common/base-router.js';
import CollectionController from '../controllers/collections.controller.js';
import CollectionRouter from './collections.router.js';
import CollectionService from '../services/collection.service.js';

const collectionService = new CollectionService();

const collectionController = new CollectionController(collectionService);

const collectionRouter = new CollectionRouter(collectionController);

export const routerRegistry: RouterRegistration[] = [
	{ basePath: '/collections', router: collectionRouter.GetRouter() },
];
