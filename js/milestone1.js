
const app = new Vue ({
  el: '#app',
  data:{
  contacts: [
  {
    user: 'Michele',
    visible: true,
    profile_image: 'avatar_1.jpg',
    messages:[
    {
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
      date: '10/01/2020 15:30:55',
      text: 'Tutto fatto!',
      status: 'received'
    }
    ]
  },
  {
    user: 'Fabio',
    visible: true,
    profile_image: 'avatar_2.jpg',
    messages:[
    {
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
      date: '10/01/2020 15:40:55',
      text: 'Vabene ci vediamo dopo',
      status: 'received'
    }
    ],
  },
  {
    user: 'Samuele',
    visible: true,
    profile_image: 'avatar_3.jpg',
    messages:[
    {
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
      date: '10/01/2020 15:48:55',
      text: 'Non è un problema',
      status: 'received'
    }
    ]
  },
  {
    user: 'Luisa',
    visible: true,
    profile_image: 'avatar_6.jpg',
    messages:[
    {
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
      date: '10/01/2020 15:59:55',
      text: 'A dopo',
      status: 'received'
    }
    ]
  }
  ]
  }});

 

