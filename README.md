# archivio
meteor based application to manage physical archives following ISAD(G) standards

This is Archivio, a simple application for describing physical archives.
It is based on the requirements of the ISAD (G): General International Standard Archival Description.
	
I've written it using Meteor, the framework for web application. So it is written in HTML, Javascript, and few lines of CSS.
	
Let me show you the main features.
	
You can consult the archive, navigating the collapsable tree structure. I've chosen to follow  the minimum standard structure.
So you can find the archive, the fund, the serie, the folder and the unit.
Every element has its own description. Also in this case, you can find the minimum requested items for describing an element:
	
Level, title, signature, dates, physical description, producer.
	
You can also search (thanks to Meteor, istant search) in all the elements by the title.
	
And that's all for consultation. If you want to add or modify the elements, you need to log in. For the purpose of this project, I've implemented the e-mail login. The Google and Facebook login will be implemented after the deploying of the project.
	
Now, after the login, you can:
	
- insert a new element from scratch from the tab insert.
- insert an element under another specific element from the consultation tab, clicking on the arrow
- modify the description of a selected element
	
You can do the same operations by the search tab. Here you can see how to insert, and to modify.
	
Again, thanks to Meteor, you have a very very little latency in data updating, and you can work from several terminals on the same archive, sharing updates instantly.
	
Being essentialy Javascript, you just need a web browser, and Archivio can be used on Windows, Mac, Linux, tablet or smartphone.
	
There are many features that I would like to add, but I decide to present this first version: "if you’re not embarrassed when you ship your first version you waited too long" (Matt Mullenweg, founding developer of WordPress). 
I would like to receive feedbacks on this version. Anyway, I will put everything on Github, looking for co-programmers. https://github.com/vincenzorusso/archivio
	
I realy want to say thank you to all CS50 staff, to David Malan, and to all the beautyful people working for this course. You gave me an opportunity to learn, and an ongoing project.

I'm Vincenzo, and this was my final project for CS50.

