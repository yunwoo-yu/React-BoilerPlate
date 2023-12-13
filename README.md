# boilerplate-frontend

## Stack

- Webpack(v5, ESM, babel, ts-node) + React
- Emotion (Styled)
- React-query + Axios
- pnpm 8.10.2 (레포 생성 시점 버전)

(상태관리 라이브러리는 논의 후 추가 예정 Redux, Recoil, Zustand, Jotai 등등)


## Webpack V5

- webpack.config.ts : dev, prod 두가지 상황에 모두 적용하는 common 설정
- webpack.dev.ts : dev 에만 적용할 설정
- webpack.prod.ts : prod 에만 적용할 설정

> dev 환경에서는 map파일이 생성되어 콘솔에 뜨는 오류 클릭 시 난독화 되지 않은 코드를 확인하여 바로 디버깅을 진행할 수 있습니다.
> prod 환경에서는 난독화 및 css,js 코드 최적화가 이루어져서 dist 폴더에 반영됩니다.

## Script

```js

  "scripts": {
    "dev": "webpack serve --config webpack/webpack.dev.ts", // 개발서버 실행 port 3000
    "start": "serve -s dist -l 4000", // 빌드 폴더 실행 port 4000
    "build:dev": "webpack --config webpack/webpack.dev.ts", // dev 빌드 (env 설정, webpack 설정 등 dev로 반영. 배포하는 DEV 가 아님.)
    "build:prod": "webpack --config webpack/webpack.prod.ts", // Prod 빌드 
    "lint": "eslint ./src --fix" // src 폴더 lint 실행, 만약 autofix가 되지 않으면 한번씩 실행해주세요.
  },

```

## Lint 적용 플러그인 목록

**저장 시 자동으로 fix되지 않으면 eslint, prettier 설치여부 및 vscode settings 확인 바랍니다.**

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint-config-prettier
- eslint-plugin-prettier
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-simple-import-sort
- eslint-plugin-unused-imports