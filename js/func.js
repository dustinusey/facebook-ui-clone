// function to iterate over buttons/links/lIs
function iterateClass(collection, className, e) {
    collection.forEach((item) => {
        if (e.target === item) {
            for (let i = 0; i < collection.length; i ++) {
                collection[i].classList.remove(className);
            }
            e.target.classList.add(className);
        }
    });
}