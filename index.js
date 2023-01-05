let id = 0;

const input = document.querySelector('input');
const submit = document.querySelector('button');
const ul = document.querySelector('ul');


submit.addEventListener('click', () => {
    const li = document.createElement('li');
    li.id = id++;
    const text = document.createTextNode(input.value + ' ');
    const button = document.createElement('button');
    button.append('Delete');
    button.addEventListener('click', () => {
        ul.removeChild(li);
    });
    li.append(text);
    li.append(button);
    ul.append(li);
    input.value = '';
})

