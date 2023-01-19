// const btnPlay = document.querySelector('#btn');

// btnPlay.addEventListener('click', ()=>{
//     createUnityInstance(document.querySelector("#unity-canvas"), {
//         dataUrl: "Build/NoAdAndAnimBuild.data",
//         frameworkUrl: "Build/NoAdAndAnimBuild.framework.js",
//         codeUrl: "Build/NoAdAndAnimBuild.wasm",
//         streamingAssetsUrl: "StreamingAssets",
//         companyName: "DefaultCompany",
//         productName: "Bread and Circuces",
//         productVersion: "0.0.0.1",
//         // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
//         // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
//     });
// });

const translate = document.querySelectorAll(".translate");
const shadow = document.querySelector(".shadow");

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    shadow.style.height = `${scroll * 0.2 + 100}px`;
});


