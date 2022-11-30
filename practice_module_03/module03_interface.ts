interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}

// type Employee //でも可能

let employee: Employee = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

/**
 * Interfaceのプロパティ
 * <propertyName>: <型>、必須
 * <propertyName>?: <型>、省略可能
 * readonly <propertyName>: <型>、読み取り専用(constantに近い、初回以外は変更できない)
 */

interface IceCream {
    flavor: string;
    scoops: number;
}

let myIceCream: IceCream = {
    flavor: "vanilla",
    scoops: 2
}

console.log(myIceCream.flavor);


function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + "is too many scoops!";
    } else {
        return "your order will be ready soon!";
    }
}

console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5 }))


interface IceCreamArray {
    [index: number]: string;
    // インデックスシグネチャ
}

let myIceCramArry: IceCreamArray;
myIceCramArry = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCramArry[0];
console.log(myStr);


// インターフェイスを使用して JavaScript API を記述する
const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();