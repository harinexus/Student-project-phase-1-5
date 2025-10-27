const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('messageInput');
const chatMessages = document.querySelector('.chat-messages');

sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const msg = messageInput.value.trim();
  if (!msg) return;

  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', 'sent');
  messageDiv.innerHTML = `<p>${msg}</p><span class="time">${getTime()}</span>`;
  
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  messageInput.value = '';
}

function getTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
