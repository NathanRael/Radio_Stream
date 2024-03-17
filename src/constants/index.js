export const PSEUDO_REGEX = /^[a-z0-9]+[a-z0-9_-]{4,}$/i;
export const EMAIL_REGEX = /^[a-z0-9]+@[a-z]+[.].{3,}$/i;
export const PASSWORD_REGEX = /^[a-z].{8,}$/i;
export const baseUrl = 'http://localhost/rofia/api';

export const ABOUT_TEXT = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium eum non iusto error quo beatae commodi ipsam, voluptas animi molestias accusantium excepturi quae molestiae repudiandae vel reprehenderit suscipit inventore.     Sunt, incidunt numquam aliquid, provident nobis, corrupti ullam obcaecati adipisci aspernatur eos quod. Eum quis totam obcaecati harum nostrum animi iure, aperiam quam ut saepe culpa rem, ipsam dolore official zazd
numquam aliquid, provident nobis, corrupti ullam obcaecati adipisci aspernatur eos quod. Eum quis totam obcaecati harum nostrum animi iure, aperiam quam ut saepe culpa rem, ipsam dolore official zaz
`

export const imageDir = "http://localhost/Rofia/images/";

export const HERO_TEXT = "Ecouter la radio de l'université de Fianarantsoa."
export const currentPage = {
  "home" : "bi bi-ui-checks-grid",
  "radio" : "bi bi-boombox",
  "request" : "bi bi-list-task",
  "savedPost" : "bi bi-bookmark",
  "requestList" : "bi bi-lock",
  "postList" : "bi bi-lock",
}
export const NAVLINK = [
    {
        text : 'Accueil',
        icon : 'bi bi-ui-checks-grid',
        location : '/user/home'
    },
    {
        text : 'Radio',
        icon : 'bi bi-boombox',
        location : '/user/radio'
    },
    {
        text : 'Requêtes',
        icon : 'bi bi-list-task',
        location : '/user/request'
    },
    {
        text : 'Sauvegardes',
        icon : 'bi bi-bookmark',
        location : '/user/savedPost'
    },
    {
        text : 'Liste requêtes',
        icon : 'bi bi-lock',
        location : '/user/requestList'
    },
    {
        text : 'Publications',
        icon : 'bi bi-lock',
        location : '/user/postList'
    },
]

export const POST =  {
    "data": [
      {
        "id": "100458112765e9f99e1e62f0.02017360.d27a57a8af737f199907c077f36726f1",
        "title": "Gaming Party 1.0",
        "desc": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse similique ex blanditiis odit amet ipsam dolorem, vel, velit perferendis explicabo perspiciatis ipsum nam temporibus accusamus deleniti exercitationem magnam. Sequi, sed!",
        "date": "2024-01-07 20:30:06"
      },
      {
        "id": "202301258465e9f27fa70d47.33367115.d0c724e6047dd100f5cf9c44c9fcfb7c",
        "title": "Hackaton",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium eum non iusto error quo beatae commodi ipsam, voluptas animi molestias accusantium excepturi quae molestiae repudiandae vel reprehenderit suscipit inventore.     Sunt, incidunt numquam aliquid, provident nobis, corrupti ullam obcaecati adipisci aspernatur eos quod. Eum quis totam obcaecati harum nostrum animi iure, aperiam quam ut saepe culpa rem, ipsam dolore official ",
        "date": "2024-03-07 20:01:28"
      },
      {
        "id": "86118140765e9f2d24e45c0.13716778.90cbed67eb2f1bdfdb10f15bd3bea9a2",
        "title": "Color Party",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium eum non iusto error quo beatae commodi ipsam, voluptas animi molestias accusantium excepturi quae molestiae repudiandae vel reprehenderit suscipit inventore.     Sunt, incidunt numquam aliquid, provident nobis, corrupti ullam obcaecati adipisci aspernatur eos quod. Eum quis totam obcaecati harum nostrum animi iure, aperiam quam ut saepe culpa rem, ipsam dolore official ",
        "date": "2024-03-09 20:01:28"
      }
    ]
  }