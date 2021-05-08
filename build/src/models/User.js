"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const userSchema = new Schema({
    username: {
        type: String,
    },
    fullname: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
    },
    address: {
        type: String,
        default: "none",
    },
    city: {
        type: String,
        default: "none",
    },
    province: {
        type: String,
        default: "none",
    },
    handphone: {
        type: String,
        default: "none",
    }
}, { timestamps: { createdAt: "created_at", updatedAt: "updated_ad" } });
const User = mongoose_1.default.model('User', userSchema);
exports.User = User;
