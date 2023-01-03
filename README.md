
## origin idea! 
https://www.cyberseek.org/heatmap.html

## Project Title:
Big_Job_Search

## Team Collaboration Insights 

To avoid the potential pit falls of the merge conflicts and the host of the other concerns that may arise with website development collaboration we used vizhub. Andrew found vizhub watching a youtube video  about D3 design. Vizhub allows for realtime collaboration amonst team members much the same as is available for the Microsoft suite of products via Microsoft teams. 

In the spirit of the the project we have made commits to our github repository though there are likely significantly fewer commits than would have had had github been our primary collaboration tool. 

https://vizhub.com/AndrewmLittlejohn/12db6a2e90e04c9f9feb327ffbdf0acc?edit=files&file=index.html&mode=mini 

## Project Review - post mortem-esque

We had a strong idea off the bat to use a job aggregation API and the Google Maps API for a Choropeth map using either click of hover functionality.
Finding a job aggregation API that would function in JavaScript and that we could access within our time constraints proved to be quite challening, we even open our ideas to real estate as it would work well with Choropeth map too. We finally found the Jooble API. https://jooble.org/api/about?ref=apilist.fun and got to work. Using the Jooble API has certainly strengthened our understanding of the importance of documentation. Only minimal documenation was avaiable via github, unfortuntely much of it was not applicable.  

What was provided via Jooble was quite different than the other APIs we had seen as the data was parsed in a much less helpful fashion, making it difficult to use to achieve much granularity.

The Choropeth maps, via both google and D3 proved to too difficult to use in conjunction with the information we were able to get from Jooble. With this we pivoted and used a api-ninjas.com api for airport data. While this did satisfy our need for two APIs the api-ninjas.com APIs had no meaningful documentation, again leading to less than ideal functionality and usabilty.

## Sad, Mad, Glad

Sad - the quality of the api data we were able to obtain even after significant time spent searching. 

Mad - the lack of responsiveness from job aggregation and real estate API providers. We still have multiple requests that haven't even gotten and initial response

Glad - From the beginning the team worked well together on coming up with a plan and breaking the porject down into manageable chunks.
We worked well together providing support and feedback and all demonstrated a willingness to help out and be an additional set of eyes as needed.
Using the realtime collaboration tool was certainly very helpful in avoiding merge conficts and being able to share code in real time. 

## Project Description:
Originally going to use the Linked In API as a filter for javascript and developer jobs that can be displayed on the interactive Google map API, but instead using the jooble API and api-ninjas API as a substitute.

## User Story:
AS a web developer looking for a job

I want to determine what different states in the US are mostly looking for in regards to web development

So that I can identify where and what kind of job suits my set of skills

## APIs to be used:
https://jooble.org/api/about?ref=apilist.fun
https://api-ninjas.com/api/airports


## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- To give web developers a chance to find jobs aross the country tailored to their skillset, such as ourselves upon completion of the bootcamp.

- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- To properly filter jobs fitting those with web development skills.

- What problem does it solve?
- Makes job hunting a lot easier and personal for web developers.

- What did you learn?
- A lot about each other and the struggles of finding compatible API's and how a deadline can add stress to that predicament.

## Table of Contents

- [origin idea!](#origin-idea)
- [Project Title](#project-title)
- [Team Collaboration Insights](#team-collaboration-insights)
- [Sad, Mad, Glad](#sad-mad-glad)
- [Project Description](#project-description)
- [User Story](#user-story)
- [APIs to be used](#apis-to-be-used)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

N/A

## Usage

Provide instructions and examples for use. Include screenshots as needed.

Select a Keyword to base your job search on which becomes a selectable drop down menu. Then select the state in which you desire your results from also in the form of a drop down menu and there is the magic in listed format.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative file path, add it to your README using the following syntax:

![alt text](assets/images/screenshot.png)


## Credits

- Robert Clemmer : https://github.com/rjclemmer
- Andrew Littlejohn: https://github.com/AndrewmLittlejohn
- Justin Perry: https://github.com/LilNewday

## License

MIT License

Copyright (c) 2022 Robert J Clemmer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---


