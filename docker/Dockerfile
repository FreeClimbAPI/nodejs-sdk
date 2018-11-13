FROM shipyard.vail/python:3.7.1
LABEL maintainer ahaynes@vailsys.com

ENV BUILD_DIR /build
WORKDIR $BUILD_DIR

RUN yum -y install \
	make \
	which \
  && yum clean all

RUN pip install virtualenv

COPY . $BUILD_DIR
RUN ./setup.sh && source venv/bin/activate && make html

FROM shipyard.vail/nginx:1.12.2
LABEL maintainer ahaynes@vailsys.com
ENV BUILD_DIR /build
ENV NGINXPATH /usr/share/nginx/html

COPY --from=0 $BUILD_DIR/docs/build/html $NGINXPATH

EXPOSE 80

CMD ["bin/bash", "-c", "nginx -g 'daemon off;'"]
