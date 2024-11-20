<!-- omit in toc -->

# Contributing to Redot Experimental Documentation

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions. 🎉

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
>
> - Star the project
> - Tweet about it
> - Refer this project in your project's readme
> - Mention the project at local meetups and tell your friends/colleagues

<!-- omit in toc -->

## Table of Contents

- [Styleguides](#styleguides)
- [Commit Messages](#commit-messages)
- [Join The Project Team](#join-the-project-team)

## Styleguides

### Commit Messages

To maintain clarity and consistency in the project’s history, we use [semantic commit messages](https://www.conventionalcommits.org/). Below are the rules for writing commit messages.

#### Format

```
<type>(<scope>): <subject>
```

`<scope>` is optional

#### Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

#### References:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html

<!-- omit in toc -->

### Branch Naming

#### Format

```
<type>/#<issueNumber>-<alias>
```

`issueNumber` is optional.

#### Example

```
feature/#1-init
^------^   ^---^
|          |
|          +---> issue's keyword
|
+-------> Type: or feat, chore, docs, fix, refactor, style, or test.
```

- `feat` or `feature`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)
-

#### References:

- https://gist.github.com/seunggabi/87f8c722d35cd07deb3f649d45a31082

<!-- omit in toc -->

## Attribution

This guide is based on the [contributing.md](https://contributing.md/generator)!
