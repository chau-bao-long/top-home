FROM ruby:2.4.1

# JS Runtime and PG dependencies
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get update -qq && \
    apt-get install -y build-essential \
    libpq-dev \
    nodejs \
    qt5-default \
    libqt5webkit5-dev \
    gstreamer1.0-plugins-base \
    gstreamer1.0-tools \
    gstreamer1.0-x \
    lsof \
    vim

# Clean!
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Create work dir
RUN mkdir /webapp
WORKDIR /webapp

# Install Ruby package
ADD Gemfile /webapp/Gemfile
ADD Gemfile.lock /webapp/Gemfile.lock
RUN bundle

# Install JS pakcage
RUN npm install -g yarn
COPY package.json /webapp/package.json
COPY yarn.lock /webapp/yarn.lock
RUN yarn -g

ADD . /webapp

