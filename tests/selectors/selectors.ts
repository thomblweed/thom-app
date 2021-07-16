import { Selector } from 'testcafe';

const usernameInput = Selector('input[data-testId="email-testId"]');
const passwordInput = Selector('input[data-testId="password-testId"]');

export { usernameInput, passwordInput };
