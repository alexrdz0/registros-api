import {Router} from 'express';
import * as fileController from '../controllers/files.controller';
import {authJwt} from '../middlewares'
const router = Router();

router.post('/', fileController.addFile);

export default router;