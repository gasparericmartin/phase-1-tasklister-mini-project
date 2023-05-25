document.addEventListener("DOMContentLoaded", () => {
  
  document.getElementById('create-task-form').addEventListener('submit', function (e) {
    submitter(e)
  })
  
 })


function submitter(e) {
  e.preventDefault()
  const newText = document.getElementById('new-task-description').value
  if (newText) {
    const textInsert = document.createElement('p')
    const button = document.createElement('button')
    button.addEventListener('click', function (e) {
      e.target.parentNode.remove()
    })
    button.textContent = 'x'
    textInsert.textContent = newText
  
    textInsert.appendChild(button)

  
  
    document.getElementById('tasks').appendChild(textInsert)
  }
  
}





