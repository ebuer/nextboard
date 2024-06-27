export interface INavigationItem {
    id?: number;
    name?: string;
    href?: string;
    current?: boolean;
    icon?: any;
    initial?: string;
    children?: INavigationItem[];
}

export interface INavigation {
    main: INavigationItem[];
    sub: INavigationItem[];
    user: INavigationItem[];
}