node {
  stage('check environment'){
    sh "whoami"
    sh "docker -v"
    sh "docker-compose -v"
    sh "docker ps"
  }
  
   stage('checkout branch') {
   // playground
   // git url: 'https://github.com/trunk-studio/modern-web-2017.git', branch: 'dev'
 
   // for build
      checkout scm
   }
  
  stage('selenium') {
      sh "docker-compose up -d selenium"
  }
  
  stage('build') {
    sh "docker-compose run --service-ports build"
  }

  stage('test') {
    sh "docker-compose run --service-ports test-ex01"
  }
}
