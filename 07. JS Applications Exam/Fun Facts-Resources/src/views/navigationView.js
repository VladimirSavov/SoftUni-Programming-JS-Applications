import { html } from '../../node_modules/lit-html/lit-html.js';

const guestLinks = html`
    <a href="#">Login</a>
          <a href="#">Register</a>
`;
const navigationTemplate = () => html`
    <nav>
        <div>
          <a href="#">Fun Facts</a>
        </div>

        <!-- Logged-in users -->
        <div class="user">
          <a href="#">Add Fact</a>
          <a href="#">Logout</a>
        </div>

        <!-- Guest users -->
        <div class="guest">
          <a href="#">Login</a>
          <a href="#">Register</a>

        </div>
      </nav>
`;

export const navigationView = (ctx) => {
    return navigationTemplate();
}