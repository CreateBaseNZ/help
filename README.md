# CreateBase Help Center

This is the codebase for the [CreateBase Help Center](https://help.createbase.co.nz).

The documentation here is intended to guide content authors or external collaborators in contributing or editing existing resources.

## Overview

The Help Center consists primarily of two types of documents:

- Articles - concise and short-form guides and tutorials that focus on certain features or jobs-to-be-done
- Resources - richer documents with features TBD

## Articles

Articles are written in [Markdown](https://www.markdownguide.org/) files using the Markdown syntax. In short, Markdown is a type of markup language that is simple and easy to use, while offering rich formatting options. But perhaps most importantly, anyone can learn it within a day and at it's core, helps scale information-dense websites.

Markdown files have a `.md` extension and is widely supported. For example, if you're reading this on GitHub, you'll be seeing a nicely formatted document instead of a plain text file (which is all the Markdown files really are - a text file with a bit extra).

Within this repository, articles are stored in the `/_articles` directory. If you view the files using GitHub, they will be formatted nicely (with GitHub Flavored Markdown). Of course, they look different when viewed in the Help Center, but GitHub provides an adequate preview while editing or pre-shipping.

All articles begin with a front-matter - a block containing metadata and parameters about the article. They look something like this:

```txt
---
title: "Article title"
category: "name-of-the-category"
subcategory: "Name of the subcategory"
excerpt: "A short blurb of the article."
---
```

Each field in the front-matter follow certain conventions:

- `title` - capitalise only the first word and nouns
- `category` - kebab-case matching the category URL
- `subcategory` - name of subcategory the article belongs to
- `excerpt` - should be brief and grammatically correct (including a full stop at the end of all sentences)

> 🚨 **Note**  
> Article files should also be named in kebab-case and will be the URL query of the article.

The body of the article is simply a regular Markdown file.

> 💡 **Hint**  
> Use this [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) for a quick reference to the Markdown syntax.

## Resources

👀 Coming soon!
