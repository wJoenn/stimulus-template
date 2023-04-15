This is a boilerplate for a Frontend project using Stimulus and SCSS

## Installation
- Clone the repo: `git clone git@github.com:wJoenn/stimulus-boilerplate.git <YOUR_PROJECT_NAME>`
- Navigate to the new directory: `cd <YOUR_PROJECT_NAME>`
- Remove the current remote: `git remote rm origin`
- Create a new github repository: `gh repo create --public --source=.`
- Push to your new repo: `git push origin master`
- Install all the yarn dependencies: `yarn`
- Launch the development server: `yarn dev`

## Deploy as Github pages
**First time**

- Create dist folder with minimised files: `yarn build`
- Navigate to the new folder: `cd dist`
- Create new Git repository: `git init`
  
If you use your own domain name you can skip this step, otherwise you'll need to go to your dist/html.index file and update all of your `src` and `<link href="">` to be `/<YOUR_PROJECT_NAME>/<PATH_TO_FILE>` instead of just `/<PATH_TO_FILE>`.<br/>For example your `<script src="/index.js" defer="">` would become `<script src="/portfolio/index.js" defer="">`

- Add your dist directory to git: `git add .`
- Commit Your changes: `git commit -m "Initial Commit"`
- Create and move to a new gh-pages branch: `git checkout -b gh-pages`
- Create a remote branch to link your dist to your main repo: `git remote add <YOUR_PROJECT_NAME> git@github.com:<YOUR_GITHUB_USERNAME>/<YOUR_PROJECT_NAME>.git`
- Push your gh-pages to your main repo: `git push -u <YOUR_PROJECT_NAME> gh-pages`

Now if you go in your repository settings, under "Pages" you should see your gh page is processing

**To update simple do**
```
  cd <YOUR_PROJECT_NAME>
  yarn build
  cd dist # Again, update the index.html if you're not using a custom domain name
  git checkout master
  git add .
  git commit -m "<YOUR_COMMIT_MESSAGE>"
  git checkout gh-pages
  git merge master
  git push -u <YOUR_PROJECT_NAME> gh-pages
```
  
