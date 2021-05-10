# TIE-23526 Web Architectures - TEAM LARG
## Documentation of the system
### Project group information
#### Group members
Jaakko Rajala K428219 jaakko.rajala@tuni.fi
Joni Nikki 431160 joni.nikki@tuni.fi 

### Which group member(s) will be responsible for what
* Jaakko Rajala: Frontend and backend implementation, documentation
* Joni Nikki: Backend implementation, documentation

### GitLab Issue Boards
The issue boards were used when developing the frontend of the application.
### Documentation of the created system
System architecture
The project incorporated much of the theory that was entertained in the Web Development 2 course. Docker Compose orchestrated the startup and shutdown of individual components listed in this section.
At principal importance was the configuration of all components being able to interface as illustrated by Figure 1, and such that the containers would come live in a predetermined manner. For instance, server A and server B depended on RabbitMQ being online and in addition, listening on port 15672. To achieve this, a script wait-for-it.sh was employed by server A and server B to delay their startup until RabbitMQ was responsive.
Architectural patterns
As is common in applications, we use several different types of architectural patterns to accomplish


#### Frontend: Redux Architecture


We decided to use react, and for react, we chose the redux architecture. Redux implements the idea of flux architecture, where user-driven events in the view create actions that are dispatched to the store- and the store itself updates the view/GUI in turn because of this. Additionally, redux introduces the idea of reducers and a centralized store for app state management. Reducers decide how the data changes exist, and the store holds the current state of the application.
Between frontend and backend: MVC
We took influences from the MVC-model, but there are certain modern principles such as React-Redux which break the normal conventions, where view is handled solely by the frontend, and model/controller by the backend, and all the data flows in a bidirectional manner. Due to React, and more precisely redux, certain processes like state management cause data to flow in one direction only.  

#### Backend: Microservices
By dedicating each of the different workloads (serve user, order brokerage, data storage...) their own containers, microservices architecture is employed. The communication between components is stateless: everything that is needed for the processing of individual messages (context, parameters...) is included within the messages themselves.
Components and their roles
  

Figure 1. The UML graph representing the relationships of the different components.

Server-A
Server A manages sandwich orders from the Frontend with the help of Swagger API. It adds new orders to the message queue “received-orders” of rabbitMQ, changes a new orders status to “Order received”, saves order details to the database. It responds to GET and POST requests regarding orders from the user, and updates order status upon receiving instructions to do so from RabbitMQ message queue “finished-orders”.
Server-B
Server B receives the messages from “received-orders” message queue through AMQP, and responds to it by changing the specified orders status to “Finished orders”, adding this updated order to the “finished-orders” message queue. Server-B serves as a way to “simulate” the process that would usually be done by the sandwich maker, who is supposed to see the order coming from the frontend and process it. 


RabbitMQ
  

Picture 1: RabbitMQ-management


A message broker transmitting messages between Server-A and Server-B.It uses the AMQP protocol as a means of communication - see the section under ‘used protocols’. RabbitMQ management is accessible at port 5672 through HTTP, user name “guest”, password “guest”. .
________________
Frontend
  

Picture 2 : BREADSHOP-frontend


Frontend of the application is the GUI, meant to be used by the typical user of the software.  To access the frontend, use port 3000 on localhost. As seen from Fig. 1, frontend interfaces with server-A through an HTTP REST API.
MongoDB
  

