"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = __importDefault(require("mysql"));
var mysqlConnection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'limsm'
});
mysqlConnection.connect();
exports.default = mysqlConnection;
