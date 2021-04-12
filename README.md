<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

It's a demo application that allows a user to create update delete and read students and courses and register them in courses, A student can register in max 6 courses and student have to student himself into courses by providing his ID and course ID.

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.



## Installation

```bash
$ npm install
```
## Setting Keyclock server
```bash
## Setup Keycloak
```bash
#1) download, extract the folder

 Open the folder, move to bin folder and run standalone batch file
 Once it is done, open a browser and paste http://localhost:8080/auth/ 
 
 #2) Setup a admin account and login

  Create your own realm by clicking the realm

 #3) Create a user by clicking user option at bar

  Click at add user and fill only username,firstname,lastname fields
  Click at credentials at top menu of user to set password

  #4) Create your own client by clicking client option at bar

   1-Click at create and fill client ID with client protocol as openid-connect and url as http://localhost:8080/
   2-Go to your client and select settings option and change Access Type as  "" CONFIDENTIAL "" 
   3-Click at  Authentication Flow Overrides option at bottom of page and set BROWSER FLOW as "BROWSER" and DIRECT GRANT FLOW as "DIRECT GRANT"
   4- Move to roles menu (at top of Clients menu ) and click at ADD ROLE button and create some roles

   #5) Add Realm roles

   1- Click at Add roles to create necessary roles
   
   #6) Click Users option below Manage section

   1- Select a user, Click Role Mappings at top options
   2- Click client roles dropdown option and select client
   3- At available roles, click the role you want to assign to the selected user and click add selected button below

   #7) Replace your REALM, CLIENT information in APP.MODULE file in NESTJS project

   1- replace realm name  i.e "myrealm" in file with your REALM name.
   2- replace client name i.e "myclient" in file with your CLIENT name.
   3- you can find your client secret in your realm's client, click at credentials to get your client secret key
   4- That's all.

   # Open postman and generate a token
   1- Send a post request to  http://localhost:8080/auth/realms/myrealm/protocol/openid-connect/token
   2- Dont forget to replace myrealm in url with your realm name
   3- Copy the generated token
   4- Send a get request to http://localhost:3000 with authorization as token bearer with token 
   5- Success and now you can try postman API endpoints
```
## Other helpful blog to setup keycloak
```bash
# This Blog might be helpful if you any trouble setting up keycloak server
# !! IMPORTANT !!
  Change access type in protocol as ' CONFIDENTIAL ' not 'Token Bearer'
# This blog might be helpful as it contains images and detailed description
 https://medium.com/devops-dudes/secure-nestjs-rest-api-with-keycloak-745ef32a2370
```
## Running the app

```bash
# development
$ npm run start



# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## POSTMAN API TESTINGS

```bash
http://localhost:3000/students
http://localhost:3000/students/1
http://localhost:3000/courses
http://localhost:3000/courses/1
http://localhost:3000/intermed
http://localhost:3000/intermed/1
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Commands
nest generate controller courses
nest generate service students
