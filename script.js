const completeBtns = document.querySelectorAll('.complete-btn');
const taskToDo = document.getElementById('task-to-do');
const taskCompleted = document.getElementById('task-completed');
const activityBoard = document.getElementById('activity-board');
const clearHistoryBtn = document.getElementById('clear-history-btn');
const indexToBlog = document.getElementById('index-to-blog');
const date = new Date().toDateString().replace(' ', ', ');

indexToBlog.addEventListener('click', function () {
  window.location.href = '/blog.html';
});

const disableOnClick = function (param) {
  param.disabled = true;
  param.innerHTML = 'Completed';
  param.style.color = '#757575';
  param.style.backgroundColor = '#f5f5f5';
  param.style.cursor = 'default';
};

const updateActivityBoard = function (name, todayTime) {
  const p = document.createElement('p');
  p.innerHTML = `You have Complete The ${name} at ${todayTime}`;
  p.style.padding = '10px';
  p.style.backgroundColor = '#F4F7FF';
  p.style.borderRadius = '8px';
  activityBoard.appendChild(p);
};

for (const completeBtn of completeBtns) {
  completeBtn.addEventListener('click', function (e) {
    const completedTaskName =
      e.target.parentNode.parentNode.childNodes[1].childNodes[3].innerText;
    const btnToDisable = e.target;
    let taskCompletedNum = parseInt(taskCompleted.innerHTML);
    const time = new Date();
    const todayTime = time.toLocaleTimeString('us-EN');

    alert('Board Updated Successfully');
    taskToDo.innerHTML -= 1;
    taskCompletedNum += 1;
    taskCompleted.innerHTML = taskCompletedNum;

    disableOnClick(btnToDisable);
    updateActivityBoard(completedTaskName, todayTime);

    if (taskToDo.innerHTML == 0) {
      alert('Congrats!!! You have completed all the task!');
    }
  });
}

clearHistoryBtn.addEventListener('click', function () {
  activityBoard.innerHTML = '';
});
