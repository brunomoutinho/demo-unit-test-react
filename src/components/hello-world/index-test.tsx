import React from 'react';
import { describe } from 'riteway';
import render from 'riteway/render-component';
import match from 'riteway/match';
import HelloWorld from './index';

describe('Hello World component', async (assert) => {
  const $ = render(<HelloWorld />);
  const contains = match($.html());
  const text = 'Hello World'
  const expected = text;
  const actual = contains(text);
  assert({
    given: 'the hello world component',
    should: 'render the hello world string',
    actual,
    expected,
  })
})