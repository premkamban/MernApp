import React from "react";
import "./App.css";
import Floor from "./components/MathFloor";
import LifecyleHooks from "./components/LifecyleHooks";

class AppCopy extends React.Component {
  constructor() {
    super();
    this.state = {
      showEdit: false,
      data: [
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
          userId: 1,
          id: 2,
          title: "qui est esse",
          body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        },
      ],
    };
  }

  changeData(e, id) {
    const indexToModify = this.state.data.findIndex(
      (tomodify) => tomodify.id === id
    );
    const defaultValue = { ...this.state.data[indexToModify] };
    console.log("to modify =====> ", defaultValue);
    console.log(e.target.value);
    defaultValue.title = e.target.value;

    const datas = [...this.state.data];
    console.log("Datas ====>", datas);
    datas[indexToModify] = defaultValue;

    // defaultValue.splice(index, 1);
    this.setState({ data: datas });
  }

  deleteData(index) {
    const defaultValue = [...this.state.data];
    defaultValue.splice(index, 1);
    this.setState({ data: defaultValue });
  }

  showModifyhandler(id) {
    this.setState((prevState, props) => {
      return { showEdit: !prevState.showEdit };
    });
  }

  render() {
    return (
      <div className="App">
        <header></header>
        <main>
          <p>This is an dynamic UI for random value ==> {Math.random()}</p>
          <LifecyleHooks />
          {this.state.data.map((d) => {
            return (
              <Floor
                key={d.id}
                deleteData={() => this.deleteData()}
                modify={(event) => this.changeData(event, d.id)}
                showModifyhandler={() => this.showModifyhandler(d.id)}
                showModify={this.state.showEdit}
                data={d}
              ></Floor>
            );
          })}
        </main>
      </div>
    );
  }
}

export default AppCopy;
