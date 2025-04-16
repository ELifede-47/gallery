pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18'
    }

    environment {
        MONGO_URI = credentials('mongo-uri-secret')
        DB_NAME = 'darkroom'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // No need to clone again – Jenkins already does it when using "Pipeline from SCM"
                echo 'Code checked out automatically by Jenkins.'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run App') {
            steps {
                sh 'echo "Starting app..."'
                sh 'node app.js'
            }
        }
    }

    post {
        failure {
            echo '❌ Build failed. Check logs above for details.'
        }
        success {
            echo '✅ Build succeeded!'
        }
    }
}