import { fetchUsers } from "./api";

async function main() {
  console.log("Status: loading...");

  try {
    const users = await fetchUsers();
    console.log("Status: berhasil");
    console.log(`Jumlah user: ${users.length}`);

    users.forEach((user) => {
      console.log(`${user.id}. ${user.name} - ${user.email}`);
    });

  } catch (error) {
    console.log("Status: error");
    if (error instanceof Error) {
      console.log("Ada error:", error.message);
    }
  }
}

main();












