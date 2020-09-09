import consumer from "./consumer"

consumer.subscriptions.create("MessageChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
  //   const html = 
  //   `<div class="message-time">
  //     ${data.created_at}
  //   </div>
  //   <div class="message-record">
  //     <p>"<a href="/users/#{@message.user_id}', class: "user-messages"> ${data.user.name}</a>:${data.content.text}"</p>
  //   </div>`;
  //   const messages = document.getElementById('message');
  //   const newMessage = document.getElementById('messages');
  //   messages.insertAdjacentHTML('afterend', html);
  //   newMessage.value='';
  // }
});
