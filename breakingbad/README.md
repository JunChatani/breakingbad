# Coding Test - Breaking Bad API

Write a program that returns the list of episodes from the Breaking Bad tv show, where the given characters have appeared together.

Use the [Breaking Bad API](https://breakingbadapi.com/) to retrieve the necessary information.

# Example

If we call the program with `Tuco Salamanca` the output must be the following

    S0106 - Crazy Handful of Nothin
    S0107 - A No-Rough-Stuff-Type Deal
    S0201 - Seven-Thirty-Seven
    S0202 - Grilled

# Inputs and Outputs

The argument of the program can be a `String` containing the full name of one character, or an `Array` of strings that contains multiple characters.
The output must be an `Array` of strings containing the episode title prefixed by the season and episode number. Below you can find one example of the expected format.

    S0101 - Pilot

## Tests

### Javascript

Tests are using Jest. To run them, use the following command:

```js
npx jest breaking-bad.spec.js
```

### Ruby

Tests are using Minitest. To run them, use the following command:

```ruby
ruby -Ilib:test test_breaking_bad.rb
```

### Python

Tests are using PyTest. The tests expect a `call` function that returns the list of episodes. To run them, use the following command:

```python
pytest test_breaking_bad.py
```