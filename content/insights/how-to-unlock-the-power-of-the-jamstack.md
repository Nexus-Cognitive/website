---
title: How to Unlock the Power of the Jamstack
description: Empower your team with modern tools and automated workflows through
  Nuxt.js, Netlify CMS, and GitHub.
cover: leaf-macro
publish: 2021-05-20T12:00:00+00:00
feature: false
authors:
  - adam-womble
categories:
  - application-development
  - front-end-development
  - jamstack
section: technology
---
Although “[Jamstack](https://jamstack.org)” might sound like it belongs on a breakfast menu, it is a powerful paradigm for simplifying web development, content authoring, and application deployment. Jamstack architecture combines JavaScript, Application Programming Interfaces (APIs), and pre-rendered Markup — the “Jam” in our stack; when paired with modern development tools, teams can rapidly build for the web of tomorrow and the browsers of today.

The bad news? Though its promised productivity is alluring, pulling together technologies for the Jamstack has left many with [“JavaScript Fatigue.”](https://css-tricks.com/javascript-fatigue/) The good news? [Nuxt.js](https://nuxtjs.org), [Netlify <abbr title="Content Management System">CMS</abbr>](https://www.netlifycms.org), and [GitHub](https://github.com) offer exceptional developer and author experiences that make leveraging the Jamstack for content publishing feel like magic.

## Nuxt.js: Empowering Developers

In the past, setting up rudimentary JavaScript applications felt like an exercise in medieval alchemy: ”add a bunch of [Babel](https://babeljs.io), then a dash of [Lodash](https://lodash.com), and finish with a whisk of [webpack](https://webpack.js.org) or a pinch of [Parcel](https://parceljs.org);” the jargon, alone, could leave your head spinning. Today, developers can create robust JavaScript applications with Nuxt.js in a single terminal command (like we did):

```bash
npx create-nuxt-app app-name
```

After creating Nuxt.js, the core team realized two things: many of them were writing the same boilerplate foundations for every application; what emerged as best practices in the Jamstack community didn’t have to be manually replicated every time. Instead, modern software should do one of the many things it does best — empower productivity by automating tedium; thus, they made [create-nuxt-app](https://nuxtjs.org/docs/2.x/get-started/installation#using-create-nuxt-app).

With create-nuxt-app, developers can select their desired targets and technologies with the stroke of a key. The best part? create-nuxt-app ties everything together for you (batteries included). [Static site generation](https://nuxtjs.org/docs/2.x/concepts/static-site-generation) for peerless performance through Content Delivery Network (CDN) edge server deployment? That’s an option. [GitHub Actions](https://github.com/features/actions) for easily-automated Continuous Integration (CI) / Continuous Delivery (CD) processes? You bet. The [Nuxt Content](https://content.nuxtjs.org) module for a Git-based, headless content management system (CMS) contributors love? Yup, that’s one, too. For the [Nexus Cognitive site](https://github.com/Nexus-Cognitive/website), we chose all three options to supercharge our development and content workflows.

The Nuxt Content module is easy for developers to love. Because it is [Git](https://git-scm.com)-based, it readily integrates with their favorite editors and workflows. Because it is Nuxt-based, they can edit content records (like blog posts) live with a double-click in development and retrieve data with a single line of JavaScript. Those productivity boosts are excellent for developers, but most application teams have authors in other disciplines.

## Netlify CMS: Empowering Authors

At first blush, Nuxt Content and Netlify <abbr title="Content Management System">CMS</abbr> appear to be vying for the same layer of your Jamstack. Both are Git-based. Both are headless content management sytems. The crucial difference between the two technologies is in content authoring: with Nuxt Content, developers must use editors like Visual Studio Code or rely on development servers; with Netlify <abbr title="Content Management System">CMS</abbr>, authors may use an intuitive, web-based interface from anywhere.

![Screenshot of the Netlify CMS Editorial Workflow Tab](/images/netlify-cms-editorial-workflow.png)

Writing code and writing content also share similarities in collaborative workflows. Developers write code, submit it for review, make revisions, then stage it for publication. Similarly, authors write content, submit it for review, make revisions, then schedule it for publication. Not surprisingly, enabling a familiar Editorial Workflow in Netlify <abbr title="Content Management System">CMS</abbr> requires one line in a configuration file:

```yaml
publish_mode: editorial_workflow
```

The creators of Netlify <abbr title="Content Management System">CMS</abbr> kept simplicity in mind, and they understand the overlaps between writing code and writing content offer benefits. On the surface, authors can manage the content lifecycle through an easy, drag-and-drop interface. Under the hood, Git manages the content lifecycle through lightweight branches. And, controlling content through Git enables offline work through repository distribution and content safety through historic versioning.

Ultimately, because Nuxt Content and Netlify <abbr title="Content Management System">CMS</abbr> leverage the same technologies while enabling diverse workflows, they are entirely well-suited for one another; in truth, they are allies (not adversaries). Because Nuxt.js statically generates web applications and Netlify <abbr title="Content Management System">CMS</abbr> manages their contents in Git, though, creating content isn’t the end of the story.

## GitHub: Empowering Teams

Managing application code in Git makes developer collaboration a breeze. Writing content in Netlify <abbr title="Content Management System">CMS</abbr> makes author collaboration seamless. What about linting, testing, building, and deploying updates to web applications?

Thankfully, when teams share remote repositories on GitHub, GitHub Actions make it possible to automate all those software workflows. With [webhooks](https://docs.microsoft.com/en-us/aspnet/webhooks/), GitHub Actions trigger <abbr title="Continuous Integration">CI</abbr> / <abbr title="Continuous Delivery">CD</abbr> processes on Git actions: when developers create Pull Requests, immediately lint and test their updates; when developers merge branches, build and deploy those updates.

![Screenshot of a GitHub Action successful completion for Azure Static Web Apps CI/CD](/images/github-actions-ci-cd.png)

These automated processes are critical to Git-based content authoring: with them, non-developers don’t need to know anything about software lifecycles. When authors publish their works through Netlify <abbr title="Content Management System">CMS</abbr>, their updates undergo the same automated processes as any others. And, with automated <abbr title="Continuous Integration">CI</abbr> / <abbr title="Continuous Delivery">CD</abbr> processes, Jamstack application teams develop new features instead of managing build processes.

Taken together, Nuxt.js, Netlify <abbr title="Content Management System">CMS</abbr>, and GitHub make Jamstack web development, content authoring, and application deployment easy because static site generation, distributed content workflows, and automated <abbr title="Continuous Integration">CI</abbr> / <abbr title="Continuous Delivery">CD</abbr> processes make collaboration simple. Do you want to leverage the simplicity and efficiency of the Jamstack to power your future successes? [Contact us](mailto:outcomes@nexuscognitive.com).
