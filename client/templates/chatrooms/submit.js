Template.submit.events({
  'submit form':function(e){
    e.preventDefault();

    var chat = {
      content: $(e.target).find('[name=content]').val(),
      //roomid:
      author: Meteor.user().emails[0].address,
      timestamp: new Date()

    };


    chat._id = Chats.insert(chat);
  }
})