FROM gitpod/workspace-full:latest
# RUN bash -c 'VERSION="14.18.2" && source $HOME/.nvm/nvm.sh && nvm install $VERSION  && nvm use $VERSION && nvm alias default $VERSION'
# RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix

ENV ENVIRONMENT=UAT
ENV LOG_LEVEL=debug
ENV LOG_PRETTY=true
ENV AWS_REGION=us-east-1
# ENV NODE_ENV=production
ENV NPM_TOKEN=abcdabcd-abcd-abcd-abcd-e9033f39f4fe