# Nginx

RUN apt-get update -y
RUN apt-get install -y nginx
RUN rm -v /etc/nginx/nginx.conf
ADD nginx.conf /etc/nginx.conf

RUN echo "daemon off;" >> /etc/nginx/nginx.conf
EXPOSE 80

CMD service nginx start
