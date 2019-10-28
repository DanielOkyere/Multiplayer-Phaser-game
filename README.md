# Multiplayer Phaser Game docker debug chapter 7

Once you have docker installed. you can build and run local image of this branch

While you are in the project directory. Do the following

## Create the local image

```
docker build -t test/chapter7 .
```

## Run the local image

```
docker run -p 80:3000 -d test/chapter7
```

## Check your ip tables to verify which port is connected to which IP
Check under Chain DOCKER section which should have at least one reference
Might vary depending on OS

```
sudo iptables -t nat -L -n
```

For my instance I had to run it on `172.17.0.2:3000`
