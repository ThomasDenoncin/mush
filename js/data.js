const mush_table = {
    0: {
        img: '',
        text: 'Est-ce qu\'il a une volve ?',
        yes: 1, 
        no: 4,
    },
    1: {
        img: '',
        text: 'Est-ce qu\'il a un anneau ?',
        yes: 2, 
        no: 3,
    },
    2: {
        img: '',
        text: 'C\'est une Amanite !',
        endStep: true
    },
    3: {
        img: '',
        text: 'C\'est une Volvaire !',
        endStep: true
    },
    4: {
        img: '',
        text: 'Est-ce qu\'il a un anneau ?',
        yes: 5, 
        no: 15,
    },
    5: {
        img: '',
        text: 'Est-ce que le pied et le chapeau se séparent facilement ?',
        yes: 6, 
        no: 9,
    },
    6: {
        img: '',
        text: 'Est-ce que les lamelles déscendent nettement le long du pied ?',
        yes: 7, 
        no: 8,
    },
    7: {
        img: '',
        text: 'C\'est une Armillaire !',
        endStep: true
    },
    8: {
        img: '',
        text: 'C\'est une Pholiote !',
        endStep: true
    },
    9: {
        img: '',
        text: 'Est-ce que les lamelles blanches restent blanchâtres sur le champignon âgé ?',
        yes: 10, 
        no: 11,
    },
    10: {
        img: '',
        text: 'C\'est une Lépiote-Cystoderme !',
        endStep: true
    },
    11: {
        img: '',
        text: 'Est-ce que les lamelles blanches deviennent roses, puis brun chocolat ?',
        yes: 12, 
        no: 13,
    },
    12: {
        img: '',
        text: 'C\'est une Psaliotte !',
        endStep: true
    },
    13: {
        img: '',
        text: 'Est-ce que les lamelles blanches deviennent noires et se transforment en liquide noir ?',
        yes: 14, 
        no: 9,
    },
    14: {
        img: '',
        text: 'C\'est un Coprin',
        endStep: true
    },
    15: {
        img: '',
        text: 'Est-ce qu\'il a un pied et que ce pied est attaché au centre du chapeau ?',
        yes: 17, 
        no: 16,
    },
    16: {
        img: '',
        text: 'C\'est une Pleurote !',
        endStep: true
    },
    17: {
        img: '',
        text: 'Est-ce que sa chair est ferme, grenue et cassante ?',
        yes: 18, 
        no: 21,
    },
    18: {
        img: '',
        text: 'Est-ce que sa chair contient du lait ?',
        yes: 19, 
        no: 20,
    },
    19: {
        img: '',
        text: 'C\'est un Lactaire !',
        endStep: true
    },
    20: {
        img: '',
        text: 'C\'est une Russule !',
        endStep: true
    },
    21: {
        img: '',
        text: 'Est-ce que chez le jeune champignon on observe des filaments fins, ou cortines, entre le bord du chapeau et le pied ?',
        yes: 22, 
        no: 30,
    },
    22: {
        img: '',
        text: 'Est-ce qu\'il pousse sur du bois mort ?',
        yes: 23, 
        no: 24,
    },
    23: {
        img: '',
        text: 'C\'est un Hypholome !',
        endStep: true
    },
    24: {
        img: '',
        text: 'Est-ce que ses lamelles déscendent le long du pied ?',
        yes: 25, 
        no: 26,
    },
    25: {
        img: '',
        text: 'C\'est un Gomphide !',
        endStep: true
    },
    26: {
        img: '',
        text: 'Est-ce que ses lamelles sont brun sale ?',
        yes: 27, 
        no: 28,
    },
    27: {
        img: '',
        text: 'C\'est un Hébélome !',
        endStep: true
    },
    28: {
        img: '',
        text: 'Est-ce que ses lamelles sont de couleur variée ?',
        yes: 29, 
        no: 26,
    },
    29: {
        img: '',
        text: 'C\'est un Cortinaire !',
        endStep: true
    },
    30: {
        img: '',
        text: 'Est-ce que ses lamelles déscendent le long du pied ?',
        yes: 31, 
        no: 42,
    },
    31: {
        img: '',
        text: 'Est-ce que ses lamelles sont épaisses ?',
        yes: 32, 
        no: 39,
    },
    32: {
        img: '',
        text: 'Est-ce que les lamelles forment de gros plis, avec le chapeau en entonnoir ?',
        yes: 33, 
        no: 34,
    },
    33: {
        img: '',
        text: 'C\'est une Chanterelle !',
        endStep: true
    },
    34: {
        img: '',
        text: 'Est-ce que les lamelles sont espacées, avec le chapeau visqueux ?',
        yes: 35, 
        no: 32,
    },
    35: {
        img: '',
        text: 'Est-ce que son chapeau est blanc ou de couleur assez vive ?',
        yes: 36, 
        no: 37,
    },
    36: {
        img: '',
        text: 'C\'est un Hygrophore !',
        endStep: true
    },
    37: {
        img: '',
        text: 'Est-ce que son chapeau est à la fois brun, roux et violacé ?',
        yes: 38, 
        no: 35,
    },
    38: {
        img: '',
        text: 'C\'est un Gomphide !',
        endStep: true
    },
    39: {
        img: '',
        text: 'Est-ce que ses lamelles se séparent facilement de la chair ?',
        yes: 40, 
        no: 41,
    },
    40: {
        img: '',
        text: 'C\'est une Paxille ou un Clitopile !',
        endStep: true
    },
    41: {
        img: '',
        text: 'C\'est un Clitocybe !',
        endStep: true
    },
    42: {
        img: '',
        text: 'Est-ce que ses lamelles sont échancrées ?',
        yes: 43, 
        no: 52,
    },
    43: {
        img: '',
        text: 'Est-ce que ses lamelles sont de couleur rose saumon ?',
        yes: 44, 
        no: 45,
    },
    44: {
        img: '',
        text: 'C\'est un Entolome !',
        endStep: true
    },
    45: {
        img: '',
        text: 'Est-ce que ses lamelles sont de couleur brun sale ?',
        yes: 46, 
        no: 47,
    },
    46: {
        img: '',
        text: 'C\'est un Hébélome !',
        endStep: true
    },
    47: {
        img: '',
        text: 'Est-ce que ses lamelles sont de couleur variée ?',
        yes: 48, 
        no: 43,
    },
    48: {
        img: '',
        text: 'Est-ce que son chapeau présente des stries rayonnantes et a le bord largemenent fendu ?',
        yes: 49, 
        no: 50,
    },
    49: {
        img: '',
        text: 'C\'est un Inocybe !',
        endStep: true
    },
    50: {
        img: '',
        text: 'Est-ce que son chapeau est lisse ou présente quelques stries rayonnantes ?',
        yes: 51, 
        no: 48,
    },
    51: {
        img: '',
        text: 'C\'est un Tricholome !',
        endStep: true
    },
    52: {
        img: '',
        text: 'Est-ce que les lamelles blanches deviennent noires et se transforment en liquide noir ?',
        yes: 53, 
        no: 54,
    },
    53: {
        img: '',
        text: 'C\'est un Coprin !',
        endStep: true
    },
    54: {
        img: '',
        text: 'Est-ce que les lamelles sont espacées, rose chair ou bleu violacé, de la même couleur que le pied et le chapeau ?',
        yes: 55, 
        no: 56,
    },  
    55: {
        img: '',
        text: 'C\'est un Laccaire !',
        endStep: true
    },
    56: {
        img: '',
        text: 'Est-ce que les lamelles sont de couleur variée (blanchâtre, brunâtre ou grisâtre) ?',
        yes: 57, 
        no: 52,
    },
    58: {
        img: '',
        text: 'Est-ce que son pied est épais ?',
        yes: 59, 
        no: 60,
    },
    59: {
        img: '',
        text: 'C\'est un Collybie !',
        endStep: true
    },
    60: {
        img: '',
        text: 'Est-ce que ses lamelles sont blanches ?',
        yes: 61, 
        no: 62,
    },
    61: {
        img: '',
        text: 'C\'est un Mycène !',
        endStep: true
    },
    62: {
        img: '',
        text: 'Est-ce que ses lamelles sont de couleur variée, et qu\'il se dessèche sans pourrir ?',
        yes: 63, 
        no: 60,
    },
    63: {
        img: '',
        text: 'C\'est un Marasme !',
        endStep: true
    },
};