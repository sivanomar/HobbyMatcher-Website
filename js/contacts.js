const chatBtns = document.querySelectorAll('.chat-button')
const senderImg = document.querySelectorAll('.sender-img')
const sender = document.getElementById('sender')
let name = ""
let imageUrl = ""

const chats = [
    {
        id : 1,
        name : "Justin Timberlake",
        messages: [
            {
                id: 1, 
                message: "Hello",
                sender: "Justin Timberlake",
            },
            {
                id: 2,
                message: "Hi",
                sender: "Me",
            },
            {
                id: 3,
                message: "How are you?",
                sender: "Justin Timberlake",
            },
            {
                id: 4,
                message: "I'm fine",
                sender: "Me",
            }
        ]
    },
    {
        id : 2,
        name : "Eve Rachael",
        messages: [
            {
                id: 1,
                message: "Hello There",
                sender: "Eve Rachael",
            },
            {
                id: 2,
                message: "Hi",
                sender: "Me",
            },
        ]
    },
    {
        id : 3,
        name : "Linda Michaels",
        messages: [
            {
                id: 1,
                message: "Hello",
                sender: "Linda Michaels",
            },
            {
                id: 2,
                message: "Hi",
                sender: "Me",

            },
            {
                id: 3,
                message: "How are you?",
                sender: "Linda Michaels",
            },
        ]
    },
    {
        id : 4,
        name : "Tim Burton",
        messages: [
            {
                id: 1,
                message: "Hello",
                sender: "Tim Burton",
            },
            {
                id: 2,
                message: "Bye",
                sender: "Me",
            }
        ]
    }
]



chatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        chatBtns.forEach(btn => {
            btn.classList.remove('active')
        })
        btn.classList.add('active')
        name = btn.querySelector('.name').innerText
        imageUrl = btn.querySelector('.image').src

        console.log(name)
        console.log(imageUrl)

        sender.innerText = name
        senderImg.forEach(img => {
            img.src = imageUrl
        })


        chats.forEach(chat => {
            if(chat.name == name){
                const chatBox = document.getElementById('chatBox')
                chatBox.innerHTML = ""
                chat.messages.forEach(message => {
                    const div = document.createElement('div')
                    div.classList.add('message')
                    if(message.sender == "Me"){
                        div.classList.add('right')
                        div.innerHTML = `
                        <div class="sender">
                            <img src="img/chat2.png" alt="">
                        </div>
                        <p class="message-text bg-primary text-white mb-0">${message.message}</p>
                    `
                    }
                    else{
                        div.innerHTML = `
                        <div class="sender">
                            <img src="${imageUrl}" alt="">
                        </div>
                        <p class="message-text">${message.message}</p>
                    `
                    }
                    
                    chatBox.appendChild(div)
                })
            }
        })
        
    })
})


const newMessageForm = document.getElementById('newMessageForm')

newMessageForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const message = document.getElementById('newMessage').value
    const chatBox = document.getElementById('chatBox')
    const div = document.createElement('div')
    div.classList.add('message')
    div.classList.add('right')
    div.innerHTML = `
        <div class="sender">
            <img src="img/chat2.png" alt="">
        </div>
        <p class="message-text bg-primary text-white mb-0">${message}</p>
    `
    chatBox.appendChild(div)
    document.getElementById('message').value = ""

    chats.forEach(chat => {
        if(chat.name == name){
            chat.messages.push({
                id: chat.messages.length + 1,
                message: message,
                sender: "Me",
            })
        }
    })

    newMessageForm.reset()
})