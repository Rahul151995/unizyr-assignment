
import { body, query } from 'express-validator'
import User from './user.modal';

export class UserValidators {


    static signup() {
        return [
            body('email', 'Email is Required').isEmail()
                .custom((email, { req }) => {
                    return User.findOne({ email: email }).then((user) => {
                        if (user) {
                            throw new Error('User Already Exist')
                        } else {
                            return true;
                        }
                    });
                }),
            body('name', 'Name is required').isString(),
            body('mobile', 'Mobile is required').isString()
            .isLength({ min: 0, max: 10 }).withMessage('Enter Valid Mobile No of 10 Digits'),
            body('address.houseFlatNo', 'House/Flat No. is Required').isString(),
            body('address.addressLine1', 'Address Line 1 is Required').isString(),
            body('address.addressLine2', 'Address Line 2 is Required').isString(),
            body('address.city', 'City is Required').isString(),
            body('address.state', 'State is Required').isString(),
            body('address.pinCode', 'Pin Code is Required').isString(),
        ]
    }

}


