pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'truongnguyendev'
        HELM_CHART_REPO = 'https://github.com/devnvgup/helm-chart.git'
        KUBE_NAMESPACE = 'devops'
        DOCKER_CREDENTIALS_ID = 'docker-hub'  // Jenkins credential ID
        GIT_HELM_CRED = 'git-ssh-key'             // Jenkins credential ID cho Helm repo
    }

    stages {

        stage('Checkout App') {
            steps {
                git url: 'https://github.com/devnvgup/devops.git', branch: 'main'
            }
        }

        stage('Build & Push Docker Images') {
            steps {
                withCredentials([usernamePassword(credentialsId: "${DOCKER_CREDENTIALS_ID}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    docker build -t $DOCKER_REGISTRY/devops-backend:latest ./backend
                    docker build -t $DOCKER_REGISTRY/devops-frontend:latest ./frontend
                    docker push $DOCKER_REGISTRY/devops-backend:latest
                    docker push $DOCKER_REGISTRY/devops-frontend:latest
                    '''
                }
            }
        }

        stage('Checkout Helm Chart') {
            steps {
                sshagent(credentials: ["${GIT_HELM_CRED}"]) {
                    sh 'git clone -b main ${HELM_CHART_REPO} devops-helm'
                }
            }
        }

        stage('Deploy via Helm') {
            steps {
                sh '''
                helm upgrade --install devops ./devops-helm \
                    --namespace $KUBE_NAMESPACE \
                    --set backend.image=$DOCKER_REGISTRY/devops-backend:latest \
                    --set frontend.image=$DOCKER_REGISTRY/devops-frontend:latest \
                    --set backend.env.MONGODB_URI="mongodb://truongnguyen16999_db_user:Truonglk123@mongo:27017/devops"
                '''
            }
        }
    }

    post {
        always {
            sh 'docker logout'
        }
    }
}
