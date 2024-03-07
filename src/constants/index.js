export const PSEUDO_REGEX = /^[a-z0-9]+[a-z0-9_-]{4,}$/i;
export const EMAIL_REGEX = /^[a-z0-9]+@[a-z]+[.].{3,}$/i;
export const PASSWORD_REGEX = /^[a-z].{8,}$/i;

export const ABOUT_TEXT = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium eum non iusto error quo beatae commodi ipsam, voluptas animi molestias accusantium excepturi quae molestiae repudiandae vel reprehenderit suscipit inventore.     Sunt, incidunt numquam aliquid, provident nobis, corrupti ullam obcaecati adipisci aspernatur eos quod. Eum quis totam obcaecati harum nostrum animi iure, aperiam quam ut saepe culpa rem, ipsam dolore official zazd
numquam aliquid, provident nobis, corrupti ullam obcaecati adipisci aspernatur eos quod. Eum quis totam obcaecati harum nostrum animi iure, aperiam quam ut saepe culpa rem, ipsam dolore official zaz
`

export const HERO_TEXT = "Ecouter la radio de l'université de Fianarantsoa."

export const NAVLINK = [
    {
        text : 'Accueil',
        icon : 'bi bi-house',
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