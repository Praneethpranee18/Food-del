pipeline {
    agent any

    triggers {
        pollSCM('*/2 * * * *') // Check for changes every 2 minutes
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

        stage('Stop & Remove Old Containers') {
            steps {
                sh "docker-compose down || true"
            }
        }

        stage('Build and Run with Docker Compose') {
            steps {
                sh "docker-compose up --build -d"
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
