This is a boilerplate for a Frontend project using Stimulus and SCSS

## Installation

```
  git clone git@github.com:wJoenn/stimulus-boilerplate.git <YOUR_PROJECT_NAME>
  cd <YOUR_PROJECT_NAME>
  yarn
  yarn dev
```

## Deploy as Github pages
**First time**

```
  yarn build # This creates a dist folder with minimised files
  cd dist
  git init
```
If you use your own domain name you can proceed further, otherwise you'll need to go to your dist/html.index file and update all of your `src` and `<link href="">` to be `/<YOUR_PROJECT_NAME>/<PATH_TO_FILE>` instead of just `/<PATH_TO_FILE>`

```
  git add .
  git commit -m "Initial Commit"
  git checkout -b gh-pages
  git remote add <YOUR_PROJECT_NAME> git@github.com:<YOUR_GITHUB_USERNAME>/<YOUR_PROJECT_NAME>.git
  git push -u <YOUR_PROJECT_NAME> gh-pages
```

Now if you go in your repository settings, under "Pages" you should see your gh page is processing

**To update simple do**
```
  cd <YOUR_PROJECT_NAME>
  yarn build
  cd dist # Again, update the index.html if you're not using a custom domain name
  git add .
  git commit -m "<YOUR_COMMIT_MESSAGE>"
  git checkout gh-pages
  git merge master
  git push -u <YOUR_PROJECT_NAME> gh-pages
```
  
