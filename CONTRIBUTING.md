If you don't know where to start, take a look at the [Roadmap][Roadmap] of proposed changes for the next release.

# How You Can Help

## Non-code contributions

- If you'd like to edit/update the documentation, submit a Pull Request
- If you'd like to start a dialog, post a new [Discussion][Discussion]
- If you'd like to mention a project where jquery is used, post a comment in the [Mentions][Mentions]
- If you'd like to assist other users of jquery-csv, answer qustions on [StackOverflow][StackOverflow]
- If you'd like to promote this project, write articles or blog posts and link back to the project

## Code Contributions

- If you'd like to add a new example or test, submit a [Specification][Specification]
- If you'd like to propose a new feature, submit a [Feature][Feature] request

**DO**

- Follow the [Forking Workflow][Forking Workflow]
   1. Fork the project
   2. Clone your fork
   3. Add a remote pointing to the origin repo
   3. Create a new `feature` branch
   4. Checkout the `feature` branch
   5. Commit your changes
   6. Rebase your changes onto the latest w/ `git pull --rebase`
   7. Post a PR comparing `origin/master` to the `fork/feature`
- Provide tests where applicable
- Provide documentation updates that apply to the changes
- Follow the current style of the project

**Don't**

- Group multiple features into a single PR
- Co-mingle whitespace changes with code changes
- Make superficial changes (ie style/structure) to existing code
- Make API breaking changes unless they're clearly documented in a Specification

[Roadmap]: https://github.com/evanplaice/jquery-csv/issues/92
[Discussion]: https://github.com/evanplaice/jquery-csv/issues/new?template=DISC_TEMPLATE.md&title=disc()&labels=discussion
[Mentions]: https://github.com/evanplaice/jquery-csv/issues/97
[StackOverflow]: https://stackoverflow.com/questions/tagged/jquery-csv?mixed=1
[Feature]: https://github.com/evanplaice/jquery-csv/issues/new?template=FEAT_TEMPLATE.md&title=feat()&labels=feature
[Specification]: https://github.com/evanplaice/jquery-csv/issues/new?template=SPEC_TEMPLATE.md&title=spec()&labels=specification
[Forking Workflow]: https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow
