export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
}

export async function fetchUsers(): Promise<User[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
        throw new Error(`Gagal mengambil data, status: ${response.status}`);
    }

    const data: User[] = await response.json();
    return data;
}
