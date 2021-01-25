FROM openjdk:11.0.6-jre-slim-buster
VOLUME /tmp
ADD target/backend-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]