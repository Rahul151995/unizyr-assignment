import { Router } from 'express';
import { UserController } from './user.controller';
import { GlobalCheckErrorMiddleWare } from '../../middleware/CheckError';
import { UserValidators } from './user.validators';

class UserRouter {

    public router: Router;


    constructor() {
        this.router = Router();

        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }


    getRoutes() {

        // Get User List
        this.router.get('/user', UserController.user);

    }
    postRoutes() {

        // SIGN UP FOR THE SUPER ADMIN
        this.router.post('/signup',
            UserValidators.signup(),
            GlobalCheckErrorMiddleWare.checkError,
            UserController.signup);    

    }
    patchRoutes() { }
    deleteRoutes() { }

}

export default new UserRouter().router;