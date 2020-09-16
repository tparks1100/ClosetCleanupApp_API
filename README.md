# ClosetCleanup App: A Description

This app is called Closet Cleanup. It is an app that tells you if you need to let go of that article of clothing that’s been sitting in your closet for years that you never wear. You probably should have given it up by now, but hey! Sometimes it helps to track these things.

## Setup Steps

1. [Fork and clone](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone) this repository.
1. Run `install command` to install all dependencies
1. Use `start command` to spin up the server.

## Important Links

- [Other Repo](www.link.com)
- [Deployed API](www.link.com)
- [Deployed Client](www.link.com)

## Planning Story

A user can sign up and create an account. A user can then sign in with their account credentials (username, email, password). A user can add an item to their "closet". User and clothing is a one to many relationship. Clothing attributes will contain the user ID, category (shirt, shoes, sweater, etc), clothing description, today's date, clothing status (checkbox that shows if item was worn or not worn) and a dropdown list with options sell or donate.
For each clothing item there will be an update, delete and advice button. The first two buttons are self-explanatory, but the advice button when clicked by the user will trigger a modal that has a simple message based off of the amount of days it has been from the date the item was created to today's date. If the item has been added for more than 30 days and has not been worn then the advice message will read "Item has not been worn in 30 or more days. Would you like to donate or sell?" Depending on the button clicked it will list the item in the donation list or the sale list. If the item has been created less than 30 days then the status button when clicked will read, "You have __ days to wear this item!"
I also have a third resource for Status, but I am not sure if that will be needed or not because we might be able to create virtuals in the Clothing schema to get the calculated results we want or we can can use a filter functionality!
There will be different list views that show "Listed Clothing", "Donated Clothing", "Clothing to wear", "Worn clothing" and "ClosetCleanup Items" (which shows all items created by all users) (ALL GET REQUESTS).


### User Stories

![alt text](https://i.imgur.com/lVrwhKW.png "ClosetCleanup User Stories")

### Technologies Used

- jQuery
- HTML/CSS
- Bootstrap
- Javascript

### Catalog of Routes

Verb         |	URI Pattern
------------ | -------------
GET | /resources
GET | /resources/:id
POST | /resources
PATCH | /resources/:id
DELETE | /resources/:id

### Unsolved Problems

- Still need to ....
- Would like to eventually ....

## Images

#### App Screenshot:
![screenshot](https://media.idownloadblog.com/wp-content/uploads/2017/07/Select-Instagram-story-to-save-to-iPhone.jpeg)

---

#### Wireframe:
![wireframe](https://lucidchart.zendesk.com/hc/article_attachments/360001080866/Facebook_Wireframe_-_New_Page.png)

---

#### ERD:
![alt text](https://i.imgur.com/wecRiY4.png "ClosetCleanup ERD")
