import { Users } from "../entity/User";

const userNameList = ['admin','user1','user2','user3'];
const userAgeList = [29,20,21,22]
const userAddressList = [
    '서울특별시 성동구','서울특별시 강남구','서울특별시 도봉구','서울특별시 노원구'
]
const userIdList = ['admin','test1','test2','test3']
const userPwList = ['1234','1234','1234','1234']
const userList: Array<Users> = []

for(let i=0 ; i <3 ; i++){
    const user = new Users();
    user.name = userNameList[i];
    user.age = userAgeList[i];
    user.address = userAddressList[i];
    user.createdAt = new Date();
    user.updatedAt = new Date();
    user.id = userIdList[i];
    user.pw = userPwList[i];
    userList.push(user);
}

export default userList;