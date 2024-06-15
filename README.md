# Tic-Tac-Toe Game with AWS Elastic Beanstalk and Fargate

**Name:** Khalid Muzaffar 
**Group:**  Group 3 
**Date:** 15-06-2024

## Architecture

The architecture for deploying the Tic-Tac-Toe application using AWS Elastic Beanstalk is designed to leverage the platform's ability to manage, scale, and monitor applications with minimal manual intervention. The primary components and their interactions are described below:

**Elastic Beanstalk Environments:**

Two separate environments are created within Elastic Beanstalk: one for the frontend and one for the backend.
Each environment runs independently but communicates with each other through defined endpoints.

**Frontend Environment:**
The frontend environment hosts the static files of the application, including HTML, CSS, and JavaScript.
It uses Nginx as the web server to serve the static content and proxy API requests to the backend environment.
The environment is configured to expose port 80 to serve the application over HTTP.

**Backend Environment:**
The backend environment runs the Node.js server application that handles API requests, user authentication, and game logic.
The backend is also configured to use Socket.IO for real-time communication between players.
This environment exposes port 3000 to handle incoming API requests and socket connections.


### Description
The developed infrastructure includes two configurations for running the containerized Tic-Tac-Toe application:
- **Elastic Beanstalk Configuration:** Utilizes AWS Elastic Beanstalk to deploy and manage the application.
- **Fargate Configuration:** Uses AWS Fargate to run the application within Amazon ECS.

### Configured AWS Services

#### Elastic Beanstalk

**ECR:**

![image](https://github.com/pwr-cloudprogramming/a7-KhalidMuzaffar269553/assets/149905898/ae790700-3dc9-467b-b69a-317ce6c11312)

**Frontend:**

![image](https://github.com/pwr-cloudprogramming/a7-KhalidMuzaffar269553/assets/149905898/a4197db7-12d5-4027-ad8f-24d63db71805)

**Backend:**

![image](https://github.com/pwr-cloudprogramming/a7-KhalidMuzaffar269553/assets/149905898/ea8a1626-f1a6-4ca0-9091-bbc4e1f87f90)


**Application Running:**
![image](https://github.com/pwr-cloudprogramming/a7-KhalidMuzaffar269553/assets/149905898/3f1893bf-b4e1-4df0-a216-3d0caddecccf)



#### Fargate (ECS)
![Fargate Config](#)  <!-- Replace with Fargate (ECS) configuration screenshot -->

### Application Running
![Application Running](#)  <!-- Replace with screenshot of your application running -->

## Reflections

### What did you learn?
During this project, I learned how to deploy a containerized application using AWS Elastic Beanstalk and AWS Fargate. The experience highlighted the differences in managing application deployment and scaling using these services.

### What obstacles did you overcome?
One of the main obstacles was configuring the network and security settings to ensure the application could communicate properly in both environments. Additionally, understanding the deployment process for Elastic Beanstalk and Fargate required careful attention to the specific requirements and configurations of each service.

#### Problems Faced with Elastic Beanstalk
1. **Communication Between Frontend and Backend:**
   - **Problem:** Setting up the frontend to correctly communicate with the backend was challenging, especially when both were deployed separately on Elastic Beanstalk environments. This led to initial issues with CORS and incorrect routing.
   - **Solution:** Ensured that the backend API URL was correctly referenced in the frontend code and configured Nginx to handle the proxying correctly.
   
2. **Nginx Configuration:**
   - **Problem:** Misconfigurations in the Nginx setup led to issues where static files were not served correctly or API requests were not proxied to the backend properly.
   - **Solution:** Adjusted the Nginx configuration file to properly route requests and serve static files. This included setting the correct paths and ensuring the proxy settings matched the backend server.

3. **Environment Variables Management:**
   - **Problem:** Managing environment variables securely and ensuring they were correctly picked up by both the frontend and backend was complex.
   - **Solution:** Used Elastic Beanstalk’s environment properties feature to set environment variables and updated the application code to access these variables correctly.

4. **Deployment Errors:**
   - **Problem:** Encountered deployment errors due to incorrect Docker configurations and dependencies not being installed properly within the Docker containers.
   - **Solution:** Reviewed and updated the Dockerfiles to ensure all dependencies were correctly installed and the containers were configured properly.

### Was there something that surprised you?
I was pleasantly surprised by how AWS Elastic Beanstalk abstracts much of the underlying infrastructure management, making it easier to deploy applications quickly. On the other hand, AWS Fargate provided more fine-grained control over the container environment, which was beneficial for specific use cases. Another surprising aspect was the robustness of AWS's logging and monitoring tools, which greatly facilitated troubleshooting and performance tuning.

---

*Note: Replace the placeholder text and image links with your actual project details and screenshots.*
