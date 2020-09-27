let pixibotestLink = document.createElement('a');
pixibotestLink.classList.add('pixibotest-link')
pixibotestLink.href = '#'
pixibotestLink.innerText = 'Link'

document.querySelector('#pixibotest').append(pixibotestLink);

window.onload = function () {
    document.querySelector('.pixibotest-link').onclick = function () {
        let body

        if (!document.querySelector('.pixibotest-popup')) {
            let stylesTag = document.createElement('link');
            stylesTag.rel = 'stylesheet';
            stylesTag.href = './pixibotest_style.css';
            document.querySelector('head').append(stylesTag);

            body = document.querySelector('body')

            let background = document.createElement('div')
            background.classList.add('pixibotest-background')

            let widgetBody = document.createElement('div');
            widgetBody.classList.add('pixibotest-popup');
            widgetBody.innerText = 'Hello World';

            let closeButton = document.createElement('div');
            closeButton.classList.add('pixibotest-close-button');
            closeButton.innerText = '+';
            widgetBody.append(closeButton);

            closeButton.onclick = function () {
                widgetBody.remove();
                background.remove();
            }

            body.append(background, widgetBody);
        } else return;
    };
}
