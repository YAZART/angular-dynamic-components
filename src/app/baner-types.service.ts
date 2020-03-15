import { Injectable } from '@angular/core';
import { BannerTypeSet, IBanner } from './common/interfaces';

@Injectable({providedIn: 'root'})
export class BanerTypeCreatorService {
    constructor() { }

    createNews(): IBanner{
        return {
            header: 'NEWS',
            type: BannerTypeSet.NEWS
        };
    }
    createSpecial(): IBanner{
        return {
            header: 'SPECIAL',
            textBlock: [
                { header: 'spec1', value: 'spec-value1'},
                { header: 'spec2', value: 'spec-value2'}
            ],
            type: BannerTypeSet.SPECIAL
        };
    }
    createMedia(): IBanner{
        return {
            header: 'NEWS',
            type: BannerTypeSet.MEDIA
        };

    }
    createTwoCol(): IBanner{
        return {
            header: 'NEWS',
            type: BannerTypeSet.TWO_COL
        };
    }
    createFullBg(): IBanner{
        return {
            header: 'NEWS',
            type: BannerTypeSet.FULLBG
        };
    }
    createDefault(): IBanner{
        return {
            header: 'NEWS',
            type: BannerTypeSet.UNDEFINED
        };
    }
}