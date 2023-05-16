import commonCss from "../css/common.module.css";
import css from "./Pages.module.css";

const Home = () => {
    return (
      <div className={commonCss.container}>
        <h1 className={css.homeTitle}>PHONEBOOK</h1>
        <div className={css.bgdImg}></div>
      </div>
    );
        

}

export default Home;