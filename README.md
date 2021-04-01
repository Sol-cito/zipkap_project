# zipkap_project

Collaborative WEB project

<https://github.com/Sol-cito/zipkap_project>

<localhost:3000>

<localhost:8080>

<aug18th.com>

<https://zipgap.monday.com>

## 버전 관리

origin/dev 를 풀하여 받는다

새로운 branch 를 생성한다 (개인용 ex : b0ho)

->로컬에서는 해당 브랜치만 사용

코드 작성 후 커밋한다

푸시할때 origin: 을 수정한다 (ex : b0ho->origin : dev)

creact pull request 발생 , 이를 머지한다.

-> 개발환경에 반영완료

모든개발이 완료되면 운영환경에 반영한다

-> dev 브랜치로 변경 한 뒤 main으로 (ex : dev->origin : main), 마찬가지로 pull request 머지

dev 에서 main(운영) 통합전까지는 dev 를 기준으로 소스코드 버전 확인.

## 프로젝트 빌드

zipkap_project 전체 깃 풀

yarn, nodejs 설치 후 vscode 에서 yarn , yarn start

intellij 에서 gradle 빌드, 프로젝트 빌드, ZipgapApplication.java 실행

기본적인 gitignore 은 설정 되어 있음 (ide 설정 파일 포함).

주의 : 언어 인코딩은 가급적 UTF-8 로 통일

자바 버전은 open-jdk 11 버전 사용 


-> intellij 에서 빌드 시 빌드 도구, 프로젝트 구성 등 확인
