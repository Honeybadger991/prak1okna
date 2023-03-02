const tabs = (tabSelector, parentSelector, tabsContent, activeClass, displayStyle = 'block') =>{
    const tab = document.querySelectorAll(tabSelector),
          parent = document.querySelector(parentSelector),
          content = document.querySelectorAll(tabsContent);

    function hideTabsContent(){
        content.forEach(item =>{
            item.style.display = 'none';
        })
        tab.forEach(item =>{
            item.classList.remove(activeClass)
        })
    }

    function showTabsContent(i = 0){
        content[i].style.display = displayStyle;
        tab[i].classList.add(activeClass)
    }

    parent.addEventListener('click', (e)=>{
        const target = e.target;
        if(target &&(target.classList.contains(tabSelector.replace(/\./g, '')) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./g, '')))){
            tab.forEach((item, i)=>{
                if(item == target || item == target.parentNode){
                    hideTabsContent()
                    showTabsContent(i)
                }
            })
        }
    })

    hideTabsContent()
    showTabsContent()
};

export default tabs;