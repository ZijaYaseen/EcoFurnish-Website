export const Nav = [
    {name:"Home", Link:"/"},
    {name:"Shop", Link:"/Shop"},
    {name:"About", Link:"/About"},
    {name:"Contact", Link:"/Contact"},
]

// In your data file (e.g., '@/data/index.ts')
export const NavMbl = [
    { name: "Home", link: "/" },
    { 
      name: "Shop", 
      link: "/Shop",
      subItems: [
        { 
          name: "Bed", 
          link: "/Shop/category1",
          subItems: [
            { name: "Platform Beds", link: "https://www.amazon.com/s?k=Platform+beds&crid=2EVSDG0CU6UMJ&sprefix=platform+b%2Caps%2C1250&linkCode=ll2&tag=zijaecommerce-20&linkId=761dd791f16341f6665551fab62b2b90&language=en_US&ref_=as_li_ss_tl" },
            { name: "Storage Beds", link: "https://www.amazon.com/s?k=storage+bed&crid=3IOENH368BRL3&sprefix=storage+beds+full+si%2Caps%2C920&linkCode=ll2&tag=zijaecommerce-20&linkId=00effc269afdae99aa49dc5bb92f9a16&language=en_US&ref_=as_li_ss_tl"},
            { name: "Upholstered Beds", link: "https://www.amazon.com/s?k=Upholstered+Beds&crid=3FBHP20653VCC&sprefix=storage+%2Caps%2C1739&linkCode=ll2&tag=zijaecommerce-20&linkId=5915929853352db16405eed931cd1aea&language=en_US&ref_=as_li_ss_tl" },
            { name: "Bunk Beds", link: "https://www.amazon.com/s?k=Bunk+Beds&crid=3IFJNDXXIW9IC&sprefix=bu+beds%2Caps%2C885&linkCode=ll2&tag=zijaecommerce-20&linkId=4628d54257f90c717425d8196b169d50&language=en_US&ref_=as_li_ss_tl" },
            { name: "Canopy Beds", link: "https://www.amazon.com/s?k=canopy+beds&crid=40LH9BNLP0B0&sprefix=canopy+beds%2Caps%2C863&linkCode=ll2&tag=zijaecommerce-20&linkId=eac82536f1dcc132aa4c0caa5b8d84f8&language=en_US&ref_=as_li_ss_tl" },
            { name: "Double Beds", link : "https://www.amazon.com/s?k=double+beds&crid=1553OEJXQ6KAV&sprefix=doub+beds%2Caps%2C916&linkCode=ll2&tag=zijaecommerce-20&linkId=f493cabcec7f6dc2b4e4dbde87e3195f&language=en_US&ref_=as_li_ss_tl"},
            { name: "Single Beds", link : "https://www.amazon.com/s?k=single+beds&crid=LGTKZZUGQ46K&sprefix=sling+beds%2Caps%2C879&linkCode=ll2&tag=zijaecommerce-20&linkId=e7192721127798e591328975de692764&language=en_US&ref_=as_li_ss_tl"}
          ]
        },
        { 
            name: "Wardrobe", 
            link: "https://www.amazon.com/s?k=wardrobe&crid=1AQUTDLYL09FA&sprefix=war%2Caps%2C1315&linkCode=ll2&tag=zijaecommerce-20&linkId=eb2610412216f417b48621dac2def588&language=en_US&ref_=as_li_ss_tl",
            subItems: [
              { name: "Sliding Door Wardrobe", link: "https://www.amazon.com/stores/page/3ABE7240-9C07-48F3-8ADE-863CD8825783?_encoding=UTF8&store_ref=SB_A03257346X6PLFU7SIN1-A06482242GXEVF76XLHDM&pd_rd_plhdr=t&aaxitk=4175700ac17c1f9a3cc5eccafea90fc7&hsa_cr_id=0&lp_asins=B0DCZMD6VX%2CB0DCZNFRLN&lp_query=sliding+door+wardrobe+with+mirror&lp_slot=desktop-hsa-3psl&pd_rd_w=QD4SC&content-id=amzn1.sym.5594c86b-e694-4e3e-9301-a074f0faf98a%3Aamzn1.sym.5594c86b-e694-4e3e-9301-a074f0faf98a&pf_rd_p=5594c86b-e694-4e3e-9301-a074f0faf98a&pf_rd_r=SNH58Z7B27Q2NVAN2ZQ2&pd_rd_wg=BDipF&pd_rd_r=fd1d6c3a-9ff4-425e-b4e4-8f9b504e8d69&linkCode=ll2&tag=zijaecommerce-20&linkId=5d63ada1ae1ffdda85d6dcaa4f743e33&language=en_US&ref_=as_li_ss_tl" },
              { name: "Hinged Door Wardrobe", link: "https://www.amazon.com/s?k=hinged+door+wardrobe&crid=1A133II3Z6G3O&sprefix=hinged+door+ward%2Caps%2C1997&linkCode=ll2&tag=zijaecommerce-20&linkId=fb86b0031f66b30aff041de17a0c6a4b&language=en_US&ref_=as_li_ss_tl" },
              { name: "Walk-in Wardrobe", link: "/Shop/category1/subcategory3" },
              { name: "Built-in Wardrobe", link: "/Shop/category1/subcategory4" },
              { name: "Freestanding Wardrobe", link: "/Shop/category1/subcategory5" },
              { name: "Wardrobe with Loft", link: "/Shop/category1/subcategory5" },
              { name: "Glass Door Wardrobe", link: "/Shop/category1/subcategory5" },
            ]
          },
          { 
            name: "Chair", 
            link: "/Shop/category1",
            subItems: [
              { name: "Subcategory 1", link: "/Shop/category1/subcategory1" },
              { name: "Subcategory 2", link: "/Shop/category1/subcategory2" },
              { name: "Subcategory 3", link: "/Shop/category1/subcategory3" },
              { name: "Subcategory 4", link: "/Shop/category1/subcategory4" },
              { name: "Subcategory 5", link: "/Shop/category1/subcategory5" },
            ]
          },
          { 
            name: "Sofa", 
            link: "/Shop/category1",
            subItems: [
              { name: "Subcategory 1", link: "/Shop/category1/subcategory1" },
              { name: "Subcategory 2", link: "/Shop/category1/subcategory2" },
              { name: "Subcategory 3", link: "/Shop/category1/subcategory3" },
              { name: "Subcategory 4", link: "/Shop/category1/subcategory4" },
              { name: "Subcategory 5", link: "/Shop/category1/subcategory5" },
            ]
          },
          { 
            name: "Table", 
            link: "/Shop/category1",
            subItems: [
              { name: "Subcategory 1", link: "/Shop/category1/subcategory1" },
              { name: "Subcategory 2", link: "/Shop/category1/subcategory2" },
              { name: "Subcategory 3", link: "/Shop/category1/subcategory3" },
              { name: "Subcategory 4", link: "/Shop/category1/subcategory4" },
              { name: "Subcategory 5", link: "/Shop/category1/subcategory5" },
            ]
          },
      ]
    },
    { name: "About", link: "/About" },
    { name: "Contact", link: "/Contact" },
  ];
  

