const express = require("express");
const {
  handleGetUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleCreateUsers,
  handleDeleteUserById,
} = require("../controllers/user");

const router = express.Router();

// Routes
// router.get("/", async (req, res) => {
//   const allDbUsers = await User.find({});
//   // const html = `
//       // <ul>${allDbUsers
//       //   .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
//       //   .join("")}</ul>
//       // `;

//   const html1 = `
//       <table border="1">
//       <tr>
//         <td>FirstName</td>
//         <td>LastName</td>
//         <td>Email</td>
//         <td>jobTitle</td>
//       </tr>
//       ${allDbUsers
//         .map(
//           (user) => `
//         <tr> <td>${user.firstName}</td>
//         <td>${user.lastName}</td>
//         <td>${user.email}</td>
//         <td>${user.jobTitle}</td>
//           </tr>`
//         )
//         .join("")}
//       </table>
//       `;
//   res.send(html1);
// });

router.route("/").get(handleGetUsers).post(handleCreateUsers);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
