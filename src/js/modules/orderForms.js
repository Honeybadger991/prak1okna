import controlNumInputs from "./controlNumInputs";

const orderForms = (obj) =>{
    let windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    controlNumInputs('#width')
    controlNumInputs('#height')

    function bindActionToOrderObj (elem, prop, event){
        elem.forEach((item, i) =>{
            item.addEventListener(event, ()=>{
                switch (item.nodeName){
                    case 'SPAN':
                        obj[prop] = i+1;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox'){
                            i === 0 ? obj[prop] = 'Холодное' : obj[prop] = 'Теплое';
                            elem.forEach((box, j) =>{
                                box.checked = false;
                                if (i == j){
                                    box.checked = true;
                                }
                            });
                        } else {
                            obj[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        obj[prop] = item.value;
                        break;
                }
                console.log(obj)
            })
        })
    }

    bindActionToOrderObj(windowForm, 'form', 'click');
    bindActionToOrderObj(windowWidth, 'width', 'input');
    bindActionToOrderObj(windowHeight, 'height', 'input');
    bindActionToOrderObj(windowType, 'type', 'change');
    bindActionToOrderObj(windowProfile, 'profile', 'change');

};

export default orderForms;