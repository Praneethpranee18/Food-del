pipeline {
    agent any

    triggers {
        pollSCM('*/2 * * * *')
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
                sh "docker run --rm -v $(pwd):/app -v /var/run/docker.sock:/var/run/docker.sock -w /app docker/compose:1.29.2 down || true"
            }
        }

        stage('Build and Run with Docker Compose') {
            steps {
                sh "docker run --rm -v $(pwd):/app -v /var/run/docker.sock:/var/run/docker.sock -w /app docker/compose:1.29.2 up --build -d"
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