Picture 3. Mongo Express administrative interface.
MongoDB stores order info as supplied/retrieved by server-A. It uses the MongoDB protocol in interfacing with server-A and MongoDB express. MongoDB was exposed through the port 27017.
Mongo Express was used to observe the state of Mongo databases and associated collections. It is accessible at port 8081. It is meant as an administrative tool and is not to be exposed to end users. For administrative purposes, use “admin” as username, and “admin” as password when trying to access Mongo Express. 
Evaluating the architecture
Strengths (when compared to its purpose/task):
* Independency: Components are separated and do not depend on each other to function.
* Containerization: Thanks to Docker containers, we didn’t run into “it works on my machine” situations, where a commit would fail on another developer’s machine due to configuration mismatches in development environments.
* Rapid deployment: Since docker creates a container for every process and does not need  to boot an os for each component separately, deploying the project takes seconds. 
Weaknesses (when compared to its purpose/task):
* Performance: Uses perhaps excessive amounts of computational resources. Each container with a NodeJS application must download and install some overlapping packages.
* Overcomplicated frontend: For state management, we decided to use redux, but in truth, for an app as small as this, Redux is overkill. In case of React, we could’ve simply used useState or context to handle state and achieve a similar, albeit not as elegant result. 
* Coordination: We feel a “chewing gum fix” was used in the form of wait-for-it.sh. This didn’t feel an intuitive way to arrange the startups of containers.
Considering other architecture alternatives
Consider other architectures that would have been able to fulfill the system's described purpose and tasks. This part is where your group gets to explore architectures that could have been used to produce a system with the same or at least similar functionality. The sky is the limit here, get creative!
Used technologies
MongoDB
* How was it used? MongoDB was used by server-A to store order information into the “breadshop” database (see Picture 3), including  the type of bread ordered and the order status (awaiting confirmation, order received, finished orders...). MongoDB was configured such that the data persists across container sessions.
* What is our view of it? The JavaScript use site for MongoDB was expressive, in that the code did not become “bloated” by its usage. We found the document-based style convenient.
* Alternative to MongoDB: Any SQL database implementation, e.g., MySQL.
Docker
* How was it used? Docker was used for OS-level virtualization to containerize the microservices of our application. Each individual microservice (server-a, server-b, mongodb, rabbitmq) was implemented as a container which then exposed certain ports through which it could be interfaced with in a predetermined manner.
* What is our view of it? Docker, in conjunction with Docker Compose, was a marvelous tool to isolate various tasks into their own VM-esque subsystems, and to automatically start them up and shut them down in the correct order. However, it might’ve been an overkill for such a simple application.
* Alternative to Docker: Kubernetes, which is not perhaps a direct analogue, but instead helps in scaling the application to span multiple hosts.
Node
* How was it used? Node.js, along with NPM, was used in frontend, server-a, and server-b to automatically install the associated dependencies and run JavaScript.
* What is our view of it? Node.js lets the user use one programming language at both the frontend and the backend. This is very convenient as it saves developer time both in learning the language itself as well as learning what would be two library ecosystems – on this note, NPM’s rich package supply came in handy.
* Other technology alternative: Deno is an alternative JavaScript runtime. And, if considering an alternative to JS altogether, PHP.
RabbitMq
* How was it used? It was used as a middleware platform in the application to send and receive messages between servers (a and b). It implements the AMQP 0.9.1 natively. 
* What is our view of it? Since we needed there to be a way for two servers to send messages between each other in a reliable and persistent way, seemingly for the sole purpose of learning of such tools and making microservices in general. In this, RabbitMq served its purpose. However, in a real life sandwich shop scenario we could bypass the need for message brokers since we could simply do the same process without Server-B- and that is why using RabbitMQ felt somewhat pointless in this case. 
* Alternative to RabbitMq: Kafka. Unlike a RabbitMQs message queue, Kafka is a pub/sub system that simply appends the messages to a log and leaves them there until the consumer reads the message. It’s a so called “Dumb broker/smart consumer” approach, where RabbitMq is a “smart broker/dumb consumer”-type deal. However, Kafka appears to be more useful for massive data/high throughput cases, and that is why RabbitMQ would be more suitable for a simple application like ours. 
AMQP 0.9.1
* How was it used? Advanced Message Queuing Protocol(=AMQP) was used as the protocol for RabbitMQ message queue. 
* What is our view of it? Versatile message-oriented protocol that allows you to use queues. Queues are very helpful in situations where we cannot expect consumer services to be up at all times, as it ensures the messages get delivered. 
* Alternative to AMQP: MQTT According to our research, MQTT is much more simpler than AMQP as it provides no queues and was specifically designed for resource-constrained devices and low bandwidth. This is why MQTT would be sub-optimal for this project, and why AMQP would still be our go-to choise.
React
* How was it used? We used react as the framework/library of our frontend application. 
* What is our view of it? We felt like React was a very useful library, because it lets us choose the modules we wanted to use (in this case, Redux, Redux-thunk, Axios). It’s easy to get into, as it makes the code alot cleaner when using JSX, compared to vanilla js. . 
* Alternative to React: Any modern framework for javascript, such as Angular or Vue.js. Both of them are fully-fledged frameworks that are popular in today's world. However, from what I’ve been told, the learning curve to these frameworks is much steeper, and thus may not have been suitable with the timetable we had forthis project. 


Testing the project
Instructions to starting the project

$ git clone git@course-gitlab.tuni.fi:webarch-2021/losers-and-rejects-group.git
$ cd losers-and-rejects-group
$ sudo docker-compose up -d # start services in background (--detach)
$ cd frontend
$ npm install # install dependencies
$ npm start # start frontend
Instructions to testing the Backend
As illustrated by Fig.1, the backend concerns a lot of components, started up by Docker Compose in the previous subsection.
Following are the steps to place an order by interfacing with server-a and seeing the order within the MongoDB database. Due to witnessing the order status as “Finished orders”, we can see the order as having come a “full circle”.
Postman (https://www.postman.com/downloads/) is used to discover the API advertised by server-a (exposed at port 12345). Start Postman > import API by URL > type in “localhost:12345/api-docs”. At the left-side collection listing, click on “Make me a sandwich”, then go to Variables tab and set baseUrl to “http://localhost:12345/v1” and save (Ctrl+S). Now you can send requests to the endpoints listed under order. IDs of sandwiches are as follows: American sub 1, Club sandwich 2, Cheesesteak 3. For instance, in the screenshot below a trivial order is placed with one American sub (using the /order endpoint). Notice order status.
  
Seeing the order in the all orders listing (order status changed, granted you waited long enough):

Finding it by ID:

Now, open a web browser and navigate into localhost:8081 and give admin/admin as credentials.
  

Navigate into breadshop>order by document id.
  



Instructions to testing the Frontend
Once the frontend is up, the following processes are available to the user:
1. Making an order
2. Updating the order
3. Getting all orders


The following steps from 1-8 accomplish each process accordingly.

  

Frontend extra: Redux-dev-tools.
We have implemented the redux-dev-tools extension to our store for the curious mind who wants to see what sort of information is precisely stored in our applications state. To access it, you first need to install the extension (https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=fi) to your browser (provided link is for Chrome). The extension can then be used on the frontend.  
