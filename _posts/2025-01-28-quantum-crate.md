---
title: "Quantum Crate"
layout: post
permalink: quantum-crate
---

<div class="home-video">
  <video controls class="video-video">
    <source src="{{ '/assets/vid/quantum-crate-video.mp4' | relative_url }}" type="video/mp4">
    Your browser does not support the video tag.
  </video>  
</div> 

This a project I completed for A-level computer science coursework. The project brief was to create a piece of software that demonstrated the implementation of complex algorithms. I was given a list of algorithms that I could potentially try to integrate into my project, and I could choose which form of project would best present them. Many students chose to create database systems as we had learned about these during the course. However, I decided to make a game because I already had some experience with Unity so would not need to learn any new software from scratch, and I would be able to implement complex algorithms such as A* pathfinding, pixel perfect collision systems and finite state machines. Because the goal of the project was to showcase our understanding of complex algorithms, I thought it best to make my game a genre I was familiar with, so I started to make another platform-based shooter like snowball fight. The difference in this game was that it would be a roguelike single-player game, in which the player fights waves of enemies instead of another player. 

![Image 1](assets/img/quantum_crate.jpg){:.post-image}

I began by creating enemies that fly toward the player, simply using Unity’s inbuilt pathfinding system to navigate around obstacles so I could focus on creating a functional game. I made three main types of enemies, adding ones that could shoot at the player and ones that could only move horizontally. A key component of the game was the weapon system. I created a base weapon for the player to begin with from which all other weapons inherited, with individual statistics to make them unique. For example, a shotgun has low range and low damage but shoots many bullets with each fire and a rocket launcher shoots very slowly but explodes on impact. I made crates containing weapons for the player to pick up. These spawned in random locations at set intervals and picking one up would change the player’s weapon. 

![Image 2](assets/img/quantum_crate-2.jpg){:.post-image}

I made enemies spawn in waves of increasing difficulty with a random element so each run would be different from the previous one. The goal of the game at this point was to simply get a high score, which would be gained by killing many enemies. At this point, I had a fully functioning game so decided to work on the A* pathfinding. This was the biggest challenge of the project as it required the creation of a grid for each level layout, detection of obstacles in the level, the enemies determining the shortest path to the player, moving along this path, and updating the path as the player and enemies move.

![Image 3](assets/img/quantum_crate-3.jpg){:.post-image}

The algorithm for pixel perfect collision was another difficult task as it required a large amount of code. The third complex algorithm, a Finite State Machine (FSM), I implemented with a boss section when the player completed a certain number of waves. This boss’ actions were determined by the FSM, cycling through spawning lasers, throwing projectiles, spawning enemies, and healing himself. The state was dependent on factors such as the boss’ health or the position of the player. The enemies dropped coins when they were killed, and I added a shop for the player to purchase hats for their character to wear during the game. I also included a progression system, allowing players to unlock new weapons as they progressed further in the game. Finally, I added powerups for the player. They would spawn intermittently and provide the player with abilities such as double points or double damage.

![Image 4](assets/img/quantum_crate-4.jpg){:.post-image}