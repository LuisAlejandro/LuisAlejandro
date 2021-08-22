FROM dockershelf/node:14
LABEL maintainer "Luis Alejandro Martínez Faneyth <luis@luisalejandro.org>"

RUN apt-get update && \
    apt-get install gnupg git sudo

RUN echo "Set disable_coredump false" >> /etc/sudo.conf

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && \
    apt-get install yarn

RUN echo "luisalejandro ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/luisalejandro
RUN useradd -ms /bin/bash luisalejandro

USER luisalejandro

RUN mkdir -p /home/luisalejandro/app

WORKDIR /home/luisalejandro/app

CMD tail -f /dev/null
