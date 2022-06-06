class Tab {
    #titles = [];
    #bodies = [];
    #activeIndex = 0;
    static CLASSES = {
        active: 'title-active',
        title_cont: 'title-container',
        show: 'show',
        title: 'title',
        body: 'body',
    };

    constructor(el) {
        this.init(el);
    }

    init(el) {
        this.setElements(el);
        this.initialClassSet(el);
        el.children[0].addEventListener('click', this.onTabSwitch);
    }

    setElements(el) {
        this.#titles = [...el.children[0].children];
        this.#bodies = [...el.children[1].children];
    }

    initialClassSet(el) {
        console.log(this.#titles);
        this.setActiveClasses(this.#titles, Tab.CLASSES.active, Tab.CLASSES.title);
        this.setActiveClasses(this.#bodies, Tab.CLASSES.show, Tab.CLASSES.body);
        el.children[0].classList.add(Tab.CLASSES.title_cont);
    }

    onTabSwitch = (e) => {
        this.#activeIndex = this.#titles.indexOf(e.target);
        this.renderElements()
    };

    renderElements() {
        this.iterateElements(this.#titles, Tab.CLASSES.active);
        this.iterateElements(this.#bodies, Tab.CLASSES.show);
    }

    setActiveClasses(elements, activeClass, commonClass) {
        elements.forEach( (e,i) => {
            e.classList.add(commonClass);
            if(i === this.#activeIndex) {
                e.classList.add(activeClass);
            }
        });
    }

    iterateElements(elements, elClass) {
        elements.forEach( (e, i) => {
            if (i === this.#activeIndex) {
                e.classList.add(elClass);
            } else {
                e.classList.remove(elClass);
            }
        });
    }
}