     let logo = document.querySelector(".menu-btn")
     let invisible = document.querySelector(".invisible_options")
     let invisible_cat = document.querySelector(".invisible_options p")
     let categories=document.querySelector(".categories")
     let options=document.querySelectorAll(".option")
     let scrollButton=document.querySelector(".scroll_btn button")
     

     logo.addEventListener("click",()=>{invisible.classList.toggle("visible") })
     
     invisible_cat.addEventListener("mouseover",()=>{categories.classList.add("non_opacity")})
     
     window.addEventListener("click", hide)

        function hide(e){
        if(e.target !== categories && e.target.className!=="option" ){
        categories.classList.remove("non_opacity")  
        }
        
    }

    

    async function changeCategorie(tag,options){
        let response = await fetch(
        `https://content.guardianapis.com/search?q=${tag}&show-tags=all&page-size=20&show-fields=all&order-by=relevance&api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c`
         )
        let content = await response.json()
        let articles = content.response.results
        let headers = document.querySelectorAll(".middle  h1")
        let text=document.querySelectorAll(".txt > p")
        let times=document.querySelectorAll(".txt p:nth-child(1)")
  
         options.addEventListener("click",()=>
        { 
            for (let i=0; i<headers.length;i++)
            {   let articleImg=document.querySelectorAll(".article-img")
                let imgContent=`${articles[i].fields.main}`
                articleImg[i].innerHTML=imgContent
                headers[i].innerHTML=`${articles[i].fields.headline}`;
                text[i].innerHTML=`${articles[i].fields.trailText}`;
                let date=new Date(`${articles[i].webPublicationDate}`)
                let now=new Date()
                let diffTime = Math.abs(now - date);
                let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
                times[i].innerHTML=diffDays + " дней назад"
                
                

                function newPage(){let mainDiv=document.createElement("div")
                let allFragments=document.createDocumentFragment()
                
                let div2=document.createElement("div")
                div2.className="new_article img"
                let img=document.createElement("div")
                img.innerHTML=`${articles[i].fields.main}`
                div2.prepend(img)  

                
                let divText=document.createElement("div")
                divText.className="new_article text"
                let textFragment=document.createDocumentFragment()
                let headerFragment=document.createDocumentFragment()
               
                let divHeader=document.createElement("div")
                divHeader.className="new_article header"

                let h1=document.createElement("h1")
                h1.innerHTML=`${articles[i].fields.headline}`

                let articleDiv=document.createElement("div")
                articleDiv.className="new_article full_article"
                articleDiv.innerHTML=main
                

                divHeader.prepend(h1)
                headerFragment.append(divHeader)
                divText.append(headerFragment) 
                textFragment.append(divText)
                textFragment.append(articleDiv)
                allFragments.append(div2)
                allFragments.append(textFragment)
                mainDiv.append(allFragments)
                 
                document.body.innerHTML=header+mainDiv.innerHTML+footer}
                articleImg[i].addEventListener("click", newPage)
                headers[i].addEventListener("click", newPage)

            
        }
        })
} 

    changeCategorie("sport",options[0])
    changeCategorie("world",options[1])
    changeCategorie("covid",options[2])
    changeCategorie("business",options[3])
    changeCategorie("politics",options[4])
    changeCategorie("science",options[5])
    changeCategorie("religion",options[6])
    changeCategorie("health",options[7])

    scrollButton.addEventListener("click", ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })

 
   

    let header=`<header>
    <div class="header-wraper">
        <div class="logo_and_input">
            <h2 class="back_on_main">NewsApp</h2>
            <input type="text" value="Type something to search">
        </div>
        <div class="categories_options">
            <div class="invisible_options">
                <p>Categories</p>
             
                <p>Trending News</p>
               
             </div>
             
        </div>
        
        <div class="menu-btn">
            <span></span>
            <span></span>
            <span></span>
        </div>
        
    </div>
    <div class="categories">
        <div>
            <p class="option">Sport</p>
            <p class="option">World</p>
            <p class="option">Covid</p>
            <p class="option">Business</p>
        </div>
        <div>
            <p class="option">Politics</p>
            <p class="option">Science</p>
            <p class="option">Religion</p>
            <p class="option">Health</p>
        </div>
    </div>
</header>`

let main=`<p> <strong>The standard Lorem Ipsum passage, used since the 1500s</strong></p>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        
    <p> <strong>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</strong></p>
    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
        
    <p> <strong>1914 translation by H. Rackham</strong></p>
     <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
        
    <p><strong> Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</strong></p>
    <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
        
    <p><strong>1914 translation by H. Rackham</strong></p>
    <p> "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains." </p>
    

</div>
</div>`

let footer=`<footer>
<div class="footer-container">
    
        <p>News App</p>
        <p>2021 copyright all rights reserved</p>
    
</div> 
</footer>`



  

  


 
