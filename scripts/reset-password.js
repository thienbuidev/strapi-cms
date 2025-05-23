module.exports = async () => {
  const crypto = require("crypto");
  const bcrypt = require("bcryptjs");

  const email = "minh.le@stunited.vn";
  const newPassword = "Am123123";

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  await strapi.db.query("plugin::users-permissions.user").updateMany({
    where: { email },
    data: { password: hashedPassword },
  });

  console.log(`Đã đặt lại mật khẩu cho ${email}`);
};
