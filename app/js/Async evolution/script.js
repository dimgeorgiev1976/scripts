console.clear()
// getProducts => список продуктов


// getBasket => basket
// clearBasket => 

// addProductToBasket => список продуктов
// removeProductToBasket => утдалят

// console.log('Start')
// let basket = []

//  basket = Sync.getBasket()
// console.table(basket)

// const products = Sync.getProducts()  
// console.table(products)

//  basket = Sync.addProductToBasket(products[0])
// console.table(basket)
 
//  basket = Sync.addProductToBasket(products[1])
// console.table(basket)


/* .........  secound method ........
...................................*/

// console.log('Start')
// let basket = []

// Callback.getBasket(function(basket){
// 	console.table(basket)

// 	Callback.getProducts(function(products){
// 		console.table(products)

// 		Callback.addProductToBasket(products[0], function (basket){
// 			console.table(basket)
// 		})
// 	})
// });

// console.log('Finish')

// console.log('Another work')

/* .........  third method ........
.................................*/

// console.log('Start')

// let basket = []
// let products = []

// ByPromise.getBasket()

// 	.then(_basket => {
// 		basket = _basket
// 		console.log(basket)

// 		// return ByPromise.getProducts()
// 		throw Error('some error')
// 	})

// 	.then(_products => {
// 		products = _products
// 		console.table(products)

// 		return ByPromise.addProductToBasket(products[1])
// 	})

// 	.then(_basket => {
// 		basket = _basket
// 		console.table(basket)

// 		return ByPromise.addProductToBasket(products[3])
// 	})

// 	.then(_basket => {
// 		basket = _basket
// 		console.table(basket)

// 		return 5
// 	})

// 	.then(value =>{
// 		console.log(value)
// 	})

// 	.catch(err => {
// 		console.log(err)
// 	})


// console.log('Finish')

// console.log('work!')

// const a = [0, 1, 2]
// const b = [3, 4, 5]
// const c = [...a, ...b]
// console.log(c)


console.log('Start')

main()

console.log('Finish')


async function main() {
	try {
		let basket = await ByPromise.getBasket()
		console.log(basket)

		const products = await ByPromise.getProducts()
		console.table(products)
		throw Error('some error')
		await Promise.all([
			ByPromise.addProductToBasket(products[0]),
			ByPromise.addProductToBasket(products[0]),
			ByPromise.addProductToBasket(products[0]),
			ByPromise.addProductToBasket(products[1])
			])

		basket = await ByPromise.getBasket()
		console.table(basket)
	} catch (err) {
		console.log(err)
	}
	
}
 



