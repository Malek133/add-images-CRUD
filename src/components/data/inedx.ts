

import { v4 as uuid } from "uuid";
import { IImage } from "../interface";

export const  ImagesListe:IImage [] = [
    {
     id:uuid(),
     Url:"https://i.pinimg.com/564x/5b/af/10/5baf1094e28c721a01b931435521d305.jpg"
    },
    {
        id:uuid(),
        Url:"https://i.pinimg.com/564x/41/8e/9c/418e9c187499209f23c33743a119b1c9.jpg"
    },
    {
        id:uuid(),
        Url:"https://i.pinimg.com/564x/27/10/bf/2710bfe36d17cc59a0171f972cbc8732.jpg"
    }
]