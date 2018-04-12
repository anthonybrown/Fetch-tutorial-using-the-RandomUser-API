'use strict';

const ul = document.getElementById('authors')
const url = 'https://randomuser.me/api/?results=30'

function createNode (element) {
  return document.createElement(element)
};

function append (parent, el) {
  return parent.appendChild(el)
};

fetch(url)
  .then((res) => res.json())
  .then(function (data) {
  const authors = data.results
    return authors.map(function (author) {
      const li = createNode('li')
      const img = createNode('img')
      const span = createNode('span')
      const email = createNode('email')
      const cell = createNode('phone');
      img.src = author.picture.large
      span.textContent = `${author.name.first} ${author.name.last}`
      email.textContent = `${author.email}`
      cell.textContent = `${author.cell}`

      append(li, img)
      append(li, span)
      append(li, email)
      append(li, cell)
      append(ul, li)
    })
  })
  .catch((err) => {
    console.log(JSON.stringify(err));
  })
	
	
	// 'use strict';

	// function createNode(element) {
	// 	return document.createElement(element);
	// }
	
	// function append(parent, el) {
	// return parent.appendChild(el);
	// }
	
	// const ul = document.getElementById('authors');
	// const url = 'https://randomuser.me/api/?results=10';
	// fetch(url)
	// .then((resp) => resp.json())
	// .then(function(data) {
	// let authors = data.results;
	// return authors.map(function(author) {
	// 	let li = createNode('li'),
	// 			img = createNode('img'),
	// 			span = createNode('span');
	// 	img.src = author.picture.medium;
	// 	span.innerHTML = `${author.name.first} ${author.name.last}`;
	// 	append(li, img);
	// 	append(li, span);
	// 	append(ul, li);
	// })
	// })
	// .catch(function(error) {
	// console.log(JSON.stringify(error));
	// });
