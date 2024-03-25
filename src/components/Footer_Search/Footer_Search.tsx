import "./Footer_Search.scss";

const Footer_Search = () => {
  return (
    <>
      <h1 className="footer--search__title">Updates right to your Inbox</h1>
      <div className="search footer__search">
        <input
          type="text"
          placeholder="Email Address"
          className="search__input footer__search--input"
        />
        <button role="button" className="search__btn footer__search--btn">
          Send
        </button>
      </div>
    </>
  );
};

export default Footer_Search;
