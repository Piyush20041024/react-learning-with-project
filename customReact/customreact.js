function customRender(reactElement, container){
    const domEle = document.createElement(reactElement.type);
    domEle.innerHTML = reactElement.childen;
    // domEle.setAttribute('href',reactElement.prors.href);
    // domEle.setAttribute('target',reactElement.prors.target);

    for (const prop in reactElement.prors) {
        if(prop === 'children') continue;

        domEle.setAttribute(prop,reactElement.prors[prop]);
    }
    container.appendChild(domEle);
}
const reactElement = {
    type: 'a',
    prors: {
        href: 'https:/google.com',
        target: '_blank'
    },
    childen: 'Click me to Search on Goog;e'
};
const mainContainer = document.querySelector('#root');
customRender(reactElement,mainContainer);