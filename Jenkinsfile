pipeline {
    agent any

    environment {
        SLACK_WEBHOOK = credentials('SLACK_WEBHOOK') // 👈 assumes you added the webhook as a credential
        RENDER_URL = 'https://dashboard.render.com/web/srv-d06g2truibrs73eidpug/deploys/dep-d06g2u3uibrs73eidq3g' // 👈 replace with your real Render URL
    }

    stages {
        stage('Cleanup') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout Code') {
            steps {
                echo 'Cloning repository...'
                deleteDir()
                git url: 'https://github.com/ELifede-47/gallery.git'
            }
        }

        stage('Install dependencies and Start') {
            steps {
                script {
                    docker.image('node:18-bullseye').inside('--user root') {
                        echo 'Installing npm dependencies...'
                        sh 'npm install'

                        echo 'Starting the application...'
                        sh 'npm start'
                    }
                }
            }
        }
    }

    post {
        success {
            echo '✅ Build and deployment succeeded!'
            sh """
                curl -X POST -H 'Content-type: application/json' --data '{
                    "text": "🎉 Deployment Successful! Build #${BUILD_ID} is live at $https://dashboard.render.com/web/srv-d06g2truibrs73eidpug/deploys/dep-d06g2u3uibrs73eidq3g"
                }' $SLACK_WEBHOOK
            """
        }
        failure {
            echo '❌ Build or deployment failed.'
        }
    }
}
