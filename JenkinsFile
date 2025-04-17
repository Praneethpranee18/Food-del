pipeline {
    agent any
    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs() // Clears the workspace to avoid stale data
            }
        }
        stage('Checkout') {
            steps {
                // Clone the repository
                checkout([$class: 'GitSCM',
                          branches: [[name: '*/main']],
                          userRemoteConfigs: [[url: 'https://github.com/Praneethpranee18/Food-del.git']]])
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Building the project..."'
                sh 'ls -la' // Verify repository contents
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Running tests..."'
            }
        }
    }
    post {
        always {
            cleanWs() // Clean up after build
        }
    }
}