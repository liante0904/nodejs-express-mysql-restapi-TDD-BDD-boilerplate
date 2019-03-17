/** 전역 상수를 이용해 테스트, 개발 DATABASE를 공통적으로 사용합니다. */
const HOST = 'localhost';
const USERNAME = 'root';
const PASSWORD = 'root';
const DATABASE = 'node_api_codelab';  // _dev, _test를 붙여 DATABASE를 나눌수 있습니다.
const environments = {
    development: {
      mysql: {
        host: HOST,
        username: USERNAME,
        password: PASSWORD,
        database: DATABASE
      }
    },
  
    test: {
      mysql: {
        host: HOST,
        username: USERNAME,
        password: PASSWORD,
        database: DATABASE
      }
    },
  
    production: {
  
    }
  }
  
  const nodeEnv = process.env.NODE_ENV || 'development';
  
  module.exports = environments[nodeEnv];