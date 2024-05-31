import {check, validationResult } from 'express-validator'
import { Request, Response, NextFunction } from 'express';

export let validatorParams = [
    check('email').isEmail(),
    check('password').isLength({ min: 8, max: 15}),
    check('name').isLength({ min: 1, max: 150}).isString(),
    check('lastName').isLength({ min: 1, max: 150}).isString(),
    check('phoneNumber').isLength({min:10, max:10}).isString(),
    check('age').isNumeric(),
    check('city').isLength({min:7, max:80}).isString(),
    check('country').isLength({min:2, max:80}).isString(),
    check('document').isLength({min:10, max:10}).isString(), 
];

export function validator(req: Request, res:Response, next:NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}
