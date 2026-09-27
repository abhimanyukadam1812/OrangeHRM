/**
 * Test data / environment configuration.
 *
 * Values are read from environment variables (see .env.example) with the
 * public demo defaults as a fallback, so the suite runs out of the box while
 * still allowing a private OrangeHRM instance / different user to be targeted.
 */
export const testConfig = {
  /** Base URL of the target OrangeHRM instance. */
  baseUrl: process.env.ORANGEHRM_BASE_URL || 'https://opensource-demo.orangehrmlive.com',

  /** Relative path of the login screen. */
  loginPath: '/web/index.php/auth/login',

  /** Demo credentials (the public demo shows these on the login page). */
  username: process.env.ORANGEHRM_USERNAME || 'Admin',
  password: process.env.ORANGEHRM_PASSWORD || 'admin123',

  /** A deliberately wrong password for negative tests. */
  wrongPassword: 'definitely-wrong-password',
};
