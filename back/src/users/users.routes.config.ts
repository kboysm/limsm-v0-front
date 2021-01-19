import { CommonRoutesConfig } from '../common/common.routes.config';

import * as express from 'express'

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application ) {
        super( app , 'UsersRoutes' );
    }
    configureRoutes() {
        
        this.app.route('/users')
            .get( (req: express.Request, res: express.Response) => {
                res.status(200).send( 'List Of Users') //DB 생성 후 유저 목록 반환 예정
            })
        
        this.app.route('/users')
            .post( (req: express.Request, res: express.Response) => {
                res.status(200).send( 'List Of Users') //DB 생성 후 유저 추가 로직
            })
        
        this.app.route('./users/:userId')
            .all( (req: express.Request, res: express.Response, next: express.NextFunction) => {//미들웨어 유저 인증 용도
                next();
            })
            .get( (req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for id ${req.params.userId}`);
            })
            .put( (req: express.Request, res: express.Response) => {
                res.status(200).send(`PUT requested for id ${req.params.userId}`);
            })
            .patch( (req: express.Request, res: express.Response) => {
                res.status(200).send(`PATCH requested for id ${req.params.userId}`);
            })
            .delete( (req: express.Request, res: express.Response) => {
                res.status(200).send(`DELETE requested for id ${req.params.userId}`);
            })

            return this.app;
    }
}