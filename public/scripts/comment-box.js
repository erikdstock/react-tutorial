 var CommentBox = React.createClass({
  render: function () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>

      //  React.createElement('div', {className: "commentBox"},
      //    "Hello, world! I am a CommentBox."
      //  )
    );
  },
});
ReactDOM.render(
  <CommentBox />, // same as React.createElement(CommentBox, null),
  document.getElementById('content') // 2nd arg is root element for rendering
);
