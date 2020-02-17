FROM node

WORKDIR /tmp

COPY package.json /tmp/
COPY package-lock.json /tmp/
RUN cd /tmp && npm install
RUN mkdir -p /var/app && cd /var/app && ln -s /tmp/node_modules

WORKDIR /var/app

COPY . /var/app

ENV LANGUAGE en_US.UTF-8
ENV LANG en_US.UTF-8

CMD ["npm", "start"]
