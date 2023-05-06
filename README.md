This is a boilerplate for a Frontend project using Stimulus and SCSS

## Installation
- Click on Use this template > Create a new repository
<img src="https://user-images.githubusercontent.com/75388869/236616139-844bd07f-4a64-4f9e-bc0f-ac54f99b2eb8.png" width="600">

- Clone your new repo: `git clone <YOUR_REPO_SSH_KEY>`
- Navigate to the new directory: `cd <YOUR_PROJECT_NAME>`
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
- Create a remote branch to link your dist to your main repo: `git remote add <YOUR_PROJECT_NAME> <YOUR_REPO_SSH_KEY>`
- Push your gh-pages to your main repo: `git push -u <YOUR_PROJECT_NAME> gh-pages`

Now if you go in your repository settings, under "Pages" you should see your gh page is processing

**To update simple do**
```
  cd <YOUR_PROJECT_NAME>
  yarn build
  cd dist # Again, update the index.html if you're not using a custom domain name
  git checkout gh-pages
  git add .
  git commit -m "<YOUR_COMMIT_MESSAGE>"
  git push -u <YOUR_PROJECT_NAME> gh-pages
```
  
