const parent = React.createElement("div",{id:"div"},
    React.createElement("div",{},
    React.createElement("h1",{},"h1 tag this is ")));
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)

