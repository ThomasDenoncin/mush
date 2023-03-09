let app = new Vue({
    el: '.app-container',
    data: {
        img: '',
        text: '', 
        endStep: false,
        yesStep: {},
        noStep: {},
    },
    methods: {
        init: function () {
            let initStep = 0;
            this.loadStep(initStep);
        },
        loadStep: function(index) {
            let step = mush_table[index]
            this.img = step.img;
            this.text = step.text;
            this.endStep = step.endStep;
            if (!this.endStep) {
                this.yesStep = step.yes;
                this.noStep = step.no;
            } else {
                this.yesStep = {};
                this.noStep = {};
            }
        },
        nextYesStep: function() {
            this.loadStep(this.yesStep);
        },
        nextNoStep: function() {
            this.loadStep(this.noStep);
        }
    }
});
app.init(); 
