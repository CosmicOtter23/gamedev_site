---
title: "Shadow Thief"
layout: post
permalink: shadow-thief
---

<div class="home-video">
  <video controls class="video-video">
    <source src="{{ '/assets/vid/shadow-thief-video.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support the video tag.
  </video>  
</div> 

In the summer of 2021, after I had completed my A-Level exams, my friends and I had some free time, so we decided to host a game jam among ourselves. We each chose two themes or topics and put them all into a randomiser and drew two each. The task was to make a game in a weekend that in some way was based around the two drawn themes. My two were “negative space” and “you are in a house that is not yours”. My first thought upon reading negative space was a stealth game, in which the player must stay in the dark sections of a level in order to avoid being seen. This idea worked conveniently with the other theme, as the player could be trying to avoid detection in someone’s house. 

![Image 1](assets/img/shadow_thief.jpg){:.post-image}

I started by creating a simple top-down game in which the player could move around the space. They had a torch that illuminated the space directly in front of them, showing them walls or enemies, but they were unaware of the layout of the rest of the current room. The goal of the game is to collect valuables to gain money and find keys to progress. I added patrolling enemies that could catch the player and send them to the entrance of the house. The player had three lives and would get a game over if they lost all three. The enemies could be seen wherever they were in the room by faint footsteps appearing from the darkness as they walked. 

![Image 2](assets/img/shadow_thief-2.jpg){:.post-image}

As every game I had made so far in Unity had been 2-dimensional, I hadn’t had much opportunity to explore lighting effect and saw this as a good opportunity to do so. It was interesting experimenting with light sources affecting 2D objects. Shadow Thief is a short game as there are only a few rooms, but I am happy with how it turned out. I even finished the base game with some time to spare so I added a shop room, in which the player could spend the money they had found to purchase new abilities, such as a dodge roll and improved torch strength.

![Image 3](assets/img/shadow_thief-3.jpg){:.post-image}