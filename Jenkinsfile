pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Praneethpranee18/Food-del.git'
            }
        }

        stage('Docker Compose Down') {
            steps {
                // Fixed the $ usage using single quotes
                bat 'docker run --rm -v $(pwd):/app -v /var/run/docker.sock:/var/run/docker.sock -w /app docker/compose:1.29.2 down || true'
            }
        }

        stage('Docker Compose Up') {
            steps {
                bat 'docker run --rm -v $(pwd):/app -v /var/run/docker.sock:/var/run/docker.sock -w /app docker/compose:1.29.2 up -d'
            }
        }
    }
}
