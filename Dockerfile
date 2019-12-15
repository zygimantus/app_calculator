FROM java:8-jdk-alpine
COPY ./target/app_calculator.jar /usr/app/
WORKDIR /usr/app
RUN sh -c 'touch app_calculator.jar'
ENTRYPOINT ["java","-jar","app_calculator.jar"]