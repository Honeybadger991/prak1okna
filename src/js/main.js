import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import orderForms from './modules/orderForms';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () =>{

    let orderObj = {};

    orderForms(orderObj);
    modal(orderObj);
    tabs('.glazing_block', '.glazing_slider', '.glazing_content', 'active');
    tabs('.no_click', '.decoration_slider', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons_img', '.popup_calc_content', '.big_img > img', 'do_image_more', 'inline-block');
    forms(orderObj);
    timer('2023-03-22');
    images(); 
}) 