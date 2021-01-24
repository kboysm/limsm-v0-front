"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = __importStar(require("mysql"));
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'limsm'
});
mysqlConnection.connect();
exports.default = mysqlConnection;
//# sourceMappingURL=index.js.map