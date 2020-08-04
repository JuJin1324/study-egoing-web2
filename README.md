# study-egoing-web2
생활코딩 WEB2 - Node.js 스터디: [링크](https://www.youtube.com/watch?v=3RS_A87IAPA&list=PLuHgQVnccGMA9QQX5wqj6ThK7t2tsGxjm&index=1)

## 3-Install
### Install
* Ubunut: `apt-get install -y nodejs`
* macOS: `brew install nodejs`
* Windows: `scoop install nodejs`

### Select Time
6.Asia -> 69.Seoul

### Docker
Docker를 통해서 Ubuntu 컨테이너에 개발환경 구축을 해보았다.
* 컨테이너명: jujin/nodejs
* 설명: 현재 프로젝트 디렉터리를 Ubuntu 컨테이너의 /home/workspace-nodejs 디렉터리에 마운트(장착)한다.
* 현재 프로젝트에서 파일 수정 후 Ubuntu 컨테이너의 node 명령으로 nodejs 실행이 가능한다.

```bash
$ docker build -t jujin/nodejs ./3-install
$ docker run --rm -v $PWD/3-install:/home/workspace-nodejs -it jujin/nodejs bash

# 이후 Ubuntu 실습 작업
# node -v
# vi helloworld.js
console.log(1+1);
:wq
# node helloworld.js
```

## 5-execute-web-server
### 기존 소스코드 다운로드
``` bash
$ cd 5-execute-web-server
$ git clone https://github.com/web-n/web1_html_internet.git 
$ mv web1_html_internet web2-nodejs
```

### Update Syntax
2018년에 작성된 코드여서 이전 Javascript 코드들이 눈에 띄었음. 해당 문법에 대해서 버전 업 진행.
* var -> let
* function -> lambda
* template literal 적용: '__dirname: ' + __dirname -> `__dirname: ${__dirname}`

### Docker 실행
기존 Dockerfile에 `EXPOSE 8080`을 추가하여 호스트 OS에서 Ubuntu와 연결할 포트 지정  
```bash
# EXPOSE 3000 을 추가했기 때문에 이미지 재 빌드
$ docker build -t jujin/nodejs ./5-execute-web-server

# -p 옵션을 통해서 현재 PC에서 사용할 포트인 3000과 Ubuntu 내부 포트인 3000을 연결
# -p [현재 PC의 포트]:[컨테이너 내부 포트]
$ docker run --rm -v $PWD/5-execute-web-server/web2-nodejs:/home/workspace-nodejs -p 3000:3000 -it jujin/nodejs bash
```

### __dirname, __filename
* __dirname : 실행 중인 js 파일의 경로
* __filename: 실행 중인 js 파일의 이름(경로 포함)
* 참조사이트: [3.4.4 __filename, __dirname](https://thebook.io/006982/ch03/04/04/)

## 6,7,8 javascript 문법
생략

