FROM mhart/alpine-node:11 AS builder 
# //installs node in the container
WORKDIR /app
#//work directory
COPY . .
#//copy from local folder
RUN npm run build
#//builds package

FROM mhart/alpine-node
RUN npm -g add serve
#installs add se
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]

#  command to tag it to internnship--docker-app docker build -t internship-docker-app .