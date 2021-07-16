import 'testcafe';

import { usernameInput, passwordInput } from '../selectors/selectors';

fixture('Login').page('http://localhost:1234/login');

test('should have login form elements exist onthe page', async (t: TestController) => {
  await t.expect(usernameInput.exists).ok();
  await t.expect(passwordInput.exists).ok();
});

test('should be able to enter credential values correctly', async (t: TestController) => {
  await t
    .typeText(usernameInput, 'test@testing.com')
    .typeText(passwordInput, 'password');
  await t
    .expect(usernameInput.value)
    .eql('test@testing.com')
    .expect(passwordInput.value)
    .eql('password');
});
