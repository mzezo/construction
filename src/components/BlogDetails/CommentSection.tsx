function CommentSection() {
  return (
    <div className="clear m-b30" id="comment-list">
      <div className="comments-area" id="comments">
        <h6 className="comments-title">8 Comments</h6>
        <div>
          <ol className="comment-list">
            <li className="comment">
              <div className="comment-body">
                <div className="comment-author vcard">
                  {" "}
                  <img
                    className="avatar photo"
                    src="/images/testimonials/pic1.jpg"
                    alt=""
                  />{" "}
                  <cite className="fn">
                    Vestibulum imperdiet nibh vel magna
                  </cite>{" "}
                  <span className="says">says:</span>{" "}
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  vitae neqnsectetur adipiscing elit. Nam viae neqnsectetur
                  adipiscing elit. Nam vitae neque vitae sapien malesuada
                  aliquet.{" "}
                </p>
                <div className="comment-meta">
                  {" "}
                  <a href="javascript:void(0);">
                    October 6, 2015 at 7:15 am
                  </a>{" "}
                </div>
                <div className="reply">
                  {" "}
                  <a href="javascript:void(0);" className="comment-reply-link">
                    Reply
                  </a>{" "}
                </div>
              </div>
              <ol className="children">
                <li className="comment odd parent">
                  <div className="comment-body">
                    <div className="comment-author vcard">
                      {" "}
                      <img
                        className="avatar photo"
                        src="/images/testimonials/pic2.jpg"
                        alt=""
                      />{" "}
                      <cite className="fn">
                        Fashionable New York Women in 2017
                      </cite>{" "}
                      <span className="says">says:</span>{" "}
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nam vitae neque vitae sapien malesuada aliquet. In viverra
                      dictum justo in vehicula. Fusce et massa eu ante ornare
                      molestie. Sed vestibulum sem felis, ac elementum ligula
                      blandit ac.
                    </p>
                    <div className="comment-meta">
                      {" "}
                      <a href="javascript:void(0);">
                        October 6, 2015 at 7:15 am
                      </a>{" "}
                    </div>
                    <div className="reply">
                      {" "}
                      <a
                        href="javascript:void(0);"
                        className="comment-reply-link"
                      >
                        Reply
                      </a>{" "}
                    </div>
                  </div>
                </li>
              </ol>
            </li>
            <li className="comment">
              <div className="comment-body">
                <div className="comment-author vcard">
                  {" "}
                  <img
                    className="avatar photo"
                    src="/images/testimonials/pic3.jpg"
                    alt=""
                  />{" "}
                  <cite className="fn">
                    Remember on this journey is just be nice
                  </cite>{" "}
                  <span className="says">says:</span>{" "}
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  vitae neque vitae sapien malesuada aliquet. In viverra dictum
                  justo in vehicula. Fusce et massa eu ante ornare molestie. Sed
                  vestibulum sem felis, ac elementum ligula blandit ac.
                </p>
                <div className="comment-meta">
                  {" "}
                  <a href="javascript:void(0);">
                    October 6, 2015 at 7:15 am
                  </a>{" "}
                </div>
                <div className="reply">
                  {" "}
                  <a href="javascript:void(0);" className="comment-reply-link">
                    Reply
                  </a>{" "}
                </div>
              </div>
            </li>
          </ol>
          <div className="comment-respond" id="respond">
            <h3 className="comment-reply-title" id="reply-title">
              Leave A Comment{" "}
              <small>
                {" "}
                <a
                  style={{ display: "none" }}
                  href="#"
                  id="cancel-comment-reply-link"
                  rel="nofollow"
                >
                  Cancel reply
                </a>{" "}
              </small>{" "}
            </h3>
            <form className="comment-form" id="commentform" method="post">
              <p className="comment-form-author">
                <label htmlFor="author">
                  Name <span className="required">*</span>
                </label>
                <input type="text" placeholder="Author" id="author" />
              </p>
              <p className="comment-form-email">
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input type="text" placeholder="Email" id="email" />
              </p>
              <p className="comment-form-url">
                <label htmlFor="url">Website</label>
                <input type="text" placeholder="Website" id="url" />
              </p>
              <p className="comment-form-comment">
                <label htmlFor="comment">Comment</label>
                <textarea
                  rows={8}
                  placeholder="Add a Comment"
                  id="comment"
                ></textarea>
              </p>
              <p className="form-submit">
                <input
                  type="submit"
                  value="Post Comment"
                  className="btn black btn-lg outline outline-2 radius-xl"
                  id="submit"
                />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentSection
