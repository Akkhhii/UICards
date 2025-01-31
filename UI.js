let cardContainer = document.querySelector('.card-container')


async function getData(){
    let response = await fetch('./data.json')
    .then((response)=>{
        return response
    })
    .then(response=>{
        return response.json()
    })

    response.map((item)=>{
        let cardDiv = document.createElement('div')
        let topDiv1 = document.createElement('div')
        let h21 = document.createElement('h2')
        let h22 = document.createElement('h2')
        let middleDiv1 = document.createElement('div')
        let profileDiv = document.createElement('div')
        let h23 = document.createElement('h2')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')
        let middleDiv2 = document.createElement('div')
        let topDiv2 = document.createElement('div')
        let p4 = document.createElement('p')
        let p5 = document.createElement('p')
        let p6 = document.createElement('p')
        let p7 = document.createElement('p')
        let bottomDiv1 = document.createElement('div')
        let p8 = document.createElement('p')
        let bottomDiv2 = document.createElement('div')
        let viewbtn = document.createElement('button')

        let availabilityColor = item.availability === 'Part-time' ? 'bg-red-300' : item.availability === 'Full-time' ? 'bg-green-400' : item.availability === 'Contract' ? 'bg-[royalblue]' : ''

        cardDiv.classList.add('card', 'w-[30%]', 'h-[75%]', 'flex', 'flex-col', 'justify-between', 'items-center', 'shadow-black/40', 'shadow-md')

        topDiv1.classList.add('top', 'w-full', 'h-[10%]', 'flex', 'justify-between', 'items-center', 'px-[1em]')

        h21.classList.add(`${availabilityColor}`, 'text-white', 'px-[0.8em]', 'py-[0.2em]', 'rounded-full', 'text-sm', 'font-semibold')
        h22.classList.add('font-semibold', 'text-xl')
        h23.classList.add('text-4xl')

        middleDiv1.classList.add('middle1', 'w-full', 'h-[51%]', 'bg-gren-400', 'flex', 'flex-col', 'items-center', 'justify-center', 'gap-[0.7em]')

        profileDiv.classList.add('profile', 'w-[41%]', 'h-[53%]', 'bg-black', 'rounded-full', 'flex', 'justify-center', 'items-center', 'text-white')

        p1.classList.add('text-xl', 'font-semibold')
        p2.classList.add('text-xs', 'text-gray-400')
        p3.classList.add('text-sm', 'text-blue-500')


        middleDiv2.classList.add('middle2', 'w-full', 'h-[30%]', 'px-[1em]')

        topDiv2.classList.add('top', 'w-full', 'h-[35%]', 'flex', 'items-center', 'justify-center', 'gap-[1em]', 'text-sm')

        p4.classList.add('border-[0.2px]', 'border-gray-400/30', 'px-[1em]', 'py-[0.3em]', 'rounded-full')
        p5.classList.add('border-[0.2px]', 'border-gray-400/30', 'px-[1em]', 'p`y-[0.3em]', 'rounded-full')
        p6.classList.add('border-[0.2px]', 'border-gray-400/30', 'px-[1em]', 'py-[0.3em]', 'rounded-full')
        p7.classList.add('border-[0.2px]', 'border-gray-400/30', 'px-[1em]', 'py-[0.3em]', 'rounded-full', 'bg-[royalblue]', 'text-white')
       
        bottomDiv1.classList.add('bottom', 'w-full', 'h-[65%]', 'flex', 'items-center', 'justify-center', 'text-center')

        p8.classList.add('text-sm', 'text-gray-400')

        bottomDiv2.classList.add('bottom', 'w-full', 'hover:bg-[royalblue]', 'hover:text-white', 'flex', 'justify-center', 'items-center', 'transition-all', '3s', 'ease-in')
        
        viewbtn.classList.add('uppercase', 'font-semibold', 'py-[1em]', 'border-t-[0.2px]', 'border-gray-400', 'outline-none')

        h21.textContent = item.availability
        h22.textContent = `$${item.cost_per_hour}/hr`

        let namearr = item.name.split(' ')
        
        h23.textContent = namearr[0].charAt(0) + " " + namearr[1].charAt(0)

        p1.textContent = item.name
        p2.textContent = item.designation
        p3.textContent = item.email

        p4.textContent = item.tech_stack[0]
        p5.textContent = item.tech_stack[1]
        p6.textContent = item.tech_stack[2]
        p7.textContent = `+${item.tech_stack.length-3}`

        p8.textContent = item.bio

        viewbtn.textContent = 'view profile'

        cardContainer.appendChild(cardDiv);
        
        cardDiv.appendChild(topDiv1);
        cardDiv.appendChild(middleDiv1);
        cardDiv.appendChild(middleDiv2);
        cardDiv.appendChild(bottomDiv2);
        
        topDiv1.appendChild(h21);
        topDiv1.appendChild(h22);
        
        profileDiv.appendChild(h23);
        middleDiv1.appendChild(profileDiv);
        middleDiv1.appendChild(p1);
        middleDiv1.appendChild(p2);
        middleDiv1.appendChild(p3);
        
        middleDiv2.appendChild(topDiv2)
        middleDiv2.appendChild(bottomDiv1)

        topDiv2.appendChild(p4)
        topDiv2.appendChild(p5)
        topDiv2.appendChild(p6)
        topDiv2.appendChild(p7)

        bottomDiv1.appendChild(p8)
        
        bottomDiv2.appendChild(viewbtn)

        viewbtn.addEventListener('click', ()=>{
            let overlay = document.createElement('div')
            let closebtn = document.createElement('button')
            let profileCard = document.createElement('div')
            let leftProfile = document.createElement('div')
            let rightProfile = document.createElement('div')
            let profileHead = document.createElement('div')
            let h31 = document.createElement('h3')
            let h11 = document.createElement('h1')
            let ptag1 = document.createElement('p')
            let ptag2 = document.createElement('p')
            let top21 = document.createElement('div')
            let middleD1 = document.createElement('div')
            let middleD2 = document.createElement('div')
            let middleD3 = document.createElement('div')
            let bottomD1 = document.createElement('div')
            let ptag4 = document.createElement('p')
            let ptag5 = document.createElement('p')
            let ptag6 = document.createElement('p')
            let ptag7 = document.createElement('p')
            let ptag8 = document.createElement('p')
            let ptag9 = document.createElement('p')

            cardContainer.classList.add('blur')

            overlay.classList.add('w-full', 'h-full', 'bg-white/30', 'absolute', 'top-0', 'flex', 'justify-center', 'items-center')
            closebtn.classList.add('w-[3em]', 'h-[3em]', 'bg-red-500', 'text-white', 'absolute', 'right-[1em]', 'top-[1em]')
            profileCard.classList.add('w-[50%]', 'h-[60%]', 'flex', 'shadow-black', 'shadow-2xl')
            leftProfile.classList.add('w-[30%]', 'h-full', 'bg-green-400/90', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-[2em]')
            rightProfile.classList.add('w-[70%]', 'h-full', 'bg-black/90', 'px-[1em]'), 
            profileHead.classList.add('w-[60%]', 'h-[30%]', 'bg-black', 'rounded-full', 'flex', 'justify-center', 'items-center')
            h11.classList.add('text-white', 'text-[1.5em]', 'font-semibold')
            h31.classList.add('text-white', 'text-4xl')
            ptag1.classList.add('text-white')
            ptag2.classList.add('text-[royalblue]')
            top21.classList.add('w-full', 'h-[20%]', 'flex', 'flex-wrap', 'justify-center', 'items-center', 'gap-[1em]')
            middleD1.classList.add('w-full', 'h-[10%]', 'flex', 'flex-wrap', 'justify-center', 'items-center', 'gap-[7em]')
            middleD2.classList.add('w-full', 'h-[23.4%]', 'flex', 'flex-wrap', 'justify-start', 'items-center', 'gap-[3em]', 'px-[1em]')
            middleD3.classList.add('w-full', 'h-[23.4%]', 'flex', 'flex-wrap', 'justify-start', 'items-center', 'gap-[3em]', 'px-[1em]')
            bottomD1.classList.add('w-full', 'h-[23.4%]', 'flex', 'flex-wrap', 'justify-start', 'items-center', 'gap-[3em]', 'px-[1em]')
            ptag4.classList.add('bg-green-400', 'px-[2em]', 'py-[0.3em]', 'rounded-md', 'text-white', 'font-semibold')
            ptag5.classList.add('bg-zinc-800', 'px-[2em]', 'py-[0.3em]', 'rounded-md', 'text-white')
            ptag6.classList.add('bg-zinc-800', 'px-[2em]', 'py-[0.3em]', 'rounded-md', 'text-white')
            ptag7.classList.add('text-white', 'text-lg', 'font-semibold')
            ptag8.classList.add('text-white', 'text-lg')
            ptag9.classList.add('text-white', 'text-lg')

            item.tech_stack.forEach((el)=>{
                let ptag3 = document.createElement('p')
                ptag3.classList.add('text-white', 'border-[0.2px]', 'border-white/50', 'px-[1em]', 'py-[0.3em]', 'rounded-full')
                ptag3.textContent = el
                top21.appendChild(ptag3)
            })
            

            let namearr2 = item.name.split(' ')
            
            h31.textContent = namearr2[0].charAt(0) + " " + namearr2[1].charAt(0)
            h11.textContent = item.name

            ptag1.textContent = item.designation
            ptag2.textContent = item.email
            ptag4.textContent = item.availability
            ptag5.textContent = item.company
            ptag6.textContent = `$${item.cost_per_hour}/hr`
            ptag7.textContent = `Address : ${item.address}`
            ptag8.textContent = `"${item.bio}"`
            ptag9.textContent = item.description

            closebtn.textContent = 'X'

            overlay.appendChild(closebtn)
            overlay.appendChild(profileCard)
            profileCard.appendChild(leftProfile)
            profileCard.appendChild(rightProfile)
            leftProfile.appendChild(profileHead)
            leftProfile.appendChild(h11)
            leftProfile.appendChild(ptag1)
            leftProfile.appendChild(ptag2)
            profileHead.appendChild(h31)
            rightProfile.appendChild(top21)
            rightProfile.appendChild(middleD1)
            rightProfile.appendChild(middleD2)
            rightProfile.appendChild(middleD3)
            rightProfile.appendChild(bottomD1)
            middleD1.appendChild(ptag4)
            middleD1.appendChild(ptag5)
            middleD1.appendChild(ptag6)
            middleD2.appendChild(ptag7)
            middleD3.appendChild(ptag8)
            bottomD1.appendChild(ptag9)

            document.body.appendChild(overlay)

            closebtn.addEventListener('click', ()=>{
                document.body.removeChild(overlay)
                cardContainer.classList.remove('blur')
            })
        })
        

    })
    
}

getData()