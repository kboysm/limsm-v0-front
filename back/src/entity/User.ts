import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    uid: number; // pk

    @Column()
    name: string; // 이름

    @Column()
    age: number; // 나이

    @Column()
    address: string; // 주소
    
    @Column()
    createdAt: Date; //가입 날짜
    
    @Column()
    updatedAt: Date; // 사용자 정보 수정 날짜 - 가장 최근만 표시하기로 결정
    
    @Column()
    id: string; // 사용자 id
    
    @Column()
    pw: string; // 사용자 비밀번호



}
