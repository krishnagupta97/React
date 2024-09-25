function render(App, root){
    /*
    const domElement = document.createElement(App.type);
    domElement.innerHTML = App.children;
    domElement.setAttribute('href', App.props.href);
    domElement.setAttribute('target', App.props.target);
    root.appendChild(domElement);
    */
    const domElement = document.createElement(App.type);
    domElement.innerHTML = App.children;
    for (const prop in App.props) {
        if(prop == 'children') continue;
        domElement.setAttribute(prop, App.props[prop]);
    }
    root.appendChild(domElement);
}

const App = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    children: "Click Me To Visit",
}

const root = document.getElementById('root');
render(App, root);
