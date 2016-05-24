import * as d3 from './d3';

export function ready(callback) {
    if (document.readyState != 'loading'){
        callback();
    }
    else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', callback);
    }
    else {
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState != 'loading') callback();
        });
    }
};

export const math = {
    seed: 4, // https://xkcd.com/221/,
    random(min = 0, max = 1) {

        this.seed = (this.seed * 9301 + 49297) % 233280;
        let rnd = this.seed / 233280;

        return min + rnd * (max - min);
    }
};

export const util = {
    // fisher-yates
    shuffle(o) {
        for(let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    },
    getXY(element) {
        let rect = element.getBoundingClientRect();

        if(d3.event.touches) {
            return {
                x: (d3.event.touches[0].clientX - rect.left) | 0,
                y: (d3.event.touches[0].clientY - rect.top) | 0
            };
        }
        else {
            return {
                x: (d3.event.clientX - rect.left) | 0,
                y: (d3.event.clientY - rect.top) | 0
            };
        }

    }
};

export const browser = {
    yScroll(set = null) {
        if(set) scrollTo(0, set);
        else return window.pageYOffset || document.documentElement.scrollTop;
    },

    width() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    },
    height() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    },
    screenWidth() {
        return window.screen.availWidth || window.screen.width || 1920;
    },
};
