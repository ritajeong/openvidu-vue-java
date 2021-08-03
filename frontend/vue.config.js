const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../src/main/resources/static"),
  devServer: {
    port:3000   //개발하는 동안 프런트엔드 페이지를 띄우는 포트
  },
  // proxy: {
  //   '/api/*' : {
  //   target: 'http://localhost:8080' // /api 요청을 할때 백엔드 호출
  //   }
  // }
}