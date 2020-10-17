import React, { PureComponent } from "react";
import RStyle from "../style.module.scss";
import { connect } from "react-redux";
class Recommend extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { list } = this.props;
    return (
      <div className={`${RStyle.recWrapper}`}>
        <div className={`${RStyle.recBoard}`}>
          {list.map((item) => {
            return (
              <a
                href="#"
                className={`${RStyle.recItem}`}
                key={item.get("id")}
              >
                <img src={item.get("imgUrl")} alt="2" className={`${RStyle.recImg}`} />
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.getIn(["home", "recList"]),
  };
};

export default connect(mapStateToProps, null)(Recommend);
