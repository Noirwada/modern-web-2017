node {
  stage('check environment'){
    sh "whoami"
    sh "docker -v"
    sh "docker-compose -v"
    sh "docker ps"
  }
  
  stage('checkout branch') {
    /* playground */
    // git url: 'https://github.com/trunk-studio/modern-web-2017.git', branch: 'dev'
 
    /* for build */
    checkout scm
  }

  stage('clean containers') {
    sh "docker rm $(docker ps -a -q)"
  }

  /* Selenium Server */
  stage('selenium') {
      sh "docker-compose up --no-recreate -d selenium"
  }

  /* Install node_modules */
  stage('build') {
     sh "docker-compose run --name `uuidgen` --service-ports build"
  }

  try {
    /* Run test case*/
    stage('test') {
      sh "docker-compose run --name `uuidgen` --service-ports test-ex01"
    }
    slackSend channel: '#modern-web-conf-2017', color: 'good', message: "success ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)", teamDomain: 'trunk-dojo', token: 'IN1s1SYvKbultlFTtm31WSIL'
  } catch(e) {
    slackSend channel: '#modern-web-conf-2017', color: 'danger', message: "fail ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)", teamDomain: 'trunk-dojo', token: 'IN1s1SYvKbultlFTtm31WSIL'
    throw e;
  }
}
