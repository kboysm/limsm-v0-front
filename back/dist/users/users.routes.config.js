"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_routes_config_1 = require("../common/common.routes.config");
var User_1 = require("../entity/User");
var index_1 = require("../connection/index");
var typeorm_1 = require("typeorm");
var crypto_js_1 = __importDefault(require("crypto-js"));
var index_2 = __importDefault(require("../secretKey/index"));
var UsersRoutes = /** @class */ (function (_super) {
    __extends(UsersRoutes, _super);
    function UsersRoutes(app) {
        return _super.call(this, app, 'UsersRoutes') || this;
    }
    UsersRoutes.prototype.configureRoutes = function () {
        var _this = this;
        this.app.route('/users')
            .get(function (req, res) {
            index_1.myConnection.then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
                var users;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("userList");
                            return [4 /*yield*/, connection.manager.find(User_1.Users)];
                        case 1:
                            users = _a.sent();
                            res.status(200).send(users); //DB 생성 후 유저 추가 로직
                            return [2 /*return*/];
                    }
                });
            }); }).catch(function (error) {
                res.status(400).send('잘못된 요청'); //DB 생성 후 유저 추가 로직
                console.log(error);
            });
        });
        this.app.route('/users')
            .post(function (req, res) {
            res.status(200).send("List Of Users "); //DB 생성 후 유저 추가 로직
        });
        this.app.route('/signUp')
            .post(function (req, res) {
            var _a = req.body, email = _a.email, password = _a.password, name = _a.name;
            if (email && password && name) {
                var newUser_1 = new User_1.Users();
                newUser_1.email = email;
                newUser_1.password = crypto_js_1.default.scryptSync(password, index_2.default.cryptoKey, 64, { N: 1024 }).toString('hex');
                newUser_1.name = name;
                newUser_1.age = 0;
                newUser_1.address = '';
                newUser_1.createdAt = new Date();
                newUser_1.updatedAt = new Date();
                index_1.myConnection.then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
                    var user;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("signUp");
                                return [4 /*yield*/, connection.getRepository(User_1.Users).createQueryBuilder("user").where("user.email = :email", { email: newUser_1.email }).getOne()];
                            case 1:
                                user = _a.sent();
                                console.log(user);
                                if (!user) return [3 /*break*/, 2];
                                res.status(200).send('idExists');
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, typeorm_1.getConnection().createQueryBuilder().insert().into(User_1.Users).values(newUser_1).execute()];
                            case 3:
                                _a.sent();
                                res.status(200).send('signUp');
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); }).catch(function (error) {
                    res.status(400).send('signUpFail'); //DB 생성 후 유저 추가 로직
                });
            }
            // res.status(200).send( `List Of Users `) //DB 생성 후 유저 추가 로직
        });
        this.app.route('/signIn')
            .post(function (req, res) {
            var _a = req.body, email = _a.email, password = _a.password;
            if (email && password) {
                index_1.myConnection.then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
                    var cryptoPassword, user;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                cryptoPassword = crypto_js_1.default.scryptSync(password, index_2.default.cryptoKey, 64, { N: 1024 }).toString('hex');
                                console.log("signIn");
                                return [4 /*yield*/, connection.getRepository(User_1.Users).createQueryBuilder("user").where("user.email = :email", { email: email }).getOne()];
                            case 1:
                                user = _a.sent();
                                console.log(user);
                                if (user.password === cryptoPassword) {
                                    res.status(200).send('signIn');
                                }
                                else {
                                    res.status(200).send('passwordsDoNotMatch');
                                }
                                return [2 /*return*/];
                        }
                    });
                }); }).catch(function (error) {
                    res.status(405).send('signInFail'); //DB 생성 후 유저 추가 로직
                });
            }
            else {
                res.status(405).send('emailAndPasswordDoNotEnter');
            }
            // res.status(200).send( `List Of Users `) //DB 생성 후 유저 추가 로직
        });
        this.app.route('./users/:userId')
            .all(function (req, res, next) {
            next();
        })
            .get(function (req, res) {
            res.status(200).send("GET requested for id " + req.params.userId);
        })
            .post(function (req, res) {
            res.status(200).send("Post requested for id " + req.params);
        })
            // .put( (req: express.Request, res: express.Response) => {
            //     res.status(200).send(`PUT requested for id ${req.params.userId}`);
            // })
            // .patch( (req: express.Request, res: express.Response) => {
            //     res.status(200).send(`PATCH requested for id ${req.params.userId}`);
            // })
            .delete(function (req, res) {
            res.status(200).send("DELETE requested for id " + req.params.userId);
        });
        return this.app;
    };
    return UsersRoutes;
}(common_routes_config_1.CommonRoutesConfig));
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=users.routes.config.js.map