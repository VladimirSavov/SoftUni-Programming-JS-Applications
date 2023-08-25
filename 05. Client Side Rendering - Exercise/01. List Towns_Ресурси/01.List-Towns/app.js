import { html, render } from '../node_modules/lit-html/lit-html.js';

document.getElementById('btnLoadTowns').addEventListener('click', getTowns);

const listTemplate = (data) => html`
<ul>
    ${data.map(town => html`<li>${town}</li>`)}
</ul>
`

function getTowns(event) {
    event.preventDefault();
    const root = document.getElementById('root');
    const towns = document.getElementById('towns').value.split(', ');

    const ul = document.createElement('ul');

    const result = listTemplate(towns);

    render(result, root);
}