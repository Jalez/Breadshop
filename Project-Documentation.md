<!-- @format -->

# TIE-23526 Web Architectures - TEAM LARG

## Documentation of the system and group's work

When finished:

- turn this documentation in to a single PDF file
- Provide the pdf file in the root directory of our repo
- Do not touch documentation-folder

You may use Markdown (.md) or any other documentation method to keep track of documentation during the project, as long as it can be accessed from the repository.

### Required documentation (delete once done)

The documentation required includes the project plan, architectural description of the system, the technologies used, the progress of the group's work, as well as what the group's members learned during this project. Groups also must document where the components of their system are placed in the repository, and how the course personnel can deploy the group's system on their own computers when testing it.

Groups can of course add any extra documentation they feel is useful, and if course personnel finds the documentation useful and well written, this extra documentation will affect the points positively.

# Project plan

The following subsection tell what should be documented under _Project plan_ section.

## Course project group information

### Group members

Jaakko Rajala K428219 jaakko.rajala@tuni.fi

### Group name

Losers and Rejects Group

### GitLab repo URL

https://course-gitlab.tuni.fi/webarch-2021/losers-and-rejects-group

## Working during the project

### Initial timetable

- Week 1: Server A (Swagger API implementation, db?)
- Week 2: message queue ja Server B.
- Week 3 : Frontend (React)
- Week 4 : Finishing touches

### Which group member(s) will be responsible for what

- Jaakko Rajala: Frontend and backend implementation, documentation
- Joni Nikki: Backend implementation, documentation

Initially, it was decided that we'd work on each individual task together, so that everyone would get some practise with these technologies. Yet, seeing as 2/3rds of the group had never used frameworks like react, and none had used RabbitMq or Docker in the past, this approach may have been too daunting.

### How much time each group member promises to group project work per week. Note down each members promise for committed hours for this project

No specific amounts were discussed, but initially group members promised to devote their time during:

Joni Nikki: Evenings and weekends
Otto Leiwo: Evenings
Jaakko Rajala: Evenings and weekends

### GitLab Issue Boards

The issue boards were used when developing the frontend of the application.

# Documentation of the created system

Following describes what needs to be

Those groups that use other technologies/architecture than described need to apply these instructions to fit their choices.

# System architecture

## What was learned

## Architectural patterns

Using proper architectural descriptions and UML diagrams would be appropriated

### Components and their roles

#### Server-A

What was its role?
What was learned?
Communication with the system/external components?
Anything else important

#### Server-B

What was its role?
What was learned?
Communication with the system/external components?
Anything else important

#### RabbitMq

What was its role?
What was learned?
Communication with the system/external components?
Anything else important

#### Frontend

What was its role?
What was learned?
Communication with the system/external components?
Anything else important?

Describe the system with enough detail, so that a technical person with no prior knowledge of the system would be able to understand it. Use images and diagrams whenever you are able.

### Evaluating the architecture

Strengths (when compared to its purpose/task):

- Weaknesses (when compared to its purpose/task):
-

(Its Purpose/task (as described in the assignement): )

## Considering other architecture alternatives

Consider other architectures that would have been able to fulfill the system's described purpose and tasks. This part is where your group gets to explore architectures that could have been used to produce a system with the same or at least similar functionality. The sky is the limit here, get creative!

# Used technologies

## Node

- How was it used?

## RabbitMq

- How was it used?
  It was used as a middleware platform in the application to send and receive messages between servers (a and b). RabbitMq
- What is our view of it?

### Alternative to RabbitMq: Kafka

Another open source pub/sub system, Kafka is a newer tool

## AMQP

- How was it used?
  Advanced Message Queuing Protocol
- What is our view of it?
- Alternative to AMQP: MQTT
  According to our research, MQTT is much more simpler than AMQP as it provides no queues and was specifically designed for resource-constrained devices and low bandwidth. This is why MQTT would be sub-optimal for this project, and why AMQP would still be our go-to choise.

## React

- How was it used?
- What is our view of it?
- Alternative to React: Vue.js OR alternative that would have been more interesting to the group?

### Alternative to React: Vue.js,

## "Used technology template"

- How was it used?
- What is our view of it?
- Alternative to other technology:
- alternative that would have been more interesting to the group?

# Testing the larg project

Here group describes how course personnel can test their system. A complete HOWTO on running your system, with easily copy-pastable examples.

## Instructions to Starting the Backend

### Install Docker Desktop:

#### Windows:

https://docs.docker.com/docker-for-windows/install/

#### Apple

### Start the project Backend

1. Go to the project folder cloned to your system
2. Open the root folder aptly named "losers-and-rejects-group" with your command prompt/terminal.
3. Type "docker compose up" to start the backend.

## Instructions to Starting the Frontend

## Instructions to test the required functionalities

### Instructions to make the order

### Instructions to Update the order

### Instructions to get all orders

### Frontend extra: Redux-devtools.

# Learning during the project

## What did I learn? Jaakko Rajala

- React-Redux: What did I learn?
- Material-ui: What did I learn?
- RabbitMQ: What did I learn?
- Docker: What did I learn?
- Teamwork: This was probably the most challenging part of this course. It's clear to me that weekly if not daily meetings are essential in maintaining a steady workflow. Using agile methods like scrum would've made the biggest difference in ensuring this project would be completed on time.

A group learning diary, here group's members note down the learning during the project. Short descriptions of who, what, and when is sufficient. What could be a link to GitLab Issue, that has more information.

This information is interesting to the course personnel, too. We get to see if the project enabled learning as designed.

## Coding during the project

- Add comments where necessary!
-
