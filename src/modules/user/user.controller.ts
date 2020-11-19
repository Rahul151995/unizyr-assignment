import User from './user.modal';
import { signupObj } from '../../utils/Helper';
import { Picker } from '../../utils/Picker';
import Address from '../address/address.modal'


export class UserController {


    static async signup(req, res, next) {
        let d = req.body;
        let data = Picker.objPicker(d, signupObj);
        try {
            let address = d.address;
            const newAddress = new Address(address);
            data['address'] = newAddress;
            let user = await Promise.all([new User(data).save(), newAddress.save()]);
            res.send(user);

        } catch (error) {
            next(error);
        }
    }

    static async user(req, res, next) {
        try {
            let users = await User.find({}).populate('address');
            res.send(users);
        } catch (error) {
            next(error);
        }
    }
}