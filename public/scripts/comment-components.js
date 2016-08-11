
var CommentList = React.createClass({
  render: function () {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
         // this.props.author^^^, this.props.children^^^
        <Comment author="Jordan Walke">This is one *more* comment</Comment>
                                                    //^^^markdown
      </div>
    );
  },
});

var CommentForm = React.createClass({
  render: function () {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  },
});

var Comment = React.createClass({
  render: function () {
    var md = new Remarkable();
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {md.render(this.props.children.toString())}
      </div>
    );
  },
});
