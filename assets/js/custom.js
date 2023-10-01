const commentsContainer = document.getElementById('comments-face');

const newCommentText = document.getElementById('new-comment');
const addCommentButton = document.getElementById('add-comment-button');

addCommentButton.addEventListener('click', () => {
  const newComment = document.createElement('div');
  newComment.className = 'comments';

  const profileImage = document.createElement('div');
  profileImage.className = 'profile';
  profileImage.innerHTML = '<img src="assets\\img\\anonim.png">';

  const commentContent = document.createElement('div');
  commentContent.className = 'comment-content';
  commentContent.innerHTML = `
    <p class="name">
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Anônimo</font>
      </font>
    </p>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">${newCommentText.value}</font>
      </font>
    </p>
  `;

  const clearDiv = document.createElement('div');
  clearDiv.className = 'clr';

  const commentStatus = document.createElement('div');
  commentStatus.className = 'comment-status';
  commentStatus.innerHTML = `
    <span>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Curte·comente</font>
      </font>
      <img src="assets\\img\\like.png" width="15px" height="15px">
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">0</font>
      </font>
    </span>
    <font style="vertical-align: inherit;">
      <small>
        <font style="vertical-align: inherit;">·</font>
      </small>
      <small>
        <u>
          <font style="vertical-align: inherit;">Agora mesmo</font>
        </u>
      </small>
    </font>
    <small>
      <font style="vertical-align: inherit;"></font>
      <u>
        <font style="vertical-align: inherit;"></font>
      </u>
    </small>
  `;

  newComment.appendChild(profileImage);
  newComment.appendChild(commentContent);
  newComment.appendChild(clearDiv);
  newComment.appendChild(commentStatus);

  commentsContainer.insertBefore(newComment, commentsContainer.children[1]);

  newCommentText.value = '';
});





let answers = [];

function addAnswer(questionNumber, answer) {
  answers.push({ 
    question: questionNumber, 
    answer: answer
  });
}

document.querySelector('.survey_button.bq1[data-bq="1"]').addEventListener('click', function() {
  addAnswer(1, 'Masculino');
});

document.querySelector('.survey_button.bq1[data-bq="2"]').addEventListener('click', function() {
  addAnswer(1, 'Femenino');
});

document.querySelector('.survey_button.bq2[data-bq="1"]').addEventListener('click', function() {
  addAnswer(2, '18-29');
});

document.querySelector('.survey_button.bq2[data-bq="2"]').addEventListener('click', function() {
  addAnswer(2, '30-39');
});

document.querySelector('.survey_button.bq2[data-bq="3"]').addEventListener('click', function() {
  addAnswer(2, '40-49');
});

document.querySelector('.survey_button.bq2[data-bq="4"]').addEventListener('click', function() {
  addAnswer(2, '50+');
});

document.querySelector('.survey_button.bq3[data-bq="1"]').addEventListener('click', function() {
  addAnswer(3, '1');
});

document.querySelector('.survey_button.bq3[data-bq="2"]').addEventListener('click', function() {
  addAnswer(3, '2');
});

document.querySelector('.survey_button.bq3[data-bq="3"]').addEventListener('click', function() {
  addAnswer(3, '3+');
});

document.querySelector('.survey_button.bq4[data-bq="1"]').addEventListener('click', function() {
  addAnswer(4, 'Sim');
});

document.querySelector('.survey_button.bq4[data-bq="2"]').addEventListener('click', function() {
  addAnswer(4, 'Não');
});



document.getElementById('p_modal_button3').addEventListener('click', function (event) {

  for (let i = 0; i < answers.length; i++) {
    console.log(answers[i].answer);
}

  event.preventDefault();
});