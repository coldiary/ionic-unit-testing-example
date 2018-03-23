# Ionic Unit Testing Exercise

(Forked from https://github.com/ionic-team/ionic-unit-testing-example)

This repository sets up a relatively recent ionic stack for an hybrid app, with the minimum requirements needed to run unit-tests and end-to-end tests.

*You can follow the original project linked above to read the orginal README guidance regarding testing techniques for ionic in particular.*

Getting Started with this Project
-----------

To get started, clone this repo, and run `npm install` in the root directory.

```sh
git clone https://github.com/coldiary/ionic-unit-testing-exercise.git ionic-testing
cd ionic-testing
npm install
```
Then, you should run `ionic serve` to make sure the project loads.

### Unit Tests

To run the tests, run `npm run test`.

See the example test in `src/app/app.component.spec.ts` for an example of a component test.

### End-To-End Tests (Browser-Only)

To serve the app, run `ionic serve`.

To run the end-to-end tests, run (while the app is being served) `npm run e2e`.

See the example end-to-end test in `e2e/app.e2e-spec.ts`.

What to do next
-----------

We expect you to get used to the code and how it works.

After that you are asked to add all the testing suites for unit testing as well as end-to-end testng the whole app. You can take as much time you need. And give back the work as one (or many if it suits your workstyle) pull-requests.

We require these user stories to be fully-tested :

- As a user, I want to see a list of todos
- As a user, I want to add a new todo
- As a user, I want to check a todo
- As a user, I want to uncheck a todo
- As a user, I want to edit the text of a todo
- As a user, I want to delete the text of a todo

Do not stick to this short list, the more the better.
