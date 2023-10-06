# Welcome!

Welcome to TECH EATS where you can add your favorite food spots inside or near the Polytechnic University of the Philippines. Also, if you are great at cooking you may also share your recipes here.

## This is to practice your Git and Github skills!
Although we are trying to make everyone know your favorite food spot or recipe, the main goal of this website and repository is to have you practice open-source contribution with Git and Github. By creating a simple post about your food spot or recipe you will experience what it is like to contribute in Github.

If you are new to Git and Github:
1. Create a GitHub account for yourself at [Github](https://www.github.com) Login and look around if you aren't familiar with GitHub.
2. Go through this tutorial on how to use Git: https://guides.github.com/activities/hello-world/
3. Download Visual Studio Code, a free code editor: https://aka.ms/vscode
4. Once your computer is configured for Git, which might need to be installed separately, visit this GitHub repo while logged in and click 'fork' in the upper right hand corner. A copy of the repo will appear in your account.
5. Then you are all set to contribute to this website!

## Pre-requisites
1. You have installed and has a working **Node.js**
2. You know how to use markdown (or you can watch this https://youtu.be/bTVIMt3XllM?si=WSJAuVCnB4B2teUq)

## So how can you contribute?
Follow these steps:

1. Fork the repository

2. Clone the Repository

```bash
git clone <The link from ur forked github repo>
```

3. Go inside the folder that was cloned from your github account
```bash
cd <folder-name>
```

4. Download Dependencies
```bash
npm install
```

5. Run the development server
```bash
npm dev
```

## How to add your favorite food spot or recipe
Tags to Choose From
|Tag 1 | Tag 2 |            
|------|-----|
|Breakfast|Cheap|
|Lunch|Medium|
|Dinner|Pricy|
|Desserts|Budget-Friendly|
|Snacks|Great|

1. Navigate the folder and find the **templates/** folder and you will see two templates. Use the appropriate one

|Food Spot | Recipe |
|----------|--------|
|food_spot_template.md | recipe_template.md

2. Copy the template then place it inside the **src/foods/** folder then rename it to the one you want make it descriptieve. Give it a descriptive file name
 example. master-buffalo.md
3. Replace the values inside the markdown file
4. Register your food spot or recipe by editing this file: **src/.vuepress/config.js** Pick a category for your post according to those listed in the file in the config.js file. Then add it to its respective category as a 'child':

```bash
{
	title: 'Lunch',
        children:[
            'master-buffalo',
        ]
    },
```

Use the same name as your file.

**Optional**: You may also add an image for your post
Add your image inside the **src/images/** folder and name it descriptively 
example. 'master-buffalo.png'

8. Stage and Commit your changes
```bash
git add .
git commit -m "your message"
git push -u origin main
```

9. Create a Pull Request in the main branch of this repository.

10. Once approved, you'll see your favorite food spot or recipe in the website!

If you can't follow through on to create a pull request, you may follow this video as a guide https://youtu.be/rgbCcBNZcdQ?si=9ZoxdZv854o84xRp


## Thank you very much!
I hope with this experience you will now be able to use Git and Github for your personal, school, and collaborative projects!

Happy Coding!