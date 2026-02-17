#### 1) What is the difference between `null` and `undefined`?

Ans: undefined মানে হলো — variable তৈরি করা হয়েছে, কিন্তু এখনো কোনো মান সেট করা হয়নি।
আর null হলো — যেখানে কোন value সেখানে আমরা ইচ্ছাকৃত ভাবে সেট করি, যাতে বোঝা যায় এই variable টার কোন value নেই।

#### 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?

Ans: map() ব্যবহার করা হয় যখন আমরা একটি array থেকে নতুন আরেকটি array বানাতে চাই।
আর forEach() ব্যবহার করা হয় শুধু একটা একটা করে কাজ করার জন্য, কিন্তু এটি নতুন array রিটার্ন করে না।

#### 3) What is the difference between `==` and `===`?

Ans: (==) শুধুমাত্র value চেক করে আর, (===) চেক করে মান value + type. এই কারণেই === বেশি নিরাপদ।

#### 4) What is the significance of `async`/`await` in fetching API data?

Ans: async/await ব্যবহার করলে asynchronous কাজ যেমন- API call অনেক সহজ ও পরিষ্কারভাবে লেখা যায়।
এতে করে কোড পড়তে সহজ হয় callback বা .then() এর ঝামেলা কমে error handle করা সহজ হয়।

#### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

Ans: Scope মানে হলো কোন ভ্যারিয়েবল কোথা থেকে ব্যবহার করা যাবে।

Global Scope: যে variable, function-এর বাইরে লেখা হয়, সেটি সব জায়গা থেকে ব্যবহার করা যায়।

Function Scope: Function-এর ভিতরে লেখা variable শুধুমাত্র ফাংশনের ভিতরেই কাজ করে।

Block Scope: { } এর মধে লেখা code শুধু এই Block-এর মধ্যেই কাজ করে, এই Block-এর বাইরে এর ভিতরের code কাজ করেনা তাই { } একে Block Scope বলে।

- \*\*Live Link :
