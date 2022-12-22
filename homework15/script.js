// const response = {
//     data: [
//       {
//         username: "samuel",
//         is_active: true,
//         created_at: "2020-11-20T09:53:50.000000Z",
//       },
//       {
//         username: "john",
//         is_active: false,
//         created_at: "2020-11-20T09:53:50.000000Z",
//       },
//       {
//         username: "peter",
//         is_active: false,
//         created_at: "2020-11-20T09:53:50.000000Z",
//       },
//     ],
//     meta: {
//       paging: {
//         current: 1,
//         next: 2,
//         prev: null,
//         total: 14,
//         per_page: 3,
//       },
//     },
//   };


//   const { 
//     data: [,{is_active: isActive}],
//     meta: { paging: { total} } } = response
//   console.log(total)
//   console.log(isActive)

// const user = {
//     name: "gabriel",
//     surname: "brown",
//     age: 17,
//     height: 178,
//   };

//   const { name, surname, ...parameters } = user

// console.log(parameters);
// console.log(surname);
// console.log(name);

// const maxNumber = (...numbers) => {
//     let max = 0
//     numbers.forEach((num) => {
//          if(num > max) {
//             max = num}
//             })
//             return max
// };

// const res = maxNumber(2, 1, 10)
// console.log(res)

const createMessage = (writer) => {
const {author = 'writer', text, receiver, time = new Date()} = writer

    return `From ${author} to ${receiver}: ${text} (${time.toLocaleDateString()})`;
  };

  const message = createMessage({
    receiver: "John",
    text: "Hi!",
  });

console.log(message)

// let regexp1 = /\w\d+\w/gi;

// let regexp2 = /([a-z.-_]+).([\w]{2,})/gi;

// let regexp3 = /(\d+){12,}/gi