export class PersonajesSelect {
    tipo: string;
    result: string;

    constructor(tipo : string) {
        this.tipo = tipo;
        this.result = '';
        switch (tipo) {
            case ("goku") : this.result = 'https://imgmedia.larepublica.pe/640x377/larepublica/original/2022/05/09/62795bb986714c1408032e97.webp'; break;
            case ('luffy') : this.result = 'https://depor.com/resizer/A0dgVMme9ikVFocysmrmWNWdu14=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/KZWXP7XELJE4PGKPJGNMZKZAGM.jpg'; break;
            case ('gojo') : this.result = 'https://www.nintenderos.com/wp-content/uploads/2022/10/jujutsu-kaisen-gojo-cosplay.webp'; break;
            case ('ichigo') : this.result = 'https://fotografias-neox.atresmedia.com/clipping/cmsimages02/2022/10/28/4628A44F-C271-4CA8-927C-4E1B8E3B2FF8/bleach-tybw_98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=high&format=webply'; break;
            case ('eren') : this.result = 'data:image/jpeg;base64,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'; break;
        }
    }
}