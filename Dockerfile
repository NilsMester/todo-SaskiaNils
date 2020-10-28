FROM openjdk:15-oracle

ENV ENVIRONMENT=prod

MAINTAINER Nils Mester <nmslash@mailbox.org>

ADD backend/target/To-Do.jar app.jar

CMD [ "sh", "-c", "java -jar -Dserver.port=$PORT app.jar" ]
