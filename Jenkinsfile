pipeline {
    agent any

    triggers {
        pollSCM('*/2 * * * *') // Check for changes every 2 minutes
    }

    environment {
        IMAGE_NAME = 'praneeth/food-del'
        IMAGE_TAG = 'latest'
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $IMAGE_NAME:$IMAGE_TAG ."
            }
        }

        stage('Stop & Remove Old Container') {
            steps {
                sh "docker stop food-del-container || true"
                sh "docker rm food-del-container || true"
            }
        }

        stage('Run New Container') {
            steps {
                sh "docker run -d --name food-del-container -p 3000:3000 $IMAGE_NAME:$IMAGE_TAG"
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
