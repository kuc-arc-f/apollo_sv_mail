# apollo_sv_mail

 Version: 0.9.1

 Author : Kouji Nakashima / kuc-arc-f.com

 date   : 2021/12/30

 update  :

***
### Summary

Apollo Server + mongoDB , mail send sample

***
### Setup

* config.ts : MONGODB_URL ,MONGODB_DB_NAME set require

mongoDB atlas , user, password, cluster , host, dbName
```
MONGODB_URL: 'mongodb+srv://user123:<pass123>@cluster999.sample123.net/test',
MONGODB_DB_NAME: 'test',  
```

* smtp

SMTP_HOST, PORT, USER, PASSWORD, from mail ADDRESS
```
SMTP_HOST : "host123.example.com",
SMTP_PORT : 465,
SMTP_SECURE : true,
SMTP_AUTH_USER : "user123",
SMTP_AUTH_PASS : "123",
SEND_MAIL_ADDRESS : "from123@example.com"
```
***

```
npm install
```

* dev-start

```
yarn dev
```

* start

```
yarn build
yarn start
```

***
### Blog :


***

