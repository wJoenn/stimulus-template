This is a boilerplate for a Frontend project using Stimulus, Sass and Tailwind

## Installation
- Click on Use this template > Create a new repository
<img src="https://user-images.githubusercontent.com/75388869/236616139-844bd07f-4a64-4f9e-bc0f-ac54f99b2eb8.png" width="600">

- Clone your new repo: `git clone <YOUR_REPO_SSH_KEY>`
- Navigate to the new directory: `cd <YOUR_PROJECT_NAME>`
- Install all the yarn dependencies: `yarn`
- Launch the development server: `yarn dev`

## Deploy as Github pages
- Create a .github/workflows directory inside your root folder<br>
- Move the deploy.yml file to .github/workflows/deploy.yml<br>
- Commit & Push to your github repository

Your project will now be bundled and deployed everytime you push to `master` or `main`.

<br>

### **Sidenote**
If your gh page does not use a custom domain it is likely that your url will looks something like this :

> https://<YOUR_GITHUB_NAME>.github.io/<YOUR_PROJECT_NAME>

Every relative path url that you used inside your project such as `<img src="path/to/image">` will be relative to the root url so it would search that image in

> https://<YOUR_GITHUB_NAME>.github.io/path/to/image

instead of

> https://<YOUR_GITHUB_NAME>.github.io/<YOUR_PROJECT_NAME>/path/to/image

To fix that you can change the relative path in your code to include <YOUR_PROJECT_NAME> before build<br>
The best solution I can think of at the moment would be to have a .env file for your dev environment to store your dev path and a .env file for production where you store your dev path<br><br>
Having a custom domain for your gh page will also fix the issue as the custom domain's url will start at the root.
