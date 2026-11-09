asd https://it-portfolio-1076974353704.us-central1.run.app

IA3 Vibe Coding
Project Overview and AI Tools Used
For this project, I created a personal IT portfolio website that highlights my professional experience, certifications, technical skills, and leadership background. I wanted to build something I could eventually use professionally while also learning more about web development. I primarily used ChatGPT with OpenAI GPT-6 to help plan the website, generate code, and troubleshoot issues. I also worked with Claude Code during the development process. The website was built using React, Vite, JavaScript, and Express. I used Visual Studio Code to work with the files, GitHub for version control, and Google Cloud Run to host the finished website.

Using AI for Development
One of the biggest differences between this assignment and IA2 was how I approached the development process. In IA2, I had to write the Python functions myself without using AI-generated code. That forced me to spend more time understanding the syntax and figuring out why something wasn't working. With this assignment, I could explain what I wanted in normal language and have AI help generate the code. It made the process faster, but I also noticed that I didn't always understand every change AI was making.

Since my background is primarily in IT infrastructure and networking, I don't have much experience building websites. I started with fairly general prompts explaining that I wanted a professional portfolio highlighting my experience, certifications, technical skills, and projects. From there, I worked through smaller changes instead of trying to build everything at once.

One thing that surprised me was how much AI could accomplish with relatively simple instructions. I didn't need to explain exactly how to write each component. I could describe what I wanted the website to look like, review the results, and ask for adjustments. However, I also learned that getting AI to generate something doesn't necessarily mean it's going to be exactly what you want the first time.

Changes and Improvements
I ended up changing quite a few things as I worked through the website. One of my main goals was making sure the content actually reflected my professional background instead of looking like a generic portfolio template. I updated the sections covering my experience, certifications, technical skills, and leadership background.

I also wanted to include images representing different areas of my experience, including networking, cybersecurity, and leadership. One issue I ran into was that the images were different sizes, which made the project sections look uneven. This one problem took me over an hour to fix.

As I worked through these changes, my prompting became more specific. Initially, I was asking AI to build entire sections of the website. Later, I was asking questions about individual problems or specific changes. I found that providing a clear description of what wasn't working usually gave me better results than asking AI to improve something without much direction.

Challenges and Troubleshooting
The biggest challenge was getting everything working together outside my local computer. Building the website was one thing, but deploying it introduced several additional steps that I wasn't completely familiar with.

When deploying to Google Cloud Run, I ran into permission errors that prevented the application from building successfully. I used AI to help understand the error messages and figure out which permissions needed to be changed. Once I got the website deployed, I noticed that the images weren't displaying even though they worked locally. After reviewing the Dockerfile, I found that the public folder containing the images wasn't being included in the container. I updated the Dockerfile, redeployed the application, and confirmed the images were working.

I also ran into issues uploading the project to GitHub. Initially, I tried using my regular GitHub password, which wasn't supported. After creating a personal access token, I encountered another permission issue involving the GitHub Actions workflow. Working through those problems helped me better understand GitHub authentication and how the repository connects to the development process.

AI was probably most helpful during troubleshooting because I could provide an actual error message and get an explanation of what was happening. Where I found it less helpful was when I was following multiple instructions without fully understanding why I was doing them. There were times when I had to go back and figure out which steps I had already completed. That was more of an issue with how I was managing the process, but it showed me that AI doesn't replace the need to understand what you're doing.

What I Learned and Would Do Differently
The biggest thing I learned is that AI can make development much easier, but it doesn't eliminate the need to understand the fundamentals. Comparing IA2 and IA3, I think both approaches have value. Writing code yourself helps build a better understanding of how things work, while AI can help speed up development and solve problems you might otherwise spend hours researching.

One thing I would improve on my end is taking better notes throughout the process. When following instructions involving multiple steps and different tools, I sometimes found myself going back to figure out what I had already completed. Keeping a running document of prompts, changes, and problems would have made the process easier to follow.

I can see myself using AI more in future projects, especially for scripting, automation, and other tasks related to my IT career. If I completed this project again, I would spend more time planning upfront and testing smaller changes individually. 
