
const app = new Vue ({
  el: '#app',
  data:{
  contacts: [
                {
                    user: 'Michele',
                    profile_image: 'avatar_1.jpg',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
  {
                    user: 'Fabio',
                    profile_image: 'avatar_2.jpg',
                    visible: true,
                    messages: [{
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'received'
                        }
                    ],
                },
{
                    user: 'Samuele',
                    profile_image: 'avatar_3.jpg',
                    visible: true,
                    messages: [{
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
  {
                    user: 'Luisa',
                    profile_image: 'avatar_6.jpg',
                    visible: true,
                    messages: [{
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ]
                }
  ],
  active_user: -1,
  isActive: false,
  textInput:'',
  sendedMessage: false,
  searchContact:'',
//   clicked: false
  },

  computed: {
    activeUsers: function () {
        return this.contacts.filter(function (item) {
            return item.visible;
        })
    }
    },

  methods:{
    showMessages(index){
      this.active_user=index;
      this.isActive=!this.isActive;
      console.log(active_user);
    },
    getLastMessage(index){
        let lastMessage = this.contacts[index].messages[this.contacts[index].messages.length-1].text;
        if(lastMessage.length > 30){
            lastMessage = lastMessage.slice(0,30)+"...";
        }
        return lastMessage;
    },
    getLastDate(index){
        let lastDate = this.contacts[index].messages[this.contacts[index].messages.length-1].date;
        return lastDate;
    },

    sendNewMessage(){
        newMessage = {
            date: '10/01/2020 15:40:55',
            text: this.textInput,
            status: 'sent'
        }
        this.contacts[this.active_user].messages.push(newMessage);
        this.textInput='';
        this.sendedMessage=true;
        this.replyMessageTimeOut(this.sendedMessage);
        this.sendedMessage=false;
    },

    replyMessageTimeOut(sendedMessage){
        if(sendedMessage==true){
        setTimeout(this.replyMessage,1000);
        }
    },

     replyMessage(){
        newMessage = {
            date: '10/01/2020 15:40:55',
            text: 'Ok',
            status: 'received'
        }
        this.contacts[this.active_user].messages.push(newMessage);
        
    },

    findContact(string){
        string=string.toLowerCase();
        for(let i=0; i < Object.keys(this.contacts).length; i++){
            if(this.contacts[i].user.toLowerCase().includes(string)){
            this.contacts[i].visible=true;
            }
            else{
                this.contacts[i].visible=false;
            }
        }
    }

    // showMenuChevron(){
    //     this.clicked=!this.clicked;
    //     const dropdown = document.querySelector('.dropdown');
    //     if(this.clicked == true){
    //         dropdown.classList.add('dropdown-active');
    //     }
    //     else{
    //         dropdown = document.classList.remove('dropdown-active');
    //     }
    // }
  }
});