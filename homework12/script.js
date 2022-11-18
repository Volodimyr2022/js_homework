// const element = document.createElement('div');
// element.innerText = 'Example';
// document.body.append(element);

// const heading = document.createElement('h1');
// heading.innerText = 'Heading';
// document.body.append(heading);

// const button = document.createElement('button');
// button.innerText = 'button';
// document.body.append(button);

const button = document.getElementById('button');

createToolTip = (button, text) => {
    const toolTip = document.createElement('div')
    toolTip.classList.add('toolTip')

    toolTip.innerText = text;
    
    document.body.append(toolTip);

    const anchorButtonCoords = button.getBoundingClientRect();
    console.log(anchorButtonCoords)

    const toolTipTop = anchorButtonCoords.top - 10 - toolTip.clientHeight;

    const toolTipLeft = anchorButtonCoords.left +
    anchorButtonCoords.Width / 2 -
    toolTip.clientWidth / 2;

    toolTip.style.top = `${toolTipTop}px`
    toolTip.style.left = `${toolTipLeft}px`
};

createToolTip(button, 'example')