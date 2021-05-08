"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const EmailValidator = __importStar(require("email-validator"));
class auth {
    constructor() {
        dotenv_1.default.config();
    }
    static register(req, res, next) {
        const emailValidate = EmailValidator.validate(req.body.email);
        if (emailValidate == true) {
            const newUser = new User_1.User({
                username: req.body.username,
                fullname: req.body.fullname,
                email: req.body.email,
                password: bcrypt_1.default.hashSync(req.body.password, 10),
            });
            newUser
                .save()
                .then((savedUser) => {
                res.status(201).json({
                    message: "Created User Data Success",
                    data: savedUser,
                });
            })
                .catch((err) => {
                next(err);
            });
        }
        else {
            throw { name: "Email_Fail" };
        }
    }
    static login(req, res, next) {
        User_1.User.findOne({ email: req.body.email })
            .then((result) => {
            if (!result) {
                return next({ name: "Email_and_Password" });
            }
            let passwordIsValid = bcrypt_1.default.compareSync(req.body.password, result.password);
            if (!passwordIsValid) {
                return next({ name: "Email_and_Password" });
            }
            const secretKey = process.env.SECRET_KEY;
            let token = jsonwebtoken_1.default.sign({ id: result.id }, secretKey, { expiresIn: '24hr', });
            res.status(200).json({
                message: "Login Success",
                data: result,
                AccessToken: token,
            });
        })
            .catch((err) => {
            next(err);
        });
    }
}
exports.default = auth;
