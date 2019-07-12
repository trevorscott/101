# 101 
Articles and blog posts about various topics in sustainability.

# Run Project Locally

Open your terminal and navigate to the 101 source code directory. 

e.g. `cd /Desktop/Projects/101`

Once youre in the `101` directory, run:

```bash
git pull
npm run dev
```

That will start the web server on your local machine and you can now view the app in your browser by navigating to `localhost:3000`.

# Making Changes to the Source Code

1. Open the 101 directory in Sublime 
1. Edit the project, make sure it works locally

## Save Changes to github

Always pull before you push!!

```
git pull
```

Now you're ready to add the changes to git, commit those changes and push them to the GitHub repository.

```
git add .
git commit -m 'enter a message here'
git push
```


# Deploy New Content

Once you have made changes to the repository on GitHub and you're ready for you content to go live open up Terminal and navigate to the 101 directory that contains the source code for this project.


## STEP 1:
You need to make sure the the source code on your machine is up to date. So enter in this command into your Terminal:

```bash
git pull
```

If there is some sort of error or red text, stop what you're doing and get my help.

Otherwise, you're ready to push the source code to Heroku.

## STEP 2:

```
git push heroku master
```

If there is some sort of error get my help.

Otherwise, voila! Enjoy your new blog content.