export const Help = [
    {name:"Payment Options", Link:"/"},
    {name:"Returns", Link:"/"},
    {name:"Privacy Policies", Link:"/"},

];

export interface Products {
    _id: string;
    name: string;
    imagePath: string;
    category?: string;
    tags?: string[];
    amazonLink? : string;
}

export interface IProduct {
    _id: string;
    name: string;
    imagePath: string;
    description: string;
    size:string[],
    color:string[],
    price: number;
    category?: string;
    stockLevel: number;
    isFeaturedProduct?: boolean;
    discountPercentage: number;
    tags?: string[];
    
  }

export const blog = [
    {
        image:"blog1.svg",
        title:"Going all-in with millennial design",
    },
    {
        image:"blog2.svg",
        title:"Going all-in with millennial design",
    },
    {
        image:"blog3.svg",
        title:"Going all-in with millennial design",
    },
];

export const shop = [
    {
        id:"Trenton-modular-sofa_3",
        image: "/shop1.svg",
        title :"Trenton modular sofa_3",
        price :"Rs. 25,000.00",
        link :"/"
    },
    {
        id:"Granite-dining-table-with-dining-chair",
        image: "/shop2.svg",
        title :"Granite dining table with dining chair",
        price :"Rs. 25,000.00",
        link :"/"
    },
    {
        id:"Outdoor-bar-table-and-stool",
        image: "/shop3.svg",
        title :"Outdoor bar table and stool",
        price :"Rs. 25,000.00",
        link :"/"
    },
    {
        id:"Plain-console-with-teak-mirror",
        image: "/shop4.svg",
        title :"Plain console with teak mirror",
        price :"Rs. 25,000.00",
        link :"/"
    },
    {
        id:5,
        image: "/shop5.svg",
        title :"Grain coffee table",
        price :"Rs. 15,000.00",
        link :"/"
    },
    {
        id:6,
        image: "/shop6.svg",
        title :"Kent coffee table",
        price :"Rs. 225,000.00",
        link :"/"
    },
    {
        id:7,
        image: "/shop7.svg",
        title :"Round coffee table_color 2",
        price :"Rs. 251,000.00",
        link :"/"
    },
    {
        id:8,
        image: "/shop8.svg",
        title :"Reclaimed teak coffee table",
        price :"Rs. 25,200.00",
        link :"/"
    },
    {
        id:9,
        image: "/shop9.svg",
        title :"Plain console_",
        price :"Rs. 258,200.00",
        link :"/"
    },
    {
        id:10,
        image: "/shop10.svg",
        title :"Reclaimed teak Sideboard",
        price :"Rs. 20,000.00",
        link :"/"
    },
    {
        id:11,
        image: "/shop11.svg",
        title :"SJP_0825 ",
        price :"Rs. 200,000.00",
        link :"/"
    },
    {
        id:12,
        image: "/shop12.svg",
        title :"Bella chair and table",
        price :"Rs. 100,000.00",
        link :"/"
    },
    {
        id:13,
        image: "/shop13.svg",
        title :"Granite square side table",
        price :"Rs. 258,800.00",
        link :"/"
    },
    {
        id:14,
        image: "/shop14.svg",
        title :"Asgaard sofa",
        price :"Rs. 250,000.00",
        link :"/Single-Product"
    },
    {
        id:15,
        image: "/shop15.svg",
        title :"Maya sofa three seater",
        price :"Rs. 115,000.00",
        link :"/"
    },
    {
        id:16,
        image: "/shop16.svg",
        title :"Outdoor sofa set",
        price :"Rs. 244,000.00",
        link :"/"
    },

];

export const blogposts = [
    {
        image:"/blogPost1.svg",
        title :"Going all-in with millennial design",
        description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        Link :"/"
    },
    {
        image:"/blogPost2.svg",
        title :"Exploring new ways of decorating",
        description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        Link :"/"
    },
    {
        image:"/blogPost3.svg",
        title :"Handmade pieces that took time to make",
        description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
        Link :"/"
    },

];

export const shortBlogs = [
    {
        image :"/shortBlog1.svg",
        title :"Going all-in with millennial design",
        date:"03 Aug 2022",
    },
    {
        image :"/shortBlog2.svg",
        title :"Exploring new ways of decorating",
        date:"03 Aug 2022",
    },
    {
        image :"/shortBlog3.svg",
        title :"Handmade pieces that took time to make",
        date:"03 Aug 2022",
    },
    {
        image :"/shortBlog4.svg",
        title :"Modern home in Milan",
        date:"03 Aug 2022",
    },
    {
        image :"/shortBlog5.svg",
        title :"Colorful office redesign",
        date:"03 Aug 2022",
    },
]