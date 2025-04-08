interface AuthCredentials {
    fullName: string;
    email: string;
    password: string;
}

interface BookParams {
    title: string;
    author: string;
}

interface Book {
    id: string;
    title: string;
    author: string;
    createdAt: Date | null;
}

interface User {
    id: string;
    fullName: string;
    email: string;
}