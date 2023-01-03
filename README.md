
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

## Sad Mad, Glad

Sad - the quality of the api data we were able to obtain even after significant time spent searching. 

Mad - the lack of responsiveness from job aggregation and real estate API providers. We still have multiple requests that haven't even gotten and initial response

Glad - From the beginning the team worked well together on coming up with a plan and breaking the porject down into manageable chunks.
We worked well together providing support and feedback and all demonstrated a willingness to help out and be an additional set of eyes as needed.
Using the realtime collaboration tool was certainly very helpful in avoiding merge conficts and being able to share code in real time. 

## Project Description:
Using the Linked In API as a filter for javascript and developer jobs that can be displayed on the interactive Google map API

## User Story:
AS a web developer looking for a job

I want to determine what different states in the US are mostly looking for in regards to web development

So that I can identify where and what kind of job suits my set of skills

## Wireframe or sketch of the idea:


## APIs to be used:
https://jooble.org/api/about?ref=apilist.fun
https://api-ninjas.com/api/airports

## Rough breakdown of tasks:



## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- To give web developers a chance to find jobs aross the country tailored to their skillset, such as ourselves upon completion of the bootcamp.

- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- Using the Linked In API as a filter for javascript and developer jobs that can be displayed on the interactive Google map API.

- What problem does it solve?
- Makes job hunting a lot easier and personal for web developers.

- What did you learn?
- Everything

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

N/A

## Usage

Provide instructions and examples for use. Include screenshots as needed.

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

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Features

If your project has a lot of features, list them here.

