var comments = [];
var $formComment = document.querySelector('.comment-form');
$formComment.addEventListener('submit', function (event) {
  event.preventDefault();


  var $name = document.querySelector('#name'); 
  var $content = document.querySelector('#content');
  
  var name = $name.value;
  var content = $content.value;
  var date;
  var currDate = new Date();
  
  date = currDate.getDate() + ' / '+ (currDate.getMonth()+1) + ' / ' + currDate.getFullYear();
  var comment = {
    name,
    date,
    content,
  };

  comments.push(comment);

  updateComments();
});

function updateComments() {
  var $comments = document.querySelector('.comments');
  $comments.innerHTML = '';

  for (var comment of comments) {
    var item = `
      <li>
        <strong>Comment:${comment.name}</strong>
        <span>${comment.date}</span>
        <p>${comment.content}</p>
      </li>
    `;

    $comments.innerHTML += item;
  }
}

updateComments();

