import calcScrollWidth from "./calcScrollWidth";

const modal = (obj) =>{
    function bindModals(triggerSelector, modalSelector, closeSelector, closeClickByOverlay = true){
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScrollWidth();
              
        
        trigger.forEach(item =>{
            item.addEventListener('click', (e)=>{
                if(e.target){
                    e.preventDefault()
                }

                if (modal.classList.contains('popup_calc_profile')) {
					if (!obj.form || !obj.width || !obj.height) {
						e.removeEventListener();
					}
				}

				if (modal.classList.contains('popup_calc_end')) {
					if (!obj.type || !obj.profile) {
						e.removeEventListener();
					}
				}

                windows.forEach(item =>{
                    item.style.display = 'none';
                })
                clearInterval (timeMod);
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            })
        });

        modal.addEventListener('click', (e)=>{
            if(e.target === modal && closeClickByOverlay){
                windows.forEach(item =>{
                    item.style.display = 'none';
                })
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });

        close.addEventListener('click', ()=>{
            windows.forEach(item =>{
                item.style.display = 'none';
            })
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        });
    };

    // function showModalByTime(modalSelector, timer){
    //     setTimeout(()=>{
    //         document.querySelector(modalSelector).style.display = 'block';
    //         document.body.style.overflow = 'hidden';
    //     }, timer)
    // }

    const timeMod = setTimeout(()=>{
        document.querySelector('.popup').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, 600000)

    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModals('.phone_link', '.popup', '.popup .popup_close'); 
    bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close'); 
    bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false); 
    bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false); 
    // showModalByTime('.popup', 5000);
};

export default modal;