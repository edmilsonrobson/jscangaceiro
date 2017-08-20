class MessageView extends View {
  template(model) {
    return model.text
      ? `<p class='notification is-info'>${model.text}</p>`
      : `<p></p>`;
  }
}
