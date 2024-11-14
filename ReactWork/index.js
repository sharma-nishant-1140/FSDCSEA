let parent = document.getElementById("root");
let root = ReactDOM.createRoot(parent);
let h2 = React.createElement('h2', {style:{color:"cyan"}}, "Hello React");

let item1 = React.createElement('li', {}, "HTML")
let item2 = React.createElement('li', {}, "CSS")
let item3 = React.createElement('li', {}, "JS")
let item4 = React.createElement('li', {}, "REACT")

let ul = React.createElement('ul', {style:{color:"cyan"}}, item1, item2, item3, item4);

let h2_1 = (
<div style={{color:'crimson'}}>
    <h2>Projects</h2>
    <ol>
        {item1}{item2}{item3}{item4}
    </ol>
</div>
)

let div = React.createElement('div', {style:{color:"cyan"}}, h2, ul, h2_1);

root.render(div);

