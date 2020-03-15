export enum BannerTypeSet{
    NEWS = 1,
    SPECIAL = 2,
    MEDIA = 3,
    TWO_COL = 4,
    FULLBG=5,
    UNDEFINED = 255
}
export interface IBannerButtons {
    value: string;
    link: string;
}
export interface IBannerTextBlock {
    header: string;
    value: string;
}

export interface IBanner{
    header: string;
    type: BannerTypeSet;
    subheader?: string;
    textBlock?: IBannerTextBlock[];
    specBlock?: IBannerTextBlock[];
    buttons?: IBannerButtons[];
}
