#!/usr/bin/env groovy

def images = []
pipeline {
  agent {
    label 'kubernetes-docker'
  }

  options {
    ansiColor('xterm')
    timestamps()
    buildDiscarder(logRotator(numToKeepStr: '10'))
  }

  environment {
    NAMESPACE = 'persephony'
    IMAGE = 'js-sdk-docs'
    DOCS_PRODUCTION_BRANCH = 'master'
    VERSION = getVersion()
    DOCKER_REGISTRY_URL = 'https://shipyard-dev.vail'
    SLACK_CHANNEL = 'builds'
    SLACK_TEAM_DOMAIN = 'persephony'
    SLACK_TOKEN_CREDENTIAL_ID = 'persephony-build'
    DEFAULT_LATEST_BRANCH = 'develop'
  }

  stages{
    stage('Build') {
     steps {
        script {
          gitCommit()
          gitCommitAuthor()
          dir('docker') {
            sh "echo 'ENV VERSION ${VERSION}.${BUILD_NUMBER}' >> Dockerfile"
            sh "echo 'ENV COMMIT ${GIT_COMMIT}' >> Dockerfile"
          }
          sh 'env'
          images = dockerMultiStageBuild(
            name: "shipyard-dev.vail/${NAMESPACE}/${IMAGE}:${VERSION}.${BUILD_NUMBER}",
            args: "-f docker/Dockerfile ."
          )
          sh "echo ${images}"
        }
      }
    }

    stage('Push') {
      steps {
        script {
          if (env.BRANCH_NAME == env.DEFAULT_LATEST_BRANCH && currentBuild.resultIsBetterOrEqualTo('SUCCESS')) {
            images[1].push("latest")
          }
          images[1].push("${VERSION}")
          images[1].push("${VERSION}.${BUILD_NUMBER}")
        }
      }
    }
  }

  post {
    always {
      sendNotifications(currentBuild.result, "Pushed ${DOCKER_REGISTRY_URL}/${NAMESPACE}/${IMAGE}:${VERSION}.${BUILD_NUMBER}")

      script {
        if (!currentBuild.resultIsBetterOrEqualTo('SUCCESS')) {
          sh("echo 'Sending email notification'")
          body = "${currentBuild.result}\n" +
            "Job: ${env.JOB_NAME} ${env.BUILD_DISPLAY_NAME}\n" +
            "Branch: ${env.GIT_BRANCH}\n" +
            "See ${env.BUILD_URL} for details."
          address_list = env.gitlabUserEmail
          if (env.GIT_BRANCH == env.DOCS_PRODUCTION_BRANCH || env.BRANCH_NAME == env.DEFAULT_LATEST_BRANCH ) {
            address_list = "${address_list},persy-platform@vailsys.com"
          }
          sh("echo 'Sending results to ${address_list}'")
          mail(
            to: address_list,
            subject: "[Jenkins] ${currentBuild.result}: " +
              "Image build for JS SDK Documentation branch ${params.git_branch}",
            body: body
          )
        }
      }
    }
  }
}
