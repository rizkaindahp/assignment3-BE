"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
class userController {
    static updateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUser = req.params.userId;
            const { username, fullname, address, city, province, handphone } = req.body;
            const updatedData = { username, fullname, address, city, province, handphone };
            for (const key in updatedData) {
                if (!updatedData[key]) {
                    delete updatedData[key];
                }
            }
            try {
                const editUser = yield User_1.User.findByIdAndUpdate(idUser, updatedData, { new: true });
                if (!editUser) {
                    res.status(200).json({ success: false, message: "Failed!",
                    });
                }
                res.status(200).json({ success: true, msg: "Updated User Success", data: editUser, });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static detailUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUser = req.params.userId;
            try {
                const dataUser = yield User_1.User.findById(idUser);
                res.status(200).json({ msg: "User Data Found", data: dataUser });
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = userController;
