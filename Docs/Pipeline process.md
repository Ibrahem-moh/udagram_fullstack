# Pipeline Process of Udagram
We are using  GitHub, CircleCI and AWS to build this pipeline.
We are using CircleCI to watch our GitHub repo for any changes to the master branch .then start building and deploying our app to AWS.
  - CircleCI account must be linked to GitHub account.
  - we must add our environment variables to CircleCI 
  - we need a config.yml inside our application to include our  Process steps
    - we  add orbs for node, eb (Elastic Beanstalk cli) and aws-cli
    - we add steps to for installing, building both the frontend and backend than deploying our app to AWS


 

##  Pipeline

![Screenshot ](https://github.com/ibr800/udagram_fullstack/blob/master/Screenshots/Pipeline.png)