import { CommonRoutesConfig } from '../common/common.routes.config';
import { Users } from "../entity/User";
import { myConnection } from '../connection/index'
import * as express from 'express'
import {getConnection} from 'typeorm'
import crypto from 'crypto'
import secretKey from '../secretKey/index'

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application ) {
        super( app , 'UsersRoutes' );
    }
    configureRoutes() {
        this.app.route('/users')
            .get( (req: express.Request, res: express.Response) => {
                myConnection.then( async connection => {
                    console.log("userList");
                    const users = await connection.manager.find(Users);
                    res.status(200).send(users)//DB 생성 후 유저 추가 로직
                }).catch(error =>{
                    res.status(200).send( '잘못된 요청' ) //DB 생성 후 유저 추가 로직
                    console.log(error)
                });
            })
        
        this.app.route('/users')
            .post( (req: express.Request, res: express.Response) => {
                res.status(200).send( `List Of Users `) //DB 생성 후 유저 추가 로직
            })
        
        this.app.route('/signUp')
            .post( (req: express.Request, res: express.Response) => {
                const { email , password , name } = req.body
                if( email && password && name ) {
                    const newUser = new Users();
                        newUser.email= email
                        newUser.password= crypto.createHmac('sha256',secretKey.cryptoKey).update(password).digest('hex')
                        newUser.name= name
                        newUser.age= 0
                        newUser.address= ''
                        newUser.createdAt = new Date()
                        newUser.updatedAt = new Date()
                        myConnection.then( async connection => {
                            console.log("signUp");
                            const user = await connection.getRepository(Users).createQueryBuilder("user").where("user.email = :email", { email: newUser.email }).getOne();
                            console.log( user)
                            if(user){
                                res.status(200).send('idExists')
                            }else {
                                await getConnection().createQueryBuilder().insert().into(Users).values(
                                    newUser
                                ).execute();
                                res.status(200).send('signUp')
                            }
                            // res.status(200).send(user)
                        }).catch(error =>{
                            res.status(200).send( 'signUpFail' ) //DB 생성 후 유저 추가 로직
                        });

                }
                // res.status(200).send( `List Of Users `) //DB 생성 후 유저 추가 로직
            })
        
        this.app.route('/signIn')
        .post( (req: express.Request, res: express.Response) => {
            const { email , password  } = req.body
            if( email && password ) {
                    myConnection.then( async connection => {
                        const cryptoPassword = crypto.createHmac('sha256',secretKey.cryptoKey).update(password).digest('hex')
                        console.log("signIn");
                        const user = await connection.getRepository(Users).createQueryBuilder("user").where("user.email = :email", { email }).getOne();
                        console.log( user )
                        if(!user) {
                            res.status(200).send('doNotExist') 
                        }
                        if(user.password === cryptoPassword){
                            res.status(200).send('signIn')
                        }else {
                            res.status(200).send('passwordsDoNotMatch')
                        }
                        // res.status(200).send(user)
                    }).catch(error =>{
                        res.status(200).send( 'signInFail' ) //DB 생성 후 유저 추가 로직
                    });

            }else {
                res.status(200).send('emailAndPasswordDoNotEnter')
            }
           
        })

        this.app.route('./users/:userId')
            .all( (req: express.Request, res: express.Response, next: express.NextFunction) => {//미들웨어 유저 인증 용도
                next();
            })
            .get( (req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for id ${req.params.userId}`);
            })
            .post( (req: express.Request, res: express.Response) => {
                res.status(200).send(`Post requested for id ${req.params}`);
            })
            // .put( (req: express.Request, res: express.Response) => {
            //     res.status(200).send(`PUT requested for id ${req.params.userId}`);
            // })
            // .patch( (req: express.Request, res: express.Response) => {
            //     res.status(200).send(`PATCH requested for id ${req.params.userId}`);
            // })
            .delete( (req: express.Request, res: express.Response) => {
                res.status(200).send(`DELETE requested for id ${req.params.userId}`);
            })

            return this.app;
    }
}