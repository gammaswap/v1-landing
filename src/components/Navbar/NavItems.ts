interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
    target?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Protocol",
        href: "https://medium.com/gammaswap-labs/gammaswap-protocol-6a4430e4b0ad",
        target: "_blank"
    },
    {
        label: "Blog",
        href: "https://medium.com/gammaswap-labs",
        target: "_blank"
    },
    //{
    //    label: "About Us",
    //    href: "#",
    //    target: ""
    //},
];

export type navItem = NavItem;

export default NAV_ITEMS;