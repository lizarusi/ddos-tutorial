while true
do
  sleep 30
  echo 'restart'
  heroku restart -a <<your-app-name>>
done
