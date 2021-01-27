# node_vue_pra

#back

Client does not support authentication protocol requested by server; consider upgrading MySQL client 에러 발생   
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR-PASSWORD';
FLUSH PRIVILEGES;
```   
로 해결

front

Property 'getToken' has no initializer and is not definitely assigned in the constructor.   
->tsconfig.json에     "strictPropertyInitialization": false, 추가