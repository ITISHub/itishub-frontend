// TODO: logic of FormDialog (beta)
// export const state = () => ({
//   email: '',
//   text: '',
// });
//
// export const mutations = {
//   setEmail(state, email) {
//     state.email = email
//   },
//   setText(state, text) {
//     state.text = text
//   }
// };
//
// export const actions = {
//   async sendReview({ commit }) {
//     let data = {
//       email: this.email,
//       text: this.text
//     };
//     fetch(process.env.baseUrl + process.env.reviewAccess,{
//         method: "POST",
//         headers: {
//           'Content-Type':'application/json'
//         },
//         body: JSON.stringify(data)
//       }
//     )
//   },
// };
//
// export const getters = {
//   email: s => s.email,
//   text: s => s.text,
// };
