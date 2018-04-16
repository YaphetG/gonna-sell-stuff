
export class ProductModel {
    constructor(
        public id,
        public name,
        public date,
        public postedBy,
        public picUrl
    ){}    
}

export class WishListItemModel{
    constructor(
        public products: ProductModel[]
    ) {}
}