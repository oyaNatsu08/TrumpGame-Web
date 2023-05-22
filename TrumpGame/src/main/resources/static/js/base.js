const typeTarget = document.querySelectorAll('.lagText');

let options = {
    rootMargin: '0px',
    threshold: .5
}

let callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > .5 && entry.target.classList.contains('active') == false) {
            let typeContent = entry.target.textContent;
            let typeSplit = typeContent.split('');
            let typeSpeed = entry.target.getAttribute('data-speed');
            entry.target.textContent = '';
            entry.target.classList.add('active');

            let typeLength = 0;
            let typeInterval = setInterval(() => {
                if (typeSplit[typeLength] == undefined) {
                    clearInterval(typeInterval);
                    return false;
                }
                entry.target.textContent += typeSplit[typeLength];
                typeLength++;
            }, typeSpeed);

        }
    });
}

let observer = new IntersectionObserver(callback, options);

typeTarget.forEach(e => {
    observer.observe(e);
});

//const typeTarget = document.querySelectorAll('.lagText');
//let options = {
//  rootMargin: '0px',
//  threshold: 0.5
//};
//let callback = (entries, observer) => {
//  entries.forEach(entry => {
//    if (entry.intersectionRatio > 0.5 && !entry.target.classList.contains('active')) {
//      let typeContent = entry.target.textContent;
//      let typeSplit = typeContent.split('');
//      let typeSpeed = entry.target.getAttribute('data-speed');
//      entry.target.textContent = '';
//      entry.target.classList.add('active');
//      let typeLength = 0;
//      let typeInterval = setInterval(() => {
//        if (typeSplit[typeLength] == undefined) {
//          clearInterval(typeInterval);
//          entry.target.classList.remove('active');
//          observer.unobserve(entry.target);
//          setTimeout(startObserving, 3000); // 処理の間に 1 秒の遅延を設定
//          return false;
//        }
//        entry.target.textContent += typeSplit[typeLength];
//        typeLength++;
//      }, typeSpeed);
//    }
//  });
//};
//let observer = new IntersectionObserver(callback, options);
//function startObserving() {
//  typeTarget.forEach(e => {
//    observer.observe(e);
//  });
//}
//startObserving();
