FROM ubuntu:18.04

MAINTAINER Jason TIAN <jason@apkjam.com>

RUN apt-get update \
      && apt-get install -y python python-pip eot-utils  fontforge woff-tools \
      && pip install fonttools
