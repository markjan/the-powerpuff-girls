This project was built as part of an interview assignment, described 
in docs/The Powerpuff Girls.pdf.

## Available Scripts

To view the project directory, you can run:

#### `yarn install`
and
#### `yarn start`

The project has two routes. The index, [http://localhost:3000](http://localhost:3000) 
displays an overview of the show 'the Powerpuff Girls' including a list of the episodes.
This route is rendered by  `routes/Show.js`.
Each episode in the list directs to a detail page, rendered by `routes/Episode.js`.
The data is loaded by dispatching a load action in `actions/show.js`, reduced to the state
`reducers/show.js`.

The time to spend on the assignment was 3-4 hours. I stayed within that time,
but that means there's a bunch of stuff I'd add but didn't.
* *Tests*: There is only one test, `Show.test.js`, and is non interactive one. 
I decided to skip the tests to be faster. 
* *Exception handling*: There is no error state, no error messages, no validation or checks 
on the API response, and so on. This ties into the lack of tests that allows you to program 
without worrying about exception paths.
* *Styling*: I adding minimal styling, the result is ugly as sin.
* *Functional*: You'd expect things like being able to swipe/browse through the episodes. 

